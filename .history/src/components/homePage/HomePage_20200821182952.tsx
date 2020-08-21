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

  const handleNewPage = (page: number) => {
    getPlanetDataPage(page).then(res => {
      setPlanetData(res.data.results);
    });
  };

  const fetchData = () => {
    getPlanetData().then(res => {
      setPlanetData(res.data.results);
      localStorage.setItem("planetData", res.data.results);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    handleNewPage(value);
  };

  const updatePlanetSearchResult = (key: string | null) => {
  
    if (key == "") {
      fetchData();
      return;
    }
    const newData = planetData.filter(data => {
      if (
        key == null ||
        data.climate.toLowerCase().includes(key.toLowerCase())
      ) {
        return data;
      }
    });
    setPlanetData(newData);
  };

  const classes = useStyles();
  if (localStorage.getItem("planetData") != null) {
  }

  return (
    <>
      <Header path="/favs" linkName={"Favorites"} />
      <div className={classes.flexContainer}>
        <div className={classes.stopShrink}>
        <SearchBox  handleSearch={updatePlanetSearchResult} />
        </div>
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
