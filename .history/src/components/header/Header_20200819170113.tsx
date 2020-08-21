import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar, makeStyles, IconButton, Button} from "@material-ui/core";
import {ReactComponent as PlanetIcon} from "../../assets/planet.svg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    logo: {
      maxWidth: 100,
    },
  });


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
