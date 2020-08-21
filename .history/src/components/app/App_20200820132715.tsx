import React, { useEffect, useState } from "react";
import {Route, Switch } from 'react-router-dom';
import HomePage from "../homePage/homePage";
const App = () => {
        
  return (
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    <HomePage />
    </main>
   
  );
};
export default App;
