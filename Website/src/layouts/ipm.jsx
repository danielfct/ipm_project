/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import * as r from "routes/ipm.jsx";

import dashboardStyle from "assets/jss/layouts/dashboardStyle.jsx";

import image from "assets/images/sidebar-2.jpg";
import logo from "assets/images/reactlogo.png";

const switchRoutes = (
  <Switch>
    {r.introductionRoute.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
    {r.phase1Routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
    {r.phase2Routes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
    {r.redirectRoute.map((prop, key) => {
      return <Redirect from={prop.path} to={prop.to} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      menuOpen: Array(2).fill(true)
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  handleCollpase = (i) => {
    const menuOpen = this.state.menuOpen;
    menuOpen[i] = !menuOpen[i];
    this.setState({ menuOpen: menuOpen })
  };
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.resizeFunction);
  }sc

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          introductionRoute={r.introductionRoute}
          phase1Routes={r.phase1Routes}
          phase2Routes={r.phase2Routes}
          logoText={"ipm - projeto"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          handleCollpase={this.handleCollpase}
          menuOpen={this.state.menuOpen}
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            introductionRoute={r.introductionRoute}
            phase1Routes={r.phase1Routes}
            phase2Routes={r.phase2Routes}
            redirectRoute={r.redirectRoute}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(App);
