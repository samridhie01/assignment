import React from "react";

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
    return <span>{listOfFavs.length}</span>
}

export default Favorites;