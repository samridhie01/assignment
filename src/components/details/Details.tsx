import React, { useEffect, useState } from "react";
import { getSpecificPlanetData } from "../api/PlanetRetrievalService";
import { Box, Typography } from "@material-ui/core";

export interface PlanetDescription {
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
  const [planetDetails, setPlanetDetails] = useState<PlanetDescription>();
  useEffect(() => {
    getSpecificPlanetData(window.location.search).then(res => {
      setPlanetDetails(res.data.results[0]);
    });
  }, []);
  return(
      <div data-testid={"details-section"}>
       {planetDetails &&
       (   <Box m={2} border={1} width={300}>
            <Typography data-testid={"name"}>Name: {planetDetails.name}</Typography>
            <Typography data-testid={"climate"}>Climate: {planetDetails.climate}</Typography>
            <Typography data-testid={"diameter"}>Diameter: {planetDetails.diameter}</Typography>
            <Typography data-testid={"films"}>Appeared in Films: {planetDetails.films.length}</Typography>
            <Typography data-testid={"gravity"}>Gravity pull: {planetDetails.gravity}</Typography>
            <Typography data-testid={"orbPeriod"}>Orbital Period: {planetDetails.orbital_period}</Typography>
            <Typography data-testid={"population"}>Population: {planetDetails.population}</Typography>
            <Typography data-testid={"residents"}>Number of residents: {planetDetails.residents.length}</Typography>
            <Typography data-testid={"rotation-period"}>Rotation Period: {planetDetails.rotation_period}</Typography>
            <Typography  data-testid={"surface-water"}>Surface Water: {planetDetails.surface_water}</Typography>
            <Typography  data-testid={"terrain"}>Terrain: {planetDetails.terrain}</Typography>
            </Box>
       )

    }
      </div>

  )
};

export default Details;
