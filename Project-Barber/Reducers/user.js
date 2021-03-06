import {SET_CURRENT_USER} from "../Actions/action-types";
import {userConstants} from "../Constants/user.constants";

const initialState = {
    currentUser : undefined
};
export default function(state = initialState, action){
    switch(action.type) {
        case userConstants.GET_CURRENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                currentUser: {}
            };
        case userConstants.GET_CURRENT_SUCCESS:
            return {
                isLoading: false,
                currentUser: action.user
            };
        case userConstants.GET_CURRENT_FAILURE:
            return {
                isLoading: false,
                currentUser: undefined
            };
        /*else if(action.type === SET_FORECAST_WEATHER){
            return {
                ...state,
                forecastWeather : action.payload
            };
        }*/
        default:
            return state;
    }
}
