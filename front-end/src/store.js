import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {recipeReducer, addRecipeReducer, deleteRecipeReducer} from './reducers/recipeReducer';
import * as userReducer from './reducers/userReducer';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,  
    },
    recipes: [],
};

const reducer = combineReducers({
    // User Reducers
    login: userReducer.userLoginReducer,
    register: userReducer.userRegisterReducer,
    // Recipe Reducers
    recipe: recipeReducer,
    addRecipe: addRecipeReducer,
    deleteRecipe: deleteRecipeReducer,
  });

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

  export default store