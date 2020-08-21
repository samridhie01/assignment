import React from "react";
import { Button, Box, TextField, Theme, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dotted: {
         borderStyle: 'dotted',
         padding: '10px'  
    }
  }),
);

const Planets = () => {
    const classes= useStyles();
  return (
    <>

    <Box height="250%" border={1} m={2} width={500} display="inline-block">
     <TextField variant="outlined"/>
     <Button variant="contained">Search</Button>
      </Box>
    </>
  );
};

export default Planets;
