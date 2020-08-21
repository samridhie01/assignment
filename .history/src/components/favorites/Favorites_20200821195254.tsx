import React from "react";
import PlanetTile from "../planets/PlanetTile";
import { Box } from "@material-ui/core";
import Header from "../header/Header";

interface PlanetData {
  name: string;
  climate: string;
}

interface Props {
  listOfFavs: PlanetData[];
}



const Favorites: React.FC<Props> = ({ listOfFavs }) => {
  console.log(listOfFavs);
  
  const isArrEmpty = ()=>{
    console.log("here");
   if(listOfFavs.length==0){
     console.log("Here");    
     return true
   }
   return false;
  }

  return (
    <div>
     <Header path="/" linkName={"HomePage"}/>
     {isArrEmpty() ? (

      <h2>NO DATA TO SHOW</h2>
     ) :
      (listOfFavs &&
        listOfFavs.map(data => {
          return (
            <Box m={2} border={1} width={800}>
              <PlanetTile name={data.name} climate={data.climate} />
            </Box>
          );
        }))}
    </div>
  );
};

export default Favorites;