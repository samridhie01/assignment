import React, { useEffect, useState } from "react";
import {Route, Switch } from 'react-router-dom';
import HomePage from "../homePage/HomePage";
import Details from "../details/Details";
import Favorites from "../favorites/Favorites";
import { getPlanetData } from "../homePage/PlanetRetrievalService";

interface PlanetOverview{
  name: string,
  terrain: string
}

const App = () => {     

  const [planetData, setPlanetData] = useState<PlanetOverview[]>([]);
  const [favs, setFavs] =useState<PlanetOverview[]>([]);

  const addToFavs = (data:any) =>{
    let newArr = [...favs, data];
    setFavs(newArr);
  }
  console.log("favs",favs);
  

  useEffect(() => {
    getPlanetData().then(res => {
      setPlanetData(res.data.results);
    });
  }, []);
  

  return (
    <main>
      <Switch>
        <Route path="/" render={(props)=><HomePage planetData={planetData} handleAddToFavs={addToFavs}/>} exact />
        <Route path="/details" component={Details} />
        <Route path="/favs" component={Favorites} />
      </Switch>
    </main>
   
  );
};
export default App;
