import React from "react";
import PlanetTile from "../planets/PlanetTile";

interface PlanetData {
  name: string;
  terrain: string;
}

interface Props {
  listOfFavs: PlanetData[];
}

const Favorites: React.FC<Props> = ({ listOfFavs }) => {
    console.log("favs", listOfFavs[0].name);
    
  return (
    <div data-testid="test">
      {listOfFavs &&
      <span>{listOfFavs[0].name}</span>
      }
      {listOfFavs.forEach((val, index, arr)=>{
          <span>{listOfFavs[index].name}</span>
      })}
    </div>
  );
};

export default Favorites;
