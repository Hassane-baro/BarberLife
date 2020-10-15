import {SET_CURRENT_USER} from "../Actions/action-types";
import {userConstants} from "../Constants/user.constants";

const initialState = {
    listCoiffeur : undefined
};
export default function(state = initialState, action){
    switch(action.type) {
        case userConstants.GET_NEARTOME_REQUEST:
            return {
                ...state,
                isLoading: true,
                listCoiffeur: {}
            };
        case userConstants.GET_NEARTOME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                listCoiffeur: action.barbers
            };
        case userConstants.GET_NEARTOME_FAILURE:
            return {
                isLoading: false,
                listCoiffeur: undefined
            };
        default:
            return state;
    }
}
