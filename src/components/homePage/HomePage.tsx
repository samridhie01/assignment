import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {useStyles} from "./HomePageStyle";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";
import {getPlanetData} from "../api/PlanetRetrievalService";
import Pagination from "@material-ui/lab/Pagination";
import {PlanetData} from "../types/types";
import {Box} from "@material-ui/core";
import {getPageNum, getSearchKey, setPageNum} from "../utils/utils";
import {isEmpty} from "lodash";
import NoPlanetData from "../planets/NoPlanetData";

interface PlanetOverview {
  handleAddToFavs: (element: any) => void;
}


const HomePage: React.FC<PlanetOverview> = ({ handleAddToFavs }) => {
  const [planetData, setPlanetData] = useState<PlanetData[]>([]);

  const handleNewPage = (page: string) => {
    setPageNum(page);
    if (getSearchKey()) {
      updatePlanetSearchResult();
    }
    else{
      fetchData();
    }
  };

  const fetchData = () => {
    getPlanetData().then(res => {
      setPlanetData(res.data.results);
    });
  };

  const updatePlanetSearchResult = ()=> {

    const key = getSearchKey();
    if (key === "") {
      fetchData();
      return;
    }

    getPlanetData().then(res => {
      const newData = res.data.results.filter((data1: PlanetData):PlanetData|void => {
        if (
            key == null ||
            data1.climate.toLowerCase().includes(key.toLowerCase())
        ) {
          return data1;
        }
      });
      setPlanetData(newData);
    });
  };

  useEffect(() => {

    if (getSearchKey()) {
      updatePlanetSearchResult();
      return;
    }
      fetchData();
  }, []);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    handleNewPage(value.toString());
  };

  const classes = useStyles();

  return (
    <div data-testid={"HomePage"}>
      <Header path="/favs" linkName={"Favorites"}/>
      <Box display="flex" flexDirection="row">
        <div className={classes.fixWidth}>
          <SearchBox handleSearch={updatePlanetSearchResult}/>
        </div>
        <div className={classes.fixWidth}>
          {isEmpty(planetData) && <NoPlanetData/>}
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
      </Box>
      <Pagination
          count={6}
          defaultPage={1}
          variant="outlined"
          shape="rounded"
          className={classes.indexing}
          onChange={handlePageChange}
          data-testid={"page-bar-section"}
          page={parseInt(getPageNum() || "1")}
      />
    </div>
  );
};
export default HomePage;
