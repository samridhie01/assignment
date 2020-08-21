import React, { useEffect, useState, ChangeEvent } from "react";
import { useStyles } from "./HomePageStyle";
import Header from "../header/Header";
import Planets from "../planets/Planets";
import SearchBox from "../searchBox/SearchBox";
import { getPlanetData, getPlanetDataPage } from "./PlanetRetrievalService";
import Pagination from "@material-ui/lab/Pagination";
import { number } from "prop-types";

interface PlanetData {
  name: string;
  terrain: string;
}

interface PlanetOverview {
  handleAddToFavs: (element: any) => void;
}

const HomePage: React.FC<PlanetOverview> = ({
  handleAddToFavs
}) => {
  const [planetData, setPlanetData] = useState<PlanetData[]>([]);

  const [pageNum, setPage] = useState<number>(1);

  const handleNewPage = (page: number) => {
    setPage(pageNum);
    getPlanetDataPage(page).then(res => {
      setPlanetData(res.data.results);
    });
  };

  useEffect(() => {
    getPlanetData().then(res => {
      setPlanetData(res.data.results);
    });
  }, []);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    handleNewPage(value);
  };

  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.flexContainer}>
        <SearchBox />
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
