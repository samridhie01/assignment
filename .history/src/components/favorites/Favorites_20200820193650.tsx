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
        <>
       {listOfFavs.map((data:PlanetData)=>{
           <PlanetTile name={data.name} terrain={data.terrain} />
       })}
       </>
    )
}

export default Favorites;