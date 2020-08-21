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


    
  return (
      
    <div data-testid="test">
     { listOfFavs &&
         listOfFavs.map((data)=>{
            return  <PlanetTile name={data.name} terrain={data.terrain}/>
         })
     }
      </div>
  );
};

export default Favorites;
