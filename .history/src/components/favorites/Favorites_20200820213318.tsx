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

    const abc = [{
        name: "a",
        terrain: "b"
    },{
        name: "c",
        terrain: "d"
    }
]
    
  return (
      
    <div data-testid="test">
     <PlanetTile name="test" terrain="demo"/>
      </div>
  );
};

export default Favorites;
