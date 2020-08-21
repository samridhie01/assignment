import { ADD_PLANETDATA } from '../constants/action-types';
import { PlanetActionTypes, Planets } from '../store/types';
import Planets from '../components/planets/Planets';

const initialState: Planets = {
    planetData: []
};

function rootReducer(state=initialState, action:PlanetActionTypes):Planets{
    if(action.type == ADD_PLANETDATA){
        return{
            planetData: [...state.planetData, action.payload]
        } 

    }
    return state;
}

export default rootReducer;
