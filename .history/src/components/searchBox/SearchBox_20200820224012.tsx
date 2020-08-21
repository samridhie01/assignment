import React from "react";
import { Button, Box, TextField, Theme, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dotted: {
         display: "flex",
         flexDirection: "column",
         width:'200%'
    }
  }),
);

const Planets = () => {
    const classes= useStyles();
  return (
    <>

    <Box height="250%" border={1} m={2} display="inline-block" className={classes.dotted}>
     <TextField variant="outlined" placeholder="Enter terrain to filter planets"/>
     <Button variant="contained" onClick={}>Search</Button>
      </Box>
    </>
  );
};

export default Planets;
