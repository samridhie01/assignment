import React, { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";
import {getSearchKey} from "../utils/utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alignCenter:{
      alignSelf: "center",
      width: "50%"
    },
    customStyle:{
     width: 350,
      padding: "20px"
    }
  })
);

interface Search {
  handleSearch: () => void;
}


const SearchBox: React.FC<Search> = ({ handleSearch }) => {
  const [searchItem, setSearchItem] = useState<string>("");
  const handleSearchChange = (event: any) => {
    setSearchItem(event.target.value);
    localStorage.setItem("searchKey", event.target.value);
  };

  const handleSearchButtonClick =() =>{
    handleSearch();
  }

  const classes = useStyles();

  return (
    <>
      <div >
      <Box m={4} border={1} width={400} height={150} display="flex" flexDirection={"column"} data-testid={"search-section"}>
        <TextField
          variant="outlined"
          onChange={handleSearchChange}
          placeholder="Enter climate to filter planets"
          className={classes.customStyle}
          fullWidth={false}
          inputProps={{ "data-testid": "climate-filter" }}
          value={getSearchKey() || ''}
        />
        <Button
          variant="contained"
          onClick={handleSearchButtonClick}
          fullWidth={false}
          data-testid={'searchBtn'}
          className={classes.alignCenter}
        >
          Search
        </Button>
        </Box>
      </div>
    </>
  );
};

export default SearchBox;
