import {combineReducers } from 'redux';
import UserReducer from "./user"
import AuthentificationReducer from "./authentification"

const rootReducer = combineReducers({
    utilisateur : UserReducer,
    authentication : AuthentificationReducer
});

export default rootReducer;
