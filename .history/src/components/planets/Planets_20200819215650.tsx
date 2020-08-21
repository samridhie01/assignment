import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Link, Button } from "@material-ui/core";
import { ReactComponent as PlanetIcon } from "../../assets/planet.svg";

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  flexContainer2: {
    display: "flex",
    flexDirection: "column"
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Planets() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box m={2} border={1} width={800} className={classes.flexContainer}>
      <PlanetIcon />
      <div className={classes.flexContainer2}>
        <h3>name of planet</h3>
        <h4>Climate</h4>
        <Link>View details</Link>
      </div>
      <Box border={1} width={100} height={200}>
          <p>if you like this planet, save it in your collection of favorite items</p>
          <Button variant="contained" >Save</Button>
      </Box>
    </Box>
  );
}
