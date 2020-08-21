import React from "react";
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
  climate: string,
  created: Date,
  diameter: number,
  edited: Date,
  films: string[],
  gravity: string,
  name: string,
  orbital_period: string,
  population: string,
  residents: string[],
  rotation_period: string,
  surface_water: string,
  terrain: string,
  url: string
}

interface PlanetProps{
    name: string,
    climate: string
}

const Planets: React.FC<PlanetProps> = ({
    name,
    climate,
  
})=> {

  const handleViewDetails = (event:any) =>{
    console.log(event);
    

  }
  

    
  const classes = useStyles();
  return (
    <Box m={2} border={1} width={800} className={classes.flexContainer}>
      <PlanetIcon />
      <div className={classes.flexContainer2}>
        <h3>{name}</h3>
        <h4>{climate}</h4>
        <Link to="/">View details</Link>
      </div>
      <Box border={1} width={100} height={200}>
          <p>if you like this planet, save it in your collection of favorite items</p>
          <Button variant="contained" >Save</Button>
      </Box>
    </Box>
  );
}



export default Planets;