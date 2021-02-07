import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import RecipeListCard from "./RecipeListCard";
import HeroImage from "../images/HeroImage.png";
import {listRecipes} from "../actions/RecipeActions";
import {Link} from "react-router-dom";

function RecipeList(props) {

    const recipeList = useSelector((state) => state.recipe.recipes)
    console.log(recipeList)
    
    const addRecipes = useSelector((state) => state.addNewRecipe)

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false)
    

    useEffect(() =>  {
        dispatch(listRecipes());
    }, [dispatch, loading])

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
                <Link to="/add">
                    Add New Recipe 
                </Link>
                
            </div>
            <div className="recipeList__content">
              { !recipeList 
              ? <h1>Loading...</h1>
              : recipeList.map(recipe => {
                    return <RecipeListCard key={recipe.id} id={recipe.id} title={recipe.title} source={recipe.source} photo={recipe.notes} type={recipe.type} reload={setLoading}/>
                })}
            </div>
            </div>
        </div>
    )
}



export default RecipeList;
