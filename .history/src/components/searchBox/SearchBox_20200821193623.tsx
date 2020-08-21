import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  TextField,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";
import { truncate } from "fs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alignCenter:{
      justifyItems: "center"
    },
    customStyle:{
     
      padding: "20px"
    }
  
    
  })
);

interface Search {
  handleSearch: (key: string|null) => void;
}

const SearchBox: React.FC<Search> = ({ handleSearch }) => {
  const [searchItem, setSearchItem] = useState<string|null>("");
  const handleSearchChange = (event: any) => {
    setSearchItem(event.target.value);
    
  };

  const classes = useStyles();
  return (
    <>
      {/* <Box
        height="250%"
        border={1}
        m={2}
        display="inline-flex"
        flexDirection="column"
        width="30%"
        padding="20px"
      > */}
      <div className={classes.customStyle}>
        <TextField
          variant="outlined"
          onChange={handleSearchChange}
          placeholder="Enter climate to filter planets"
          className={classes.alignCenter}
          fullWidth={true}
        />
        <Button
          variant="contained"
          onClick={() => {
            handleSearch(searchItem);
          }}
          fullWidth={false}
        >
          Search
        </Button>
      {/* </Box> */}
      </div>
    </>
  );
};

export default SearchBox;
