import { ADD_PLANETDATA } from '../constants/action-types';

const initialState = {
    planets: []
};

function rootReducer(state=initialState, action:any){
    if(action.type == ADD_PLANETDATA){
        state.planets.push(action.payload);

    }
    return state;
}

export default rootReducer;
