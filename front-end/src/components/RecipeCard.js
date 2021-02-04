import React from 'react';
import { connect } from 'react-redux';
// import data from "./data";

function RecipeCard() {


    // const recipe = data[1];
    // console.log(recipe);

    return (
        <div className="recipeCard">
            <div className="recipeCard__top">
                <div className={recipe.type}>
                    <h2>{recipe.type}</h2>
                </div>
                <h1>{recipe.title}</h1>
            </div>
            <div className="recipeCard__body">
                <img src={recipe.photo} alt="recipe photo"/>
                <div className="recipeCard__body__info">
                    <h3>Ingredients</h3>
                    {recipe.ingredients.map(ingredient => {
                        return <p>{ingredient}</p>
                    })}
                    <h3>Instructions</h3>
                    {recipe.instructions.map(step => {
                        return (
                            <div className="recipeCard__body_step">
                                <p><strong>{step.step})</strong> {step.instructions}</p>
                            </div>
                    )
                    })}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(RecipeCard)
