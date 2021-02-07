import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {recipeDetails, deleteRecipe} from "../actions/RecipeActions";
import {useParams} from "react-router-dom";
import {useHistory} from "react-router-dom";

function RecipeCard() {

    const {id} = useParams()
    const history = useHistory()
    console.log(id)

    const item = useSelector((state) => state.recipe.recipe)
    
    const deleteItem = async () => {
        await dispatch(deleteRecipe(id));
        history.push("/recipes")
    }

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(recipeDetails(id))
    }, [dispatch])

    return (
        <div className="recipeCard">
            {item
            ?
            <>
            <div className="recipeCard__top">
                <div className={item.data[0].type}>
                    <h2>{item.data[0].type}</h2>
                </div>
                <h1>{item.data[0].title}</h1>
            </div>
            <div className="recipeCard__body">
                <img src={item.data[0].notes} alt="recipe photo"/>
                <div className="recipeCard__body__info">
                    <h3>Ingredients</h3>
                    <p>{item.data[0].ingredients}</p>
                    <h3>Instructions</h3>
                    <p>{item.data[0].instructions}</p>
                </div>
                <div className='recipeCard_buttons'>
              <button className='recipeCard_button'>Edit</button>
              <button className='recipeCard_button' onClick={deleteItem}>Delete</button>
            </div>
            </div>
            </>
            : <h1>Loading...</h1>}
        </div>
    )
}



export default RecipeCard
