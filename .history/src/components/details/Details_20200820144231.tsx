import React, { useEffect } from "react";
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
    useEffect(()=>{
        getSpecificPlanetData(window.location.search).then(res => {
            
          });
        
    })
    return(
        <span>Hello world</span>
    )
}

export default Details;