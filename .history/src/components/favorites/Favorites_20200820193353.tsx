import React from "react";
import PlanetTile from "../planets/PlanetTile";

interface PlanetData{
    name: string,
    terrain: string
  }

interface Props{
    listOfFavs: PlanetData[]
}

const Favorites:React.FC<Props> = ({
    listOfFavs
})=>{
    return(
       <span>{listOfFavs.length}</span>
    ))
}

export default Favorites;