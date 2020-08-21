import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/planet2.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    float: "right"
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

interface PlanetData {
  name: string;
  terrain: string;
}

const PlanetTile: React.FC<PlanetData> = ({ name, terrain }) => {
  const classes = useStyles();
  return (
    <>
      <img
              src={logo}
              style={{ height: 300, width: 50 }}
              alt="website logo"
            />
      <div className={classes.flexContainer2}>
        <h3>{name}</h3>
        <h4>{terrain}</h4>
        <Link to={{ pathname: "/details", search: `?search=${name}` }}>
          View details
        </Link>
      </div>
    </>
  );
};

export default PlanetTile;
