import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, makeStyles } from "@material-ui/core";
import {ReactComponent as PlanetIcon} from "./src"

const useStyles = makeStyles({
    logo: {
      maxWidth: 160,
    },
  });

  
const Header =  ()=>{
    const classes=useStyles();
return(
<AppBar color="inherit">
    <Toolbar>
        
      </Toolbar>
</AppBar>
)


}

export default Header;