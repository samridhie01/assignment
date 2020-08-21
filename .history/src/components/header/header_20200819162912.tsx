import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    logo: {
      maxWidth: 160,
    },
  });

  
const header =  ()=>{
    const classes=useStyles();
return(
<AppBar color="inherit">
    <Toolbar>
        <img src="logo.png" alt="logo" className={classes.logo} />
      </Toolbar>
</AppBar>
)


}

export default header