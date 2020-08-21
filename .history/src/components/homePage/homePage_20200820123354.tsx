import React, { useEffect, useState } from "react";
import { useStyles } from "./HomePageStyle";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";
import { getPlanetData } from "./PlanetRetrievalService";
import Pagination from '@material-ui/lab/Pagination';




const HomePage = () => {

  const [planetData, setPlanetData] = useState<Object[]>([]);

  const classes = useStyles();

  useEffect(()=>{
     getPlanetData().then((res)=>{
      setPlanetData(res.data.results);
    })
  },[]);
        
  return (
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
  <Pagination count={10} defaultPage={1} variant="outlined" shape="rounded" />
    </div>
   
  );
};
export default HomePage;
