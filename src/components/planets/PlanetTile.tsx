import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Typography, Box } from "@material-ui/core";
import {ReactComponent as PlanetIcon} from "../../assets/planet.svg";

const useStyles = makeStyles({
  flexContainer2: {
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "center"
  },
  item: {
    display: "flex",
    flex: "0 0 0",
    width: "100%",
    alignContent: "center"
  },
  
});

interface PlanetData {
  name: string;
  climate: string;

}

const PlanetTile: React.FC<PlanetData> = ({ name, climate }) => {
  const classes = useStyles();
  return (
    <>
       <PlanetIcon />
      <div className={classes.flexContainer2}>
        <h3>{name}</h3>
        <Box className={classes.item}>
        <Typography variant="subtitle2" >{climate} climate</Typography>
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
