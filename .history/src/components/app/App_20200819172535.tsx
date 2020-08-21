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

const App: React.FC<demo> = ({ id }) => {
  const classes = useStyles();

  useEffect(()=>{
   axios.get()
  })
  return (
    <Header />
  );
};
App.propTypes = demoPropTypes;
export default App;
