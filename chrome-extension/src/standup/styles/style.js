export const styles = {
  chatContainer: {
    position: "fixed",
    right: "0px",
    bottom: "0px",
    top: "0px",
    width: "20vw",
    minWidth: "250px",
    zIndex: "500",
    background: "#fafbfc",
  },
  chatHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    height: "54.4px",
    background: "#24292e",
    color: "#ffffff",
  },
  chatGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  chatSection: {
    display: "block",
    position: "absolute",
    top: "54px",
    bottom: "125px",
    width: "100%",
    height: "auto",
    backgroundClip: "content-box",
    overflow: "hidden",
    overflowY: "scroll",
  },
  chatMessageList: {
    padding: "10px 0px",
    listStyleType: "none",
  },
  chatMessageAuthor: {
    fontWeight: "bold",
    marginRight: "5px",
  },
  chatMessageContent: {
    margin: "0px",
    padding: "0px",
    boxSizing: "border-box",
  },
  chatMessagePresenter: {
    fontWeight: "bold",
    marginRight: "5px",
    color: "#ff4f4f",
  },
  chatMessageContentForMe: {
    margin: "0px",
    padding: "0px",
    boxSizing: "border-box",
    background: "#fffcc9",
  },
  chatMessage: {
    fontSize: "12px",
    lineHeight: "20px",
    padding: "6px 20px",
    margin: "-3px 0",
    wordWrap: "break-word",
    listStylePosition: "unset",
  },
  chatFooter: {
    position: "absolute",
    bottom: "0px",
    height: "125px",
    width: "100%",
    padding: "0px 15px 20px 15px",
    boxSizing: "border-box",
  },
  chatText: {
    height: "65px",
    width: "100%",
    resize: "none",
  },
  waitingRoomMemberList: {
    display: "block",
    overflow: "hidden",
    overflowY: "auto",
    width: "100%",
    height: "150px",
  },
  waitingRoomButtonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "20px 0px",
  },
  standUpProfile: {
    margin: "15px",
    textAlign: "center",
  },
  standUpProfilePicture: {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    overflow: "hidden",
    marginTop: "10px",
  },
  standUpCard: {
    display: "flex",
    flexDirection: "column",
    width: "550px",
    minHeight: "420px",
    boxShadow: "0px 0px 66px 7px rgba(0,0,0,0.1)",
    borderRadius: "2px",
    background: "#fafbfc",
    padding: "20px",
    marginBottom: "20px",
  },
  standUpCardHeader: {
    marginTop: "10px",
  },
  standUpCardText: {
    minHeight: "65px",
    width: "100%",
    resize: "none",
    overflow: "hidden",
  },
  standUpCardNoText: {
    minHeight: "65px",
    width: "100%",
    resize: "none",
    overflow: "hidden",
    background: "#fafbfc",
  },
  standUpBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  modalStyle: {
    overlay: {
      backgroundColor: "rgba(0,0,0, 0.5)",
      zIndex: "1000",
    },
    content: {
      top: "10%",
      right: "20%",
      bottom: "10%",
      left: "20%",
      minWidth: "700px",
      padding: "0px",
      zIndex: "1001",
    }
  },
  issueFrame: {
    width: "100%",
    height: "100%",
  },
};

export default styles;