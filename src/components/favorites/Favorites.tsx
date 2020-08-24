import React, {useState, useEffect} from "react";
import PlanetTile from "../planets/PlanetTile";
import {Box, Button, makeStyles} from "@material-ui/core";
import Header from "../header/Header";
import isEmpty from "lodash/isEmpty";
import {PlanetData} from "../types/types";


const useStyles = makeStyles({
    alignContent: {
        alignSelf: "center",
    }
})

const Favorites = () => {
    const [favs, setFavs] = useState<PlanetData[]>([]);

    useEffect(() => {
        setFavs(JSON.parse(localStorage.getItem("favs") || "{}"));
    }, [])


    const handleRemoveFavs = (favItem: string) => {
        const addedFavs = JSON.parse(localStorage.getItem("favs")!);
        const newList = addedFavs.filter((data1: PlanetData) => {
            return data1.name !== favItem;
        });
        if (isEmpty(newList)) {
            localStorage.setItem("favs", "");
            setFavs([])
        } else {
            localStorage.setItem("favs", JSON.stringify(newList));
            setFavs(newList)
        }

    }

    const classes = useStyles();
    return (
        <div data-testid={"favorties-section"}>
            <Header path="/" linkName={"HomePage"}/>
            {isEmpty(favs) ? (
                <h2>NO DATA TO SHOW</h2>
            ) : (
                {favs} &&
                favs.map(data => {
                    return (
                        <Box display="flex" flexDirection="row" justifyContent="space-around" m={2} border={1}
                             width={800}>
                            <PlanetTile name={data.name} climate={data.climate}/>
                            <Button variant="contained" size="small" className={classes.alignContent} onClick={() => {
                                handleRemoveFavs(data.name)
                            }}>Remove</Button>
                        </Box>

                    );
                })
            )}
        </div>
    );
};

export default Favorites;
