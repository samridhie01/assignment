import React, { useEffect, useState } from "react";
import {Route, Switch } from 'react-router-dom';
import HomePage from "../homePage/HomePage";
import Details from "../details/Details";
import Favorites from "../favorites/Favorites";

const App = () => {     
  return (
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/details" component={Details} />
        <Route path="/favs" component={Favorites} />
      </Switch>
    </main>
   
  );
};
export default App;
