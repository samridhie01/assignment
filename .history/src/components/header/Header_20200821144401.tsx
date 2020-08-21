import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar, makeStyles, createStyles, IconButton, Button,Theme} from "@material-ui/core";
import {ReactComponent as PlanetIcon} from "../../assets/planet.svg";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
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

interface HeaderProps{
  path: string,
  linkName: string
}

const Header:React.FC<HeaderProps> = ({
  path,
  linkName
})=>{
    const classes=useStyles();
return(
<AppBar color="inherit"  position="static">
    <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <PlanetIcon className={classes.logo}/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
            Planets
        </Typography>
        <Link to={{pathname: '/favs'}} color="inherit">Favorites</Link>
    </Toolbar>
</AppBar>
)


}

export default Header;
