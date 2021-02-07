import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteRecipe} from "../actions/RecipeActions";
import {useHistory, Link} from "react-router-dom"; 

function RecipeListCard({title, source, photo, type, id, }) {

    const dispatch = useDispatch()

    const deleteItem = async (id) => {
        await dispatch(deleteRecipe(id));
    }
    
    return (
        <div className="RecipeListCard">
            <img src={photo} alt="Recipe Photo" />
            <div className="RecipeListCard__details">
                <h3>{source}</h3>
                <p>{type}</p>
            </div>
            <h2>{title}</h2>
            <Link to={`/details/${id}`}>
                View Recipe
            </Link>
            <button onClick={deleteItem(id)}>Delete Recipe</button>  
        </div>
    )
}

export default RecipeListCard
