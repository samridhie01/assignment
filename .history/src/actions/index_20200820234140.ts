import { ADD_PLANETDATA } from "../constants/action-types";
import { Planets, PlanetActionTypes, PlanetData } from "../store/types";

export function addPlanetData(planetData: PlanetData): PlanetActionTypes{
    return{
        type: ADD_PLANETDATA,
        payload: planetData
    }
};
