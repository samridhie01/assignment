import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar, makeStyles, createStyles, IconButton, Button,Theme} from "@material-ui/core";
import {ReactComponent as PlanetIcon} from "../../assets/planet.svg";
import Typography from "@material-ui/core/Typography";

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
        maxWidth: 160,
      },
  }),
);


const Header =  ()=>{
    const classes=useStyles();
return(
<AppBar color="inherit"  position="static">
    {/*<Toolbar>*/}
    {/* <PlanetIcon className={classes.logo}/>*/}
    {/*  </Toolbar>*/}
    <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <PlanetIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
            Planets
        </Typography>
        <Button color="inherit">Favorites</Button>
    </Toolbar>
</AppBar>
)


}

export default Header;