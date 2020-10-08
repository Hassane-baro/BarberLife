import axios from "axios";
import {API_KEY, FACEBOOK_APP_ID} from "../Constants/api.constants";
import {SET_CURRENT_USER} from "./action-types";
import {AsyncStorage} from "react-native";
import {userConstants} from "../Constants/user.constants";
import {authHeader} from "../Helper/auth-header"
import {stringifyValueWithProperty} from "react-native-web/dist/exports/StyleSheet/compile";


const USER_BASE_URL = "http://localhost:4545/api/v1";

export const getCurrentUser = token => async dispatch => {
    dispatch(request({}));
    const authorization = JSON.parse( JSON.stringify( authHeader() ) )
    const headers = {
        authorization
    };
    const response = await axios.get(
        `${USER_BASE_URL}/utilisateur/me`,
        {headers}
    ).then((res) => {
        console.log(res.data);
        let user = res.data;
        AsyncStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        dispatch({type: userConstants.GET_CURRENT_SUCCESS, user});
    }).catch((error) => {
        console.error(error);
        dispatch(failure(error));
    });

};

export const login = (username, password, onSuccess, onError) => async dispatch => {
    dispatch(request({username}));
    const config = {
        headers: {'Content-Type': 'application/json'},
    };
    const bodyParameters = {
        username,
        password
        // key: {username, password}
    };

    const response = await axios.post(
        `${USER_BASE_URL}/authentification`,
        bodyParameters,
        config
    ).then((res) => {
        console.log(res.data);
        let user = res.data;
        AsyncStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        dispatch({type: userConstants.GET_CURRENT_SUCCESS, user});
        onSuccess && onSuccess();
    }).catch((error) => {
        console.error(error);
        dispatch(failure(error));
        onError && onError();
    });

};

function request(user) {
    return {type: userConstants.LOGIN_REQUEST, user}
}

function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user}
}

function failure(user) {
    return {type: userConstants.LOGIN_FAILURE, user}
}

// initialisation du store avec le token en memoire
export const setUser = (user) => dispatch => {
    dispatch(success(user));
};

export const logout = () => async dispatch =>{
    // remove user from local storage to log user out
    AsyncStorage.removeItem('user');
}
