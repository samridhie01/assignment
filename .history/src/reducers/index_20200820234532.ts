import { ADD_PLANETDATA } from '../constants/action-types';
import { PlanetActionTypes, Planets } from '../store/types';

const initialState: Planets = {
    planetData: []
};

function rootReducer(state=initialState, action:PlanetActionTypes):Planets{
    if(action.type == ADD_PLANETDATA){
        state.planets.push(action.payload);

    }
    return state;
}

export default rootReducer;
