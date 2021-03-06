export const styles = {
  navHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  sectionContainer: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "24px",
    marginRight: "10px",
  },
  sectionHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "10px",
  },
  sectionButtonGroup: {
    display: "flex",
    flexDirection: "row",
    height: "33px",
  },
  spreadSectionButtonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "550px",
  },
  userCard: {
    display: "inline-block",
    margin: "10px",
    padding: "5px",
    borderRadius: "5px",
  },
  userImage: {
    width: "32px",
    height: "32px",
    marginRight: "5px",
  },
  cardHeading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  reactRepoContainer: {
    width: "980px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  button: {
    height: "33.6px",
  },
  box: {
    marginTop: "10px",
  },
  popupBox: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "300px",
    boxShadow: "0 3px 12px rgba(27,31,35,0.15)",
    fontSize: "12px",
    marginTop: "5px",
    background: "#fafbfc",
    color: "#586069",
    borderRadius: "3px",
  },
  popupBoxHeader: {
    padding: "10px",
    fontWeight: "bold",
  },
  popupBoxList: {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    maxHeight: "320px",
  },
  popupBoxListItem: {
    width: "100%",
    padding: "10px",
    background: "#ffffff",
  },
  modal: {
    display: "none", // default to hidden
  },
  modalOverlay: {
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0,0,0, 0.5)",
    zIndex: "1000",
  },
  modalContent: {
    position: "absolute",
    top: "10%",
    left: "20%",
    right: "20%",
    bottom: "10%",
    minWidth: "1050px",
    border: "1px solid #cccccc",
    background: "#ffffff",
    overflow: "auto",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
    zIndex: "1001",
  },
};

export default styles;