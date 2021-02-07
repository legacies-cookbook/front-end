import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom"; 

function RecipeListCard({title, source, photo, type, id, }) {

    const dispatch = useDispatch()

    
    
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
        </div>
    )
}

export default RecipeListCard
