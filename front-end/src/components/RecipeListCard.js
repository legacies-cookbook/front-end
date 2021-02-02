import React from 'react'

function RecipeListCard({title, source, photo, type}) {
    
    return (
        <div className="RecipeListCard">
            <img src={photo} alt="Recipe Photo" />
            <div className="RecipeListCard__details">
                <h3>{source}</h3>
                <p>{type}</p>
            </div>
            <h2>{title}</h2>
            <button className="recipe_details">View Recipe</button>
        </div>
    )
}

export default RecipeListCard
