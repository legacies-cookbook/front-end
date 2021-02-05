import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { PrivateRoute } from './utils/PrivateRoute';


import RecipeList from "./components/RecipeList";
// import UpdateRecipe from './components/UpdateRecipe';
// import AddRecipe from './components/AddRecipe';
import Login from "./components/Login";
import Registration from './components/Registration';

import './App.css';
import './Login.css';

function App(props) {

  const logout = () => {
    localStorage.removeItem('token');
    props.history.push("/login");
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
            {/* <PrivateRoute exact path='/add-recipe'>
              <AddRecipe />
            </PrivateRoute> */}
            <Route path='/login'>
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