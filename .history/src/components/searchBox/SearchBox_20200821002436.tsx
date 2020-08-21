import React, { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";
import { string } from "prop-types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dotted: {
      display: "flex",
      flexDirection: "column",
      width: "200%"
    }
  })
);

interface Search {
  handleSearch: (key: string) => void;
}

const SearchBox: React.FC<Search> =({ handleSearch}) => {
  const [searchItem, setSearchItem] = useState<string>("");
  const handleSearchChange = (event: any) => {
    setSearchItem(event.target.value);
  };

  const classes = useStyles();
  return (
    <>
      <Box
        height="250%"
        border={1}
        m={2}
        display="inline-block"
        className={classes.dotted}
      >
        <TextField
          variant="outlined"
          onChange={handleSearchChange}
          placeholder="Enter terrain to filter planets"
        />
        <Button
          variant="contained"
          onClick={()=>{
            handleSearch(searchItem);
          }}
        >
          Search
        </Button>
      </Box>
    </>
  );
};

export default SearchBox;
