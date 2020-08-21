import { ADD_PLANETDATA } from "../constants/action-types";

export function addPlanetData(payload:any){
    return{
        type: ADD_PLANETDATA,
        payload
    }
};

