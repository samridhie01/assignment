import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, IconButton } from "@material-ui/core";
import PlanetTile from "./PlanetTile";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


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
  },
  btnColor:{
    color: 'red'
  },
  endPos: {
    alignSelf:"flex-end"
  }

});



interface PlanetData{
    name: string,
    terrain: string
}

interface Props{
  data: PlanetData,
  onSaveClick: ((element:any)=> void),
}

const Planets: React.FC<Props> = ({
   data,
   onSaveClick
})=> {

 const handleSave=()=>{
  onSaveClick(data);
 }
 
  const classes = useStyles();
  
  return (
    <Box m={2} border={1} width={800} className={classes.flexContainer}>
      <PlanetTile name={data.name} terrain={data.terrain} />
      <div className={classes.endPos}>
      <Box  m={2} border={1} width={100} height={200}>
          <p>if you like this planet, click the heart icon</p>
          <IconButton  className={classes.btnColor} onClick={handleSave}>
          <FavoriteBorderIcon/>
            </IconButton>
      </Box>
      </div>
    </Box>
  );
}

export default Planets;
