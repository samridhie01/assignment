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
    console.log("favs", listOfFavs);
    
  return (
    <div data-testid="test">
      {listOfFavs &&
      <span>{listOfFavs.length}</span>
      }
      {listOfFavs.map((data)=>{
          <span>{listOfFavs.length}</span>
      })}
      }
    </div>
  );
};

export default Favorites;