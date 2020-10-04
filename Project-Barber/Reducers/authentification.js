import {userConstants} from "../Constants/user.constants";
import {AsyncStorage} from "react-native";

const getUser = async () => await JSON.parse(AsyncStorage.getItem('user'));
const initialState = getUser().then( user => {
    if(!user) return {} ;
    return { loggedIn: true, user }
});

export default function(state = initialState, action){
    switch(action.type){case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }

}
