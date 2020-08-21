import React, { useEffect, useState } from "react";
import {Route, Switch } from 'react-router-dom';
import HomePage from "../homePage/HomePage";
import Details from "../details/Details";
import Favorites from "../favorites/Favorites";
import { getPlanetData, getPlanetDataPage } from "../homePage/PlanetRetrievalService";

interface PlanetOverview{
  name: string,
  terrain: string
}

const App = () => {     

  
  const [favs, setFavs] =useState<PlanetOverview[]>([]);
  
   

  const addToFavs = (data:any) =>{
    let newArr = [...favs, data];
    setFavs(newArr);
  } 
  


  
  

  return (
    <main>
      <Switch>
        <Route exact path="/" render={()=><HomePage handleAddToFavs={addToFavs}/>} />
        <Route path="/details" component={Details} />
        <Route path="/favs" render={()=><Favorites listOfFavs={favs}/> } />
      </Switch>
    </main>
   
  );
};
export default App;
