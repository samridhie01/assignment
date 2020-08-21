import React from "react";
import PlanetTile from "../planets/PlanetTile";
import { Box } from "@material-ui/core";

interface PlanetData {
  name: string;
  terrain: string;
}

interface Props {
  listOfFavs: PlanetData[];
}

const Favorites: React.FC<Props> = ({ listOfFavs }) => {
  return (
    <div>
     <Header path="/" linkName={"HomePage"}/>
      {listOfFavs &&
        listOfFavs.map(data => {
          return (
            <Box m={2} border={1} width={800}>
              <PlanetTile name={data.name} terrain={data.terrain} />
            </Box>
          );
        })}
    </div>
  );
};

export default Favorites;
