import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import Card from "@material-ui/core/Card/Card";
import withStyles from "@material-ui/core/styles/withStyles";
import { cardTitle, title } from "assets/jss/ipm.jsx";
import avatar from "assets/images/avatar.jpg";
import imagesStyle from "assets/jss/components/imagesStyles.jsx";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography/Typography";
import SvgGithub from "../../assets/icons/SvgGithub";
import {People} from "@material-ui/icons";
import Button from "@material-ui/core/Button/Button";
import Image from 'material-ui-image'
import joao from "assets/images/joao.jpg";
import filipe from "assets/images/filipe.jpg";
import daniel from "assets/images/daniel.jpg";

class Introduction extends React.Component {
    render() {
        const {classes} = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        return (
            <div>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <People className={classes.icon}/>Elementos do grupo</Typography>
                </Paper>
                <Grid container className={classes.group}>
                    <Grid xs={12} sm={12} md={4}>
                        <Card item>
                            <div className={classes.cardContent}>
                                <Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <Image src={joao} alt="..." className={imageClasses}/>
                                </Grid>
                                <div className={classes.centerText}>
                                    <h4 className={classes.cardTitle}>
                                        João Miguel Gago Gonçalves
                                        <br/>
                                        <div className={classes.centerText}>
                                            <Typography>44361</Typography>
                                        </div>
                                        <div className={classes.centerText}>
                                            <Typography>jmg.goncalves@campus.fct.unl.pt</Typography>
                                        </div>
                                    </h4>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card item>
                            <div className={classes.cardContent}>
                                <Grid xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <Image src={filipe} alt="..." className={imageClasses}/>
                                </Grid>
                                <div className={classes.centerText}>
                                    <h4 className={classes.cardTitle}>
                                        Filipe Joel Fernandes de Almeida
                                        <br/>
                                        <div className={classes.centerText}>
                                            <Typography>45047</Typography>
                                        </div>
                                        <div className={classes.centerText}>
                                            <Typography>fjf.almeida@campus.fct.unl.pt</Typography>
                                        </div>
                                    </h4>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Card item>
                            <div className={classes.cardContent}>
                                <Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <Image src={daniel} alt="..." className={imageClasses}/>
                                </Grid>
                                <div className={classes.centerText}>
                                    <h4 className={classes.cardTitle}>
                                        Daniel Filipe Santos Pimenta
                                        <br/>
                                        <div className={classes.centerText}>
                                            <Typography>45404</Typography>
                                        </div>
                                        <div className={classes.centerText}>
                                            <Typography>d.pimenta@campus.fct.unl.pt</Typography>
                                        </div>
                                    </h4>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
                <div className={classes.center}>
                    <Button
                        className={classes.button}
                        href="https://github.com/danielfct/ipm_project"
                        target="_blank">
                        <Paper className={classes.repositoryLink}>
                            <Typography><SvgGithub className={classes.icon}/>Repositório global</Typography>
                        </Paper>
                    </Button>
                    <Button
                        className={classes.button}
                        href="https://github.com/danielfct/ipm"
                        target="_blank">
                        <Paper className={classes.repositoryLink}>
                            <Typography><SvgGithub className={classes.icon}/>Repositório deste website</Typography>
                        </Paper>
                    </Button>
                    <Button
                        className={classes.button}
                        href="https://github.com/danielfct/savr"
                        target="_blank">
                        <Paper className={classes.repositoryLink}>
                            <Typography><SvgGithub className={classes.icon}/>Repositório do savr</Typography>
                        </Paper>
                    </Button>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

const style = {
    group: {
        margin: "0 0 20px 0"
    },
    itemGrid: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    cardTitle,
    ...imagesStyle,
    cardContent: {
        padding: "10px",
    },
    centerText: {
        display: "table",
        margin: "0 auto",
    },
    paper: {
        display: "table",
        margin: "20px 0 5px 0",
        alignText: "center",
        padding: "15px"
    },
    icon: {
        marginRight: "5px"
    },
    button: {
        padding: "0",
        marginTop: "20px",
        marginRight: "30px",
        display: "inline-block",
    },
    repositoryLink: {
        padding: "10px",
        textAlign: "center",
    },
    center: {
        textAlign: "center"
    }
};

export default withStyles(style)(Introduction);
