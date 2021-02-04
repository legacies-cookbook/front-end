import React from 'react';
import { connect } from 'react-redux';
import { recipeDetails } from '../actions/RecipeActions';
// import data from "./data";
import RecipeListCard from "./RecipeListCard";
import HeroImage from "../images/HeroImage.png";

function RecipeList() {

    // const mockApiCall = data;

    const findRecipe = () => {
        console.log("clicked");
        recipeDetails(); //is this meant to be here?
    }

    return (
        <div className="recipeList">
            <img className="hero" src={HeroImage} alt="Hero Image"/>
            <div className="recipeList__body">
            <div className="recipeList__search">
                <h3>Search For A Recipe</h3>
                <form onSubmit={findRecipe}>
                    <input type="text" placeholder="placeholder text"/>
                    <button type="submit">test</button>
                </form>
                <h3>Filter recipes by type</h3>
                
            </div>
            <div className="recipeList__content">
                {props.recipes.map(recipe => {
                    return <RecipeListCard key={recipe.id} title={recipe.title} source={recipe.source} photo={recipe.photo} type={recipe.type} />
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

export default connect(mapStateToProps, {})(RecipeList);
