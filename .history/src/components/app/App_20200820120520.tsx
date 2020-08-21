import React, { useEffect, useState } from "react";
import { useStyles } from "../homePage/AppStyle";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";
import { getPlanetData } from "../homePage/PlanetRetrievalService";
import Pagination from '@material-ui/lab/Pagination';
import HomePage from "../homePage/homePage";




const App = () => {
        
  return (
    <>
    <HomePage />
    </>
   
  );
};
export default App;
