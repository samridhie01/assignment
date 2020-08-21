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
       (   <Box>
            <Typography>Name: {planetDetails.name}</Typography>
            <Typography>Climate: {planetDetails.climate}</Typography>
            </Box>
       )
            
    }
      </>   
   
  ) 
};

export default Details;
