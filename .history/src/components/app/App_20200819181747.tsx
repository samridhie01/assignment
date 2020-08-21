import React, { useEffect } from "react";
import axios, { AxiosResponse } from 'axios';
import { useStyles } from "./AppStyle";
import PropTypes from "prop-types";
import Header from "../header/Header";



const App = () => {
  const classes = useStyles();

  useEffect( ()=>{
   const result = axios({
     method: 'GET',
     url: `https://swapi.dev/api/planets`
   }).then((response:AxiosResponse)=>{

    console.log( response.data.results);
   })

  
   
  })
  return (
    <Header />
  );
};
export default App;
