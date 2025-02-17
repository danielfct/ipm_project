import {
  drawerWidth,
  transition,
  container
} from "assets/jss/ipm.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "60px",
    padding: "30px 15px",
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
