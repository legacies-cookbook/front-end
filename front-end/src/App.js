import UpdateRecipe from './components/UpdateRecipe';
import './App.css';
import './Login.css';
// import RecipeList from "./components/RecipeList";
// import RecipeCard from "./components/RecipeCard";
import Login from "./components/Login";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <RecipeList /> */}
    {/* <RecipeCard /> */}
    <Login />
    </div>
  );
}

export default App;