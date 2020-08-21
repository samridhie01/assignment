import React, { useEffect } from "react";
import axios, { AxiosResponse } from 'axios';
import { useStyles } from "./AppStyle";
import PropTypes, { element } from "prop-types";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";



const App = () => {
  const classes = useStyles();

  const listOfPlanets = useEffect( ()=>{
   const result = axios({
     method: 'GET',
     url: `https://swapi.dev/api/planets`
   }).then((response:AxiosResponse)=>{
     return response.data.results;
    
    });
  

  
   
  })
  return (
    <>
    <Header />
    <SearchBox />

    </>
   
  );
};
export default App;
