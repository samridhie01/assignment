import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {createStyles, IconButton, makeStyles, Theme, Toolbar} from "@material-ui/core";
import logo from "../../assets/planet2.svg";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        logo: {
            width: 50,
            height: 50
        },
    }),
);

interface HeaderProps {
    path: string,
    linkName: string
}

const Header: React.FC<HeaderProps> = ({
     path,
     linkName
     }) => {
    const classes = useStyles();
    return (
        <AppBar color="inherit" position="static" data-testid={"header-section"}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <img src={logo} style={{height: 100, width: 100}} alt="website logo"/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Planets
                </Typography>
                <Link to={{pathname: `${path}`}} color="inherit">{linkName}</Link>
            </Toolbar>
        </AppBar>
    )


}

export default Header;
