import React, { useEffect, useState } from "react";
import { useStyles } from "./HomePageStyle";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";
import { getPlanetData } from "./PlanetRetrievalService";
import Pagination from "@material-ui/lab/Pagination";

interface PlanetOverview{
  name: string,
  terrain: string
}
const HomePage = () => {
  const [planetData, setPlanetData] = useState<PlanetOverview[]>([]);
  const [favs, setFavs] =useState([{name:"hi", terrain: "bye"}]);

  const handleAddToFavs = (data:any) =>{
    let newArr = [...favs, data];
    setFavs(newArr);
  }

  const classes = useStyles();

  useEffect(() => {
    getPlanetData().then(res => {
      setPlanetData(res.data.results);
    });
  }, []);

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
