import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { PrivateRoute } from './utils/PrivateRoute';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as recipeReducer from './reducers/recipeReducer';
import * as userReducer from './reducers/userReducer';
import { Provider } from 'react-redux';

import RecipeList from "./components/RecipeList";
import AddRecipe from './components/AddRecipe';
import Login from "./components/Login";
import Registration from './components/Registration';

import './App.css';
import './Login.css';

const reducer = combineReducers({recipeReducer, userReducer});
const store = createStore(reducer, applyMiddleware(thunk));

function App() {

  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <Link onClick={logout}>Logout</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path='/recipes'>
              <RecipeList />
            </PrivateRoute>
            <PrivateRoute exact path='/add-recipe'>
              <AddRecipe />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Registration />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;