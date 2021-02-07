import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { PrivateRoute } from './utils/PrivateRoute';


import RecipeList from "./components/RecipeList";
// import UpdateRecipe from './components/UpdateRecipe';
// import AddRecipe from './components/AddRecipe';
import Login from "./components/Login";
import Registration from './components/Registration';
import AddRecipe from './components/AddRecipe';
import RecipeCard from "./components/RecipeCard";

import './App.css';
import './Login.css';

function App() {

  const logout = () => {
    localStorage.removeItem('token');
  };

  return (
      <Router>
        <div className="App">
      <ul>
        <li>
          <Link to="/">Login</Link>
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
            <PrivateRoute path='/recipes'>
              <RecipeList />
            </PrivateRoute>
            <PrivateRoute path='/add'>
              <AddRecipe />
            </PrivateRoute>
            <PrivateRoute path='/details'>
              <RecipeCard />
            </PrivateRoute>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/register'>
              <Registration />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;