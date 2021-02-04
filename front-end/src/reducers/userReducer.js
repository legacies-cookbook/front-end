import * as userActions from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type) {
        case userActions.USER_REGISTER_REQUEST:
            return {loading: true};
        case userActions.USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case userActions.USER_REGISTER_FAILURE:
            return {loading: false, error: action.payload};
        default: return state;
    }
}

export const userLoginReducer = (state = {}, action) => {
    switch(action.type) {
        case userActions.USER_LOGIN_REQUEST:
            return {loading: true};
        case userActions.USER_LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload)
            return {loading: false, userInfo: action.payload};
        case userActions.USER_LOGIN_FAILURE:
            return {loading: false, error: action.payload};
        default: return state;
    }
    
}