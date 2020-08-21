import { ADD_PLANETDATA } from '../constants/action-types';
import { PlanetActionTypes, Planet, PlanetState } from '../store/types';

const initialState: PlanetState = {
    planetData: []
};

function rootReducer(state=initialState, action:PlanetActionTypes):PlanetState{
    if(action.type == ADD_PLANETDATA){
        return{
            planetData: [...state.planetData, action.payload]
        } 
    }
    return state;
}

export default rootReducer;
