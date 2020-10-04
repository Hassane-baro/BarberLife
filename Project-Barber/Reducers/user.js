import {SET_CURRENT_USER} from "../Actions/action-types";

const initialState = {
    currentUser : undefined
};
export default function(state = initialState, action){
    if(action.type === SET_CURRENT_USER){
        return {
            ...state,
            currentUser : action.payload
        };
    }
    /*else if(action.type === SET_FORECAST_WEATHER){
        return {
            ...state,
            forecastWeather : action.payload
        };
    }*/
    return state;
}
