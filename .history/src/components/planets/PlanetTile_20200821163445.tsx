import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/planet2.svg";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  flexContainer2: {
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "center"
  },
  item: {
    flexBasis: "25%",
    width: "30%",
    justifyContent: "center"
  }
});

interface PlanetData {
  name: string;
  terrain: string;

}

const PlanetTile: React.FC<PlanetData> = ({ name, terrain }) => {
  const classes = useStyles();
  return (
    <>
      <img src={logo} style={{ height: 100, width: 100 }} alt="website logo" />
      <div className={classes.flexContainer2}>
        <h3>Name: {name}</h3>
        <h2>Terrain</h2>
        <Typography variant="subtitle2" className={classes.item}> {terrain}</Typography>
        <Link to={{ pathname: "/details", search: `?search=${name}` }}>
          View details
        </Link>
      </div>
    </>
  );
};

export default PlanetTile;
