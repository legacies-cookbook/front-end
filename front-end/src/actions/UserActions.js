import axios from "axios";
import * as userActions from "../constants/userConstants";

export const register = (username, password) => async (dispatch) => {
    dispatch({type: userActions.USER_REGISTER_REQUEST, payload: {username, password}});
    try {
        const {data} = await axios.post("https://secret-fam-recipes.herokuapp.com/api/register", {username, password});
        dispatch({type: userActions.USER_REGISTER_SUCCESS, payload: data});
        // dispatch({type: userActions.USER_LOGIN_SUCCESS, payload: data});
    } catch (error) {
        dispatch({
            type: userActions.USER_REGISTER_FAILURE,
            payload:
                error.resposne && error.response.message
                ? error.response.message
                : error.message
        })
    }
}

export const login = (username, password) => async (dispatch) => {
    dispatch({type: userActions.USER_LOGIN_REQUEST, payload: {username, password}});
    try {
        const {data} = await axios.post("https://secret-fam-recipes.herokuapp.com/api/login", {username, password});
        dispatch({type: userActions.USER_LOGIN_SUCCESS, payload: data});
    } catch (error) {
        dispatch({
            type: userActions.USER_LOGIN_FAILURE,
            payload:
                error.resposne && error.response.message
                ? error.response.message
                : error.message
        })
    }
}