import { ADD_PLANETDATA } from "../constants/action-types";
import { Planet, PlanetActionTypes, PlanetState } from "../store/types";

export function addPlanetData(newPlanet: Planet): PlanetActionTypes{
    return{
        type: ADD_PLANETDATA,
        payload: newPlanet
    }
};

