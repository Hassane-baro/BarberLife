import axios from "axios";
import {API_KEY, FACEBOOK_APP_ID} from "../Constants/api.constants";
import {SET_CURRENT_USER} from "./action-types";
import {AsyncStorage} from "react-native";
import {userConstants} from "../Constants/user.constants";


const USER_BASE_URL = "http://localhost:4545/api/v1";

export const getCurrentUser = city => async dispatch => {
    const response = await axios.get(`${USER_BASE_URL}?q=${city}&appid=${API_KEY}`);
    dispatch({type: SET_CURRENT_USER, payload: response.data});

};

export const login = (username, password, onSuccess, onError) => async dispatch => {
    dispatch(request({username}));
    const config = {
        headers: {'Content-Type': 'application/json'},
    };
    const bodyParameters = {
        key: JSON.stringify({username, password})
    };

    const response = await axios.post(
        `${USER_BASE_URL}/authentification`,
        bodyParameters,
        config
    ).then((res) => {
        console.log(res.data);
        let {user, token} = res.data;
        AsyncStorage.setItem('user', JSON.stringify(user));
        AsyncStorage.setItem('token', JSON.stringify(token));
        dispatch(success(user));
        onSuccess && onSuccess();
    }).catch((error) => {
        console.error(error);
        dispatch(failure(error));
        onError && onError();
    });

    function request(user) {
        return {type: userConstants.LOGIN_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
};

export const logout = () => async dispatch =>{
    // remove user from local storage to log user out
    AsyncStorage.removeItem('user');
}
