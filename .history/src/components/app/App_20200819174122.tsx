import React, { useEffect } from "react";
import axios from 'axios';
import { useStyles } from "./AppStyle";
import PropTypes from "prop-types";
import Header from "../header/Header";

export interface demo {
  id: string;
}

export const demoPropTypes = {
  id: PropTypes.string.isRequired
};

const App: React.FC<demo> = () => {
  const classes = useStyles();

  useEffect( ()=>{
   const result = axios({
     method: 'GET',
     url: `https://swapi.dev/api/planets`
   })

   console.log(result);
   
  })
  return (
    <Header />
  );
};
export default App;
