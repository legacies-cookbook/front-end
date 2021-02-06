import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as recipeReducer from './reducers/recipeReducer';
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
    recipeList: recipeReducer.recipeListReducer,
    // recipeDetails: recipeReducer.recipeDetailsReducer,
    // updateRecipe: recipeReducer.editRecipeReducer,
    
    // deleteRecipe: recipeReducer.deleteRecipeReducer,
  });

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

  export default store