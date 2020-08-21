import React, { useEffect } from "react";
import axios, { AxiosResponse } from 'axios';
import { useStyles } from "./AppStyle";
import PropTypes, { element } from "prop-types";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";



const App = () => {
  const classes = useStyles();

  useEffect( ()=>{
   const result = axios({
     method: 'GET',
     url: `https://swapi.dev/api/planets`
   }).then((response:AxiosResponse)=>{
     const listOfPlanets= response.data.results;
     console.log("list",listOfPlanets);
     
    (listOfPlanets.forEach((element: { name: string; climate: string | undefined; }) => {
      console.log("name",element.name);
      
      <Planets name={element.name} climate={element.climate}/>
    }));
   })

  
   
  })
  return (
    <>
    <Header />
    <SearchBox />

    </>
   
  );
};
export default App;
