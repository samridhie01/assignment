import React, { useEffect, useState, ChangeEvent } from "react";
import { useStyles } from "./HomePageStyle";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";
import { getPlanetData, getPlanetDataPage } from "./PlanetRetrievalService";
import Pagination from "@material-ui/lab/Pagination";
import { PlanetData } from "../module/types";

interface PlanetOverview {
  handleAddToFavs: (element: any) => void;
}

const HomePage: React.FC<PlanetOverview> = ({ handleAddToFavs }) => {
  const [planetData, setPlanetData] = useState<PlanetData[]>([]);

  const [pageNum, setPage] = useState<number>(1);

  const handleNewPage = (page: number) => {
    getPlanetDataPage(page).then(res => {
      setPlanetData(res.data.results);
    });
  };

  useEffect(() => {
    getPlanetData().then(res => {
      setPlanetData(res.data.results);
      localStorage.setItem('planetData',res.data.results )
    });
  }, []);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    handleNewPage(value);
  };

  const updatePlanetSearchResult = (key: string) => {
    console.log("search", key);
    const newData = planetData.filter(data => {
      if (
        key == null ||
        data.terrain.toLowerCase().includes(key.toLowerCase())
      ) {
        return data;
      }
    });
    setPlanetData(newData);
  };

  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.flexContainer}>
        <SearchBox handleSearch={updatePlanetSearchResult} />
        <div className={classes.item}>
          {planetData &&
            planetData.map((element: PlanetData, index: number) => {
              return (
                <Planets
                  data={element}
                  onSaveClick={() => {
                    handleAddToFavs(element);
                  }}
                />
              );
            })}
        </div>
      </div>

      <Pagination
        count={6}
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
