import React from "react";
import { Button, Box, TextField } from "@material-ui/core";

const Planets = () => {
  return (
    <>
    <Box height="250%"  mx={0.5} width={120} display="inline-block">
     <TextField variant="outlined"/>
     <Button variant="contained">Search</Button>
      </Box>
    </>
  );
};

export default Planets;
