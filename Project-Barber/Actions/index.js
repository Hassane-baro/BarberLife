import axios from "axios";
import {AsyncStorage} from "react-native";
import {userConstants} from "../Constants/user.constants";
import {authHeader} from "../Helper/auth-header";


 // const USER_BASE_URL = "http://localhost:4545/api/v1";
 const USER_BASE_URL = "https://barberlife-api.herokuapp.com/api/v1";

export const getCurrentUser = (onSuccess , onError) => dispatch => {
    dispatch(request({}));
    const authorization = JSON.parse( JSON.stringify( authHeader() ) );
    const headers = {
        authorization
    };

    axios.get(
        `${USER_BASE_URL}/utilisateur/me`,
        {headers}
    ).then((res) => {
        console.log(res.data);
        let user = res.data;
        AsyncStorage.setItem('user', JSON.stringify(user));
        //setUser(user);
        dispatch({type: userConstants.GET_CURRENT_SUCCESS, user});
        onSuccess && onSuccess();
    }).catch((error) => {
        console.error(error);
        dispatch(failure(error));
        onError && onError();
    });

};

export const getNearToMeBarber = (user) => async dispatch => {
    let tabBarber = [];
    dispatch({type: userConstants.GET_NEARTOME_REQUEST, tabBarber});
    const authorization = await authHeader();
    const config = {
        headers: {...authorization, 'Content-Type': 'application/json'},
    };
    const bodyParameters = {
        longitude: user.longitude,
        latitude: user.latitude,
    };

    axios.post(
        `${USER_BASE_URL}/barber/neartome`,
        bodyParameters,
        config
    ).then((res) => {
        console.log(res.data);
        let barbers = res.data;
        dispatch({type: userConstants.GET_NEARTOME_SUCCESS, barbers});
    }).catch((error) => {
        console.error(error);
        dispatch({type: userConstants.GET_NEARTOME_FAILURE, error});
    });
};

export const login = (username, password, onSuccess, onError) => dispatch => {
    dispatch(request({username}));
    const config = {
        headers: {'Content-Type': 'application/json'},
    };
    const bodyParameters = {
        username,
        password
    };

    axios.post(
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

export const logout = () => dispatch =>{
    // remove user from local storage to log user out
    AsyncStorage.removeItem('user').then( () => {
        console.log("TODO");
    });
};
