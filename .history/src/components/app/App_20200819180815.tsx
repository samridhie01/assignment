import React, { useEffect } from "react";
import axios from 'axios';
import { useStyles } from "./AppStyle";
import PropTypes from "prop-types";
import Header from "../header/Header";



const App = () => {
  const classes = useStyles();

  useEffect( ()=>{
   const result = axios({
     method: 'GET',
     url: `https://swapi.dev/api/planets`
   }).then((response)=>{

    console.log( response.results);
   })

  
   
  })
  return (
    <Header />
  );
};
export default App;