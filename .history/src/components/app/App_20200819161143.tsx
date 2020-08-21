import React from "react";
import "./App.css";
import { useStyles } from "./AppStyle";
import { Button, TextareaAutosize } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";

export interface demo {
  id: string;
}

export const demoPropTypes = {
  id: PropTypes.string.isRequired
};

const App: React.FC<demo> = ({ id }) => {
  const classes = useStyles();
  return (
    <div className={classes.flexContainer}>
      <TextareaAutosize placeholder={id} />
      <div className={classes.flexInnerContainer}>
        <CloseIcon fontSize="small" />
        <Button variant="contained">Default</Button>
      </div>
    </div>
  );
};
App.propTypes = demoPropTypes;
export default App;
