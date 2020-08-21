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
    console.log("favs", listOfFavs.name);
    
  return (
    <div data-testid="test">
      {listOfFavs &&
      <span>{listOfFavs}</span>
      }
      {listOfFavs.forEach((data)=>{
          <span>Hi</span>
      })}
    </div>
  );
};

export default Favorites;
