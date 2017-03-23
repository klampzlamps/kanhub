import React, { Component } from 'react';
import { NotInTeam, Chat, WaitingRoom, StandupBox, StandupProfile, StandupCard } from '../components/components';
import { NoTeamFound, TeamSubNav } from '../../team/components/components';
import { changeLocationHash } from '../../pageHelper';
import { createSocket } from '../../socketCommon';
import * as model from '../model/model';

let socket;

class StandupContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedTeamId: parseInt(props.query.id) || (this.props.teams.length > 0 && this.props.teams[0].id),
      users: {},
      messages: [],
      message: '',
    };
  };

  _onJoinSuccess(lobbyUsers) {
    model.getAllUserInfo({users: lobbyUsers}).then(function(users) {

      var usersMap = users.reduce(function(map, user) {
        map[user.login] = user;
        return map;
      }, {});

      this.setState({
        users: usersMap,
      });
      
    }.bind(this));
  };

  _onMessageReceive(message) {
      let { messages } = this.state;
      messages.push(message);
      this.setState({
        messages: messages,
      });
  };

  _onUserJoin(username) {
      let { users, messages } = this.state;

      messages.push({
          author: '!kanhub_bot!',
          content: username +' Joined'
      });

      // user not found in user list, add it
      if (!users[username]) {
        model.getUserInfo({username: username}).then(function(user) {
          users[username] = user;

          this.setState({
            users: users,
            messages: messages,
          });
        }.bind(this));
      } else {
        this.setState({
          messages: messages,
        });
      }
  };

  _onUserLeave(username) {
      let { users, messages } = this.state;
      users[username] = null;
      messages.push({
          author: '!kanhub_bot!',
          content: username +' Left'
      });
      this.setState({
        users: users,
        messages: messages,
      });
  };

  componentDidMount() {
    if (this.props.teams && this.props.teams.length > 0) {
      const team = this.props.teams.find(function (team) {
          return team.id === this.state.selectedTeamId;
      }.bind(this));

      if (!team) {
        return;
      }

      document.body.style.width = "80%";
      socket = createSocket(this.props.socketToken);

      socket.on('connect', function () {
        socket.emit('join_lobby', team.id);
      }.bind(this));

      socket.on('join_lobby_success', this._onJoinSuccess.bind(this));
      socket.on('user_joined_lobby', this._onUserJoin.bind(this));
      socket.on('user_left_lobby', this._onUserLeave.bind(this));
      socket.on('message_received', this._onMessageReceive.bind(this));
    }
  };

  componentWillUnmount() {
    console.log('unmounting');
    if (socket) {
      socket.disconnect();
    }
  };

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleSendMessage = () => {
    socket.emit('send_message', this.state.selectedTeamId, this.state.message);

    // TODO: should probably push message right away here instead of waiting for server
  };

  handleNavSelect = (teamId) => {
    // leave current lobby first
    socket.emit('leave_lobby', this.state.selectedTeamId, function(id) {

      window.history.pushState({}, "", "#Standup?id=" + teamId);

      this.setState({
        selectedTeamId: teamId,
        users: {},
        messages: [],
        message: '',
      });

      // join new lobby
      socket.emit('join_lobby', teamId);
    }.bind(this));

  };

  handleFindTeam() {
    changeLocationHash("#Team");
  }

  render() {

    if (this.props.teams) {
      if (this.props.teams.length > 0) {

        const team = this.props.teams.find(function (team) {
          return team.id === this.state.selectedTeamId;
        }.bind(this));

        if (!team) {
          return (
            <NoTeamFound />
          );
        }

        return (
          <div>
            <Chat teamName={team.displayName} messages={this.state.messages} handleMessageChange={this.handleMessageChange} handleSendMessage={this.handleSendMessage} />
            <TeamSubNav teams={this.props.teams} selectedTeamId={this.state.selectedTeamId} handleNavSelect={this.handleNavSelect} />
            <WaitingRoom users={this.state.users}/>
            <StandupBox>
              <StandupProfile username="omfgitsjack" src="https://avatars0.githubusercontent.com/u/4117654?v=3&s=460"/>
              <StandupCard/>
            </StandupBox>
          </div>
        );
      } else {
        return (
          <NotInTeam handleFindTeam={this.handleFindTeam} />
        );
      }
    }
  };
}

export default StandupContainer;