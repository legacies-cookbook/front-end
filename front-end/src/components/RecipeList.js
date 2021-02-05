import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipeListCard from "./RecipeListCard";
import HeroImage from "../images/HeroImage.png";
import {listRecipes} from "../actions/RecipeActions";

function RecipeList(state) {

    const recipeList = useSelector((state) => state.listRecipes)
    console.log(recipeList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listRecipes())
    }, [dispatch])

    const findRecipe = () => {
        console.log("clicked");
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
                {/* {recipes.map(recipe => {
                    return <RecipeListCard key={recipe.id} title={recipe.title} source={recipe.source} photo={recipe.photo} type={recipe.type} />
                })} */}
            </div>
            </div>
        </div>
    )
}



export default RecipeList;
