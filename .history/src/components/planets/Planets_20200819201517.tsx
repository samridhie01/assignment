import React from "react";
import { Button, Box, TextField, Theme, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dotted: {
         borderStyle: 'dotted'  
    }
  }),
);

const Planets = () => {
    const classes= useStyles();
  return (
    <>
    <Box height="250%" border={1} m={2} width={120} display="inline-block" className={classes.dotted}>
     <TextField variant="outlined"/>
     <Button variant="contained">Search</Button>
      </Box>
    </>
  );
};

export default Planets;
