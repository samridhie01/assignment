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
  btncolor:props=>({
    color: props
  })

});



interface PlanetData{
    name: string,
    terrain: string
}

interface Props{
  data: PlanetData,
  onSaveClick: ((element:any)=> void) 
  
}

const Planets: React.FC<Props> = ({
   data,
   onSaveClick
})=> {
 const [backgroundColor, setColor] = useState<string>("white");
 
  const classes = useStyles({backgroundColor: backgroundColor});
  return (
    <Box m={2} border={1} width={800} className={classes.flexContainer}>
      <PlanetTile name={data.name} terrain={data.terrain} />
      <Box m={2} border={1} width={100} height={200}>
          <p>if you like this planet, save it in your collection of favorite items</p>
          <IconButton className={`${classes.btncolor}`} onClick={()=>onSaveClick(data)}>
          <FavoriteBorderIcon/>
            </IconButton>
      </Box>
    </Box>
  );
}

export default Planets;