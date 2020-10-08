import {userConstants} from "../Constants/user.constants";
import {AsyncStorage} from "react-native";

const getUser = async () => await JSON.parse(AsyncStorage.getItem('user'));
/*const initialState = getUser().then( user => {
    if(!user) return {} ;
    return { loggedIn: true, user }
});*/
const initialState = {
    token : undefined,
    loggedIn : false
};

export default function(state = initialState, action){
    switch(action.type){
        case userConstants.LOGIN_REQUEST:
            return {
                ... state,
                isLoading: true,
                token: action.user.token
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ... state,
                loggedIn: true,
                isLoading : false,
                token: action.user.token
            };
        case userConstants.LOGIN_FAILURE:
            return {
                isLoading : false
            };
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }

}
