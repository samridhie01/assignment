import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/planet2.svg";
import { makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles({
  flexContainer2: {
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "center"
  },
  item: {
    display: "flex",
    flexBasis: "25%",
    width: "30%",
    alignContent: "center"
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
        <h3>{name}</h3>
        <Box className={classes.item}>
        <Typography variant="subtitle2" > {terrain}</Typography>
        </Box>
        <br/>
        <Link to={{ pathname: "/details", search: `?search=${name}` }}>
          View details
        </Link>
      </div>
    </>
  );
};

export default PlanetTile;
