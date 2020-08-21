import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Link } from '@material-ui/core';
import {ReactComponent as PlanetIcon} from "../../assets/planet.svg";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Planets() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
       <Box m={2} border={1}>
           <PlanetIcon/>
           <h3>name of planet</h3>
           <h4>Climate</h4>
           <Link>View details</Link>
        </Box>
    
       
  );
}