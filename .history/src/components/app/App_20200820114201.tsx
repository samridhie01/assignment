import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';
import { useStyles } from "./AppStyle";
import PropTypes, { element } from "prop-types";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";
import { getPlanetData } from "./PlanetRetrievalService";
import Pagination from '@material-ui/lab/Pagination';
import { async } from "q";



const App = () => {

  const [planetData, setPlanetData] = useState<Object[]>([]);

  const classes = useStyles();

  useEffect(()=>{
     getPlanetData().then((res)=>{
      setPlanetData(res.data.results);
    })
  },[]);
        
  return (
    <>
    <div>
    <Header />
    <SearchBox />
    {planetData && 
    planetData.map((element: any, index: number)=>{
      return(
        <Planets name={element.name} climate={element.climate} />
      )
    })
    }
    </div>
  <Pagination count={10} variant="outlined" shape="rounded" />
    </>
   
  );
};
export default App;
