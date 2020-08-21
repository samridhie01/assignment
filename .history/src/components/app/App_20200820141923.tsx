import React, { useEffect, useState } from "react";
import {Route, Switch } from 'react-router-dom';
import HomePage from "../homePage/HomePage";
const App = () => {
        
  return (
    <main>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </main>
   
  );
};
export default App;
