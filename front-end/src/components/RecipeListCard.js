import React from 'react';
import RecipeCard from "./RecipeCard";
import {Route, Link} from "react-router-dom"; 

function RecipeListCard({title, source, photo, type, id}) {

    console.log('Recipe List Card: ', id);
    
    return (
        <div className="RecipeListCard">
            <img src={photo} alt="Recipe Photo" />
            <div className="RecipeListCard__details">
                <h3>{source}</h3>
                <p>{type}</p>
            </div>
            <h2>{title}</h2>
            <Link to="/details">
                View Recipe
            </Link>
            <Route path="/details">
                <RecipeCard id={id} />
            </Route>
                
        </div>
    )
}

export default RecipeListCard
