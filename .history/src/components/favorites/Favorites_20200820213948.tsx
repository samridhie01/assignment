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
      
    <Box>
     { listOfFavs &&
         listOfFavs.map((data)=>{
            return  <PlanetTile name={data.name} terrain={data.terrain}/>
         })
     }
      </Box >
  );
};

export default Favorites;
