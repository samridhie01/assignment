import React, { useEffect, useState } from "react";
import { getSpecificPlanetData } from './SpecificPlanetRetrievalService';

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

const Details = () =>{
    const[planetDetails, setPlanetDetails] = useState<PlanetData>();
    useEffect(()=>{
        getSpecificPlanetData(window.location.search).then(res => {
           console.log( res.data.results);
           
           setPlanetDetails(res.data.results);         
          });
        
    })
    return(
        <span>Hello world</span>
    )
}

export default Details;