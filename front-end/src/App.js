import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";
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
import UpdateRecipe from './components/UpdateRecipe';

function App() {

  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('token');
    history.push("/login")
  };

  return (
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
            <PrivateRoute exact path='/add'>
              <AddRecipe />
            </PrivateRoute>
            <PrivateRoute path='/details/:id'>
              <RecipeCard />
            </PrivateRoute>
            <PrivateRoute  path='/edit/:id'>
              <UpdateRecipe />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Registration />
            </Route>
            <Route exact path='/' component={() => {
              window.location.href = "https://legacies-cookbook-marketing-page.vercel.app/";
              return null;
            }}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;