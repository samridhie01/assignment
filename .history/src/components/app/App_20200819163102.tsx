import React from "react";
import { useStyles } from "./AppStyle";
import { Button, TextareaAutosize } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
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
  return (
    <Header />
  );
};
App.propTypes = demoPropTypes;
export default App;
