import React, { useEffect, useState } from "react";
import { getSpecificPlanetData } from "./SpecificPlanetRetrievalService";
import { Box, Typography } from "@material-ui/core";

interface PlanetData {
  climate: string;
  created: Date;
  diameter: number;
  edited: Date;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
}

const Details = () => {
  const [planetDetails, setPlanetDetails] = useState<PlanetData>();
  useEffect(() => {
    getSpecificPlanetData(window.location.search).then(res => {
        
      setPlanetDetails(res.data.results[0]);
    });
  }, []);
  
  return(
      <>
       {planetDetails &&
       (   <Box m={2} border={1} width={300} display="flex" justifyContent="center" >
            <Typography>Name: {planetDetails.name}</Typography>
            <Typography>Climate: {planetDetails.climate}</Typography>
            <Typography>Diameter: {planetDetails.diameter}</Typography>
            <Typography>Appeared in Films: {planetDetails.films.length}</Typography>
            <Typography>Gravity pull: {planetDetails.gravity}</Typography>
            <Typography>Orbital Period: {planetDetails.orbital_period}</Typography>
            <Typography>Population: {planetDetails.population}</Typography>
            <Typography>Number of residents: {planetDetails.residents.length}</Typography>
            <Typography>Rotation Period: {planetDetails.rotation_period}</Typography>
            <Typography>Surface Water: {planetDetails.surface_water}</Typography>
            <Typography>Terrain: {planetDetails.terrain}</Typography>

            
            </Box>
       )
            
    }
      </>   
   
  ) 
};

export default Details;
