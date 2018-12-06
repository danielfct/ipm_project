/* eslint-disable */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
// core components

import sidebarStyle from "assets/jss/components/sidebarStyle.jsx";
import Image from 'material-ui-image'

let ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1;
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      console.log(this.refs.sideBar);
      ps = new PerfectScrollbar(this.refs.sideBar);
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }

  render() {
    const { classes, color, logo, image, logoText, introductionRoute,
      phase1Routes, phase2Routes, menuOpen } = this.props;

    const introductionLink = (
      introductionRoute.map((prop, key) => {
        const listItemClasses = classNames({
          [" " + classes[color]]: this.activeRoute(prop.path)
        });
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: this.activeRoute(prop.path)
        });
        return (
          <NavLink
            to={prop.path}
            className={classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                    <prop.icon />
                  )}
              </ListItemIcon>
              <ListItemText
                primary={prop.sidebarName}
                secondary={this.props.hasCollapse ? (menuOpen[0] ? <ExpandLess /> : <ExpandMore />) : null}
                className={classes.itemText + whiteFontClasses}
                disableTypography={true}
              />
            </ListItem>
          </NavLink>
        );
      })
    );

    const phase1Links = (
      < Collapse in={menuOpen[0]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {phase1Routes.map((prop, key) => {
            const listItemClasses = classNames({
              [" " + classes[color]]: this.activeRoute(prop.path)
            });
            const whiteFontClasses = classNames({
              [" " + classes.whiteFont]: this.activeRoute(prop.path)
            });
            return (
              <NavLink
                to={prop.path}
                className={classes.item}
                activeClassName="active"
                key={key}
              >
                <ListItem button className={classes.itemLink + listItemClasses}>
                  <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                    {typeof prop.icon === "string" ? (
                      <Icon>{prop.icon}</Icon>
                    ) : (
                        <prop.icon />
                      )}
                  </ListItemIcon>
                  <ListItemText
                    primary={prop.sidebarName}
                    secondary={this.props.hasCollapse ? (menuOpen[0] ? <ExpandLess /> : <ExpandMore />) : null}
                    className={classes.itemText + whiteFontClasses}
                    disableTypography={true}
                  />
                </ListItem>
              </NavLink>
            );
          })}
        </List>;
      </Collapse >
    );

    const phase2Links = (
      < Collapse in={menuOpen[1]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {phase2Routes.map((prop, key) => {
            const listItemClasses = classNames({
              [" " + classes[color]]: this.activeRoute(prop.path)
            });
            const whiteFontClasses = classNames({
              [" " + classes.whiteFont]: this.activeRoute(prop.path)
            });
            return (
              <NavLink
                to={prop.path}
                className={classes.item}
                activeClassName="active"
                key={key}
              >
                <ListItem button className={classes.itemLink + listItemClasses}>
                  <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                    {typeof prop.icon === "string" ? (
                      <Icon>{prop.icon}</Icon>
                    ) : (
                        <prop.icon />
                      )}
                  </ListItemIcon>
                  <ListItemText
                    primary={prop.sidebarName}
                    secondary={this.props.hasCollapse ? (menuOpen[0] ? <ExpandLess /> : <ExpandMore />) : null}
                    className={classes.itemText + whiteFontClasses}
                    disableTypography={true}
                  />
                </ListItem>
              </NavLink>
            );
          })}
        </List>;
      </Collapse >
    );

    const brand = (
      <div className={classes.logo}>
        <a className={classes.logoLink}>
          <div className={classes.logoImage}>
            <img src={logo} alt="logo" className={classes.img} />
          </div>
          {logoText}
        </a>
      </div>
    );

    return (
      <div>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="right"
            open={this.props.open}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper} ref="sideBar">

              <List>
                {introductionLink}
                <ListItem button onClick={() => this.props.handleCollpase(0)}>
                  <ListItemText
                    primary={"Fase 1"}
                    className={classes.itemText}
                    disableTypography={true}
                  />
                  {(menuOpen[0] ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                {phase1Links}
                <ListItem button onClick={() => this.props.handleCollpase(1)}>
                  <ListItemText
                    primary={"Fase 2"}
                    className={classes.itemText}
                    disableTypography={true}
                  />
                  {(menuOpen[1] ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                {phase2Links}
              </List>
            </div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            anchor="left"
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper} ref="sideBar">
              <List>
                {introductionLink}
                <ListItem button onClick={() => this.props.handleCollpase(0)}>
                  <ListItemText
                    primary={"Fase 1"}
                    className={classes.itemText}
                    disableTypography={true}
                  />
                  {(menuOpen[0] ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                {phase1Links}
                <ListItem button onClick={() => this.props.handleCollpase(1)}>
                  <ListItemText
                    primary={"Fase 2"}
                    className={classes.itemText}
                    disableTypography={true}
                  />
                  {(menuOpen[1] ? <ExpandLess /> : <ExpandMore />)}
                </ListItem>
                {phase2Links}
              </List>
            </div>
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
      </div >
    );
  };
}
Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
