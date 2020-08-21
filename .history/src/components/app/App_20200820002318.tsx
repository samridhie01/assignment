import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import { useStyles } from "./AppStyle";
import PropTypes, { element } from "prop-types";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";
import { getPlanetData } from "./PlanetRetrievalService";
import { async } from "q";



const App = () => {

  const [planetData, setPlanetData] = useState(null);

  const classes = useStyles();

  

  useEffect(()=>{
     getPlanetData().then((res)=>{
      console.log(res);
    })
  });
        
      


  
  return (
    <>
    <Header />
    <SearchBox />
    {/* {listOfPlanets && 
    listOfPlanets.map((element: any, index: number)=>{
      return(
        <Planets name={element.name} climate={element.climate} />
      )
    })
    } */}

    </>
   
  );
};
export default App;
