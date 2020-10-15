import {combineReducers } from 'redux';
import UserReducer from "./user"
import AuthentificationReducer from "./authentification"
import BarberReducer from "./barber"

const rootReducer = combineReducers({
    utilisateur : UserReducer,
    authentication : AuthentificationReducer,
    barber: BarberReducer
});

export default rootReducer;
