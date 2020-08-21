import React, { useEffect, useState, ChangeEvent } from "react";
import { useStyles } from "./HomePageStyle";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";
import { getPlanetData } from "./PlanetRetrievalService";
import Pagination from "@material-ui/lab/Pagination";
import { number } from "prop-types";

interface PlanetData{
  name: string,
  terrain: string
}


interface PlanetOverview{
  planetData: PlanetData[],
  handleAddToFavs: ((element:any)=> void),
  fetchPageData: ((page:number)=>void) 
}

const HomePage: React.FC<PlanetOverview>  = ({
  planetData,
  handleAddToFavs,
  fetchPageData
})=>{
  const [page, setPage]=useState<number>(1);

  const handlePageChange = (event: ChangeEvent<unknown>, value:number)=>{
    console.log("homepage", value);
    
    setPage(value);
    fetchPageData(page);
  }

  const classes = useStyles();
  return (
    <>
    <Header />
    <div className={classes.flexContainer}>
    <SearchBox />
      <div className={classes.item}>
        {planetData &&
          planetData.map((element: PlanetData, index: number) => {
            return <Planets data={element} onSaveClick={()=>{handleAddToFavs(element)}} />
          })}
      </div>
    </div>

    <Pagination
        count={10}
        defaultPage={1}
        variant="outlined"
        shape="rounded"
        className={classes.indexing}
        onChange={handlePageChange}
      />

    </>
  );
};
export default HomePage;