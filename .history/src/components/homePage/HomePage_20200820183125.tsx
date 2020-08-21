import React, { useEffect, useState } from "react";
import { useStyles } from "./HomePageStyle";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";
import { getPlanetData } from "./PlanetRetrievalService";
import Pagination from "@material-ui/lab/Pagination";

interface PlanetOverview{
  planetData: Object
}

const HomePage: React.FC<PlanetOverview> = (props) => {(
  planetData

)=>{
  const classes = useStyles();
  return (
    <>
    <Header />
    <div className={classes.flexContainer}>
    <SearchBox />
      <div className={classes.item}>
        {planetData &&
          planetData.map((element: PlanetOverview, index: number) => {
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
      />

    </>
  );
};
export default HomePage;
