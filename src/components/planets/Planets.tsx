import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, IconButton } from "@material-ui/core";
import PlanetTile from "./PlanetTile";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { PlanetsProps } from "../types/types";
import { Theme } from "@material-ui/core";


export interface StyleProps {
  color: string;
}

const useStyles = makeStyles<Theme, StyleProps>({
  flexContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    float: "right"
  },
  btnColor: {
    color: props => props.color
  },
  endPos: {
    padding: "10px"
  }
});



const Planets: React.FC<PlanetsProps> = ({ data, onSaveClick }) => {
  const [myColor, setMyColor] = useState("black");
  const handleSave = () => {
    setMyColor("red");
    onSaveClick(data);
  };
  const classes = useStyles({ color: myColor });

  useEffect(() => {
    const addedFavs = localStorage.getItem("favs");
    if (addedFavs != null && addedFavs.includes(data.name)) {
      setMyColor("red");
    }
  }, [data.name]);

  return (
    <Box m={2} border={1} width={800} className={classes.flexContainer}>
      <PlanetTile name={data.name} climate={data.climate} />
      <Box m={4} border={1} width={200} height={150}>
        <div className={classes.endPos}>
          <p>If you like this planet, click heart Icon </p>
          <IconButton data-testId={"favIcon"} className={classes.btnColor} onClick={handleSave}>
            <FavoriteBorderIcon />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Planets;
