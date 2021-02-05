import axios from "axios";
import * as userActions from "../constants/userConstants";


export const register = (username, password) => (dispatch) => {
    dispatch({type: userActions.USER_REGISTER_REQUEST});
        axios.post("https://secret-fam-recipes.herokuapp.com/api/register", {username, password})
        .then(data => {
          return  dispatch({type: userActions.USER_REGISTER_SUCCESS, payload: data}); 
        })
        .catch (error => {
            console.log("error", error)
        dispatch({
            type: userActions.USER_REGISTER_FAILURE,
            payload:
                error.resposne && error.response.message
                ? error.response.message
                : error.message
        })})
    }



export const login = (username, password) => (dispatch) => {
    dispatch({type: userActions.USER_LOGIN_REQUEST});
    axios.post("https://secret-fam-recipes.herokuapp.com/api/login", {username, password})
        .then(res => {
            console.log(typeof(res.data.token))
            return dispatch({type: userActions.USER_LOGIN_SUCCESS, payload: res.data.token})
        })
        .catch(error => {
        dispatch({
            type: userActions.USER_LOGIN_FAILURE,
            payload:
                error.resposne && error.response.message
                ? error.response.message
                : error.message
        })
    })
}