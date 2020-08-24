import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Details from "../details/Details";
import Favorites from "../favorites/Favorites";
import {PlanetData} from "../types/types";
import {comparePlanets} from "../utils/utils";

const App = () => {
    const [favs, setFavs] = useState<PlanetData[]>([]);

    const addToFavs = (data: PlanetData) => {
        if (!localStorage.getItem("favs") || !comparePlanets(data)) {
            let newArr = [...favs, data];
            setFavs(newArr);
            localStorage.setItem("favs", JSON.stringify(newArr));
        }
    };

    return (
        <main>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <HomePage handleAddToFavs={addToFavs}/>}
                />
                <Route path="/details" component={Details}/>
                <Route path="/favs" render={() => <Favorites/>}/>
            </Switch>
        </main>
    );
};
export default App;
