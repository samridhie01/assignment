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
  const [pageNum, setPage]=useState<number>(1);
   

  const addToFavs = (data:any) =>{
    let newArr = [...favs, data];
    setFavs(newArr);
  } 
  


  const handleNewPage = (page:number) =>{
    setPage(pageNum);
    getPlanetDataPage(page).then(res=>{
      setPlanetData(res.data.results);
    })
  }
  

  return (
    <main>
      <Switch>
        <Route exact path="/" render={()=><HomePage handleAddToFavs={addToFavs} fetchPageData={handleNewPage} />} />
        <Route path="/details" component={Details} />
        <Route path="/favs" render={()=><Favorites listOfFavs={favs}/> } />
      </Switch>
    </main>
   
  );
};
export default App;
