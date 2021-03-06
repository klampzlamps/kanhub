import React, { Component } from 'react';
import {
  RepoContent, SubNav, SubNavItem, SectionContainer,
  SectionTitle, SectionHeader, SectionButtonGroup, NormalButton, PrimaryButton,
  PrimaryButtonSmall, DangerButton, BlankSlate, BlankSlateSpacious,
  UserCard, Box, PopupBox, PopupBoxList, PopupBoxListItem
} from '../../github_elements/elements';
import IssuesCharts from './IssuesChart';
import { getColorByBgColor } from '../../helper';
import styles from '../styles/style';

import 'react-select/dist/react-select.css';
import Select from 'react-select';

var octicons = require("octicons");

export const TeamSubNav = (props) => {

  const teams = props.teams.map((team, i) => {
    return <SubNavItem key={i} label={team.displayName} selected={team.id === props.selectedTeamId} onClick={function (e) {
      e.preventDefault();
      props.handleNavSelect(team.id);
    }} />
  });

  return (
    <SubNav>
      {teams}
    </SubNav>
  );
};

export const TeamInfo = (props) => {
  return (
      <p className="lead">{props.description}</p>
  );
}

export const TeamSection = (props) => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>{props.heading}</SectionTitle>
      </SectionHeader>
      {props.children}
    </SectionContainer>
  )
};

export const TeamIssues = (props) => {
  const closedURL = '/' + props.owner + '/' + props.repo + '/issues?q=is:closed+is:issue+label:' + '"' + props.label + '"';
  const openURL = '/' + props.owner + '/' + props.repo + '/issues?q=is:open+is:issue+label:' + '"' + props.label + '"';
  return (
    <div>
      <Box heading="Issues">
        <ul className="summary-stats">
          <li style={styles.issueListItem}>
            <a href={closedURL}>
              <div style={styles.issueHeader}>
                <div style={styles.issueClosedIcon} dangerouslySetInnerHTML={{ __html: octicons['issue-closed'].toSVG() }}></div>
                <div style={styles.issueCount}>{props.closedIssues.size}</div>
              </div>
              Closed Issues
            </a>
          </li>
          <li style={styles.issueListItem}>
            <a href={openURL}>
              <div style={styles.issueHeader}>
                <div style={styles.issueOpenIcon} dangerouslySetInnerHTML={{ __html: octicons['issue-opened'].toSVG() }}></div>
                <div style={styles.issueCount}>{props.openIssues.size}</div>
              </div>
              Open Issues
            </a>
          </li>
        </ul>
        <div className="border-top">
          <h3 style={styles.chartTitle}>Weekly issue progress</h3>
          <IssuesCharts issues={props.issues} issueDate="created_at" daysSince={7} />
        </div>
      </Box>
    </div>
  );
};

export const TeamMembers = (props) => {

  const members = props.members.map(function (member, i) {
    return <UserCard key={i} user={member} />;
  });

  return (
    <div>{members}</div>
  );
}

export const NoTeamFound = (props) => {
  const heading = "Oh no! The team you are looking for isn't here..";
  return (
    <BlankSlateSpacious heading={heading} icon={octicons['issue-opened'].toSVG({ "width": 45, "height": 45 })}/>
  );
}

export const NoTeams = (props) => {
  const heading = "There aren't any teams.";
  const description = "Create teams to organize your team's internal structure.";
  return (
    <BlankSlateSpacious heading={heading} description={description} icon={octicons.octoface.toSVG({ "width": 45, "height": 45 })}>
      <p><PrimaryButtonSmall onClick={props.handleCreateTeamSelect}>New Team</PrimaryButtonSmall></p>
    </BlankSlateSpacious>
  );
}

export const NoPresenter = (props) => {
  const heading = "Oh no! The presenter left the session!";
  const description = props.timeLeft;
  return (
    <BlankSlateSpacious heading={heading} description={description} icon={octicons['issue-opened'].toSVG({ "width": 45, "height": 45 })}>
      <p><PrimaryButtonSmall onClick={props.handleNextPerson}>Skip Presenter</PrimaryButtonSmall></p>
    </BlankSlateSpacious>
  );
}

export const NoMembers = (props) => {
  const heading = `There aren't any members in ${props.teamName}.`;
  return (
    <BlankSlate heading={heading} icon={octicons.hubot.toSVG({ "width": 45, "height": 45 })}>
      <p><PrimaryButtonSmall onClick={props.handleJoinTeam}>Join Team</PrimaryButtonSmall></p>
    </BlankSlate>
  );
}

export const SelectLabelList = (props) => {
  const options = props.labels.map(function(label) {
    return {value: label.name, label: label.name};
  });

  return (
    <Select
      placeholder="Select an issue label for this team to track..."
      value={props.teamLabel || ''}
      options={options}
      onChange={props.handleOnSelectChange}
    />
  );
}

export const TeamLabel = (props) => {

  if (!props.label) {
    return <div></div>;
  }

  let colorStyle = Object.assign({}, styles.teamLabel);
  colorStyle.background = '#' + props.label.color;
  colorStyle.color = getColorByBgColor('#' + props.label.color);

  return (
    <div style={colorStyle}>{props.label.name}</div>
  );
}