import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { ReactComponent as PlanetIcon } from "../../assets/planet.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    float: "right"
  },
  flexContainer2: {
    display: "flex",
    flexDirection: "column"
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});



interface PlanetData{
    name: string,
    terrain: string
}

interface Props{
  data: PlanetData,
  onSaveClick: ((element:any)=> void) 
  
}

const Planets: React.FC<Props> = ({
   data,
   onSaveClick
})=> {
 

  
  const classes = useStyles();
  return (
    <Box m={2} border={1} width={800} className={classes.flexContainer}>
      <PlanetIcon />
      <div className={classes.flexContainer2}>
        <h3>{data.name}</h3>
        <h4>{data.terrain}</h4>
        <Link to={{pathname: '/details', search: `?search=${name}`}}>View details</Link>
      </div>
      <Box m={2} border={1} width={100} height={200}>
          <p>if you like this planet, save it in your collection of favorite items</p>
          <Button variant="contained" onClick={()=>props.onSaveClick(data)}>Save</Button>
      </Box>
    </Box>
  );
}

export default Planets;
