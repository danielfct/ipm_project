import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import footerStyle from "assets/jss/components/footerStyle.jsx";
import Button from "@material-ui/core/Button/Button";

function Footer({ ...props }) {
    const { classes } = props;
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://github.com/danielfct/ipm"
                                target="_blank"
                                className={classes.block}
                            >
                                Repositório deste website
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://github.com/danielfct/savr"
                                target="_blank"
                                className={classes.block}
                            >
                                Repositório do Savr
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="http://ctp.di.fct.unl.pt/miei/ipm/page4/page4.html"
                                target="_blank"
                                className={classes.block}
                            >
                                IPM Website
                            </a>
                        </ListItem>
                    </List>
                </div>
                <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}
              {" "} &bull;
              <a href="https://github.com/jmggoncalves" className={classes.a}>
              João Gonçalves
                  {" "} &bull;
            </a>
            <a href="https://github.com/filipeamda" className={classes.a}>
              Filipe Almeida
                {" "} &bull;
            </a>
            <a href="https://github.com/danielfct" className={classes.a}>
              Daniel Pimenta
            </a>
          </span>
                </p>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
