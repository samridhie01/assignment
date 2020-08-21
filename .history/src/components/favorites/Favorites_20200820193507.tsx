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
       listOfFavs.forEach((data)=>{
           <PlanetTile name={data.name} terrain={data.terrain} />
       })
    )
}

export default Favorites;