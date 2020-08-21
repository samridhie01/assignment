import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  TextField,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dotted: {
      display: "flex",
      flexDirection: "column",
      width: "200%"
    },
    
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
      <Box
        height="250%"
        border={1}
        m={2}
        display="inline-flex"
        flexDirection="column"
        width="30%"
        padding="20px"
      >
        <TextField
          variant="outlined"
          onChange={handleSearchChange}
          placeholder="Enter climate to filter planets"
          
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
      </Box>
    </>
  );
};

export default SearchBox;
