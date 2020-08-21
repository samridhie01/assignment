import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Details from "../details/Details";
import Favorites from "../favorites/Favorites";
import { PlanetData } from "../module/types";

const App = () => {
  const [favs, setFavs] = useState<PlanetData[]>([]);

  const addToFavs = (data: any) => {
    if(favs.includes(data)){
      return;
    }
      let newArr = [...favs, data];
      setFavs(newArr);
  };

  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage handleAddToFavs={addToFavs} />}
        />
        <Route path="/details" component={Details} />
        <Route path="/favs" render={() => <Favorites listOfFavs={favs} />} />
      </Switch>
    </main>
  );
};
export default App;
