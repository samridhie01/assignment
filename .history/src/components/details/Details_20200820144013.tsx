import React, { useEffect } from "react";
import { getSpecificPlanetData } from './SpecificPlanetRetrievalService';

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