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
   }).then((data)=>{
    console.log( data);
   })

  
   
  })
  return (
    <Header />
  );
};
export default App;
