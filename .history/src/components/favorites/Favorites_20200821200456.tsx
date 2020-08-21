import React from "react";
import PlanetTile from "../planets/PlanetTile";
import { Box } from "@material-ui/core";
import Header from "../header/Header";
import isEmpty from 'lodash/isEmpty';

interface PlanetData {
  name: string;
  climate: string;
}

interface Props {
  listOfFavs: PlanetData[];
}

const Favorites: React.FC<Props> = ({ listOfFavs }) => {
  console.log(listOfFavs);


  return (
    <div>
     <Header path="/" linkName={"HomePage"}/>
     {isEmpty ? (
      <h2>NO DATA TO SHOW</h2>
     ) :
      (listOfFavs &&
        listOfFavs.map(data => {
          return (
            <Box m={2} border={1} width={800}>
              <PlanetTile name={data.name} climate={data.climate} />
            </Box>
          );
        }))}
    </div>
  );
};

export default Favorites;
