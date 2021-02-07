import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {recipeDetails} from "../actions/RecipeActions";


function RecipeCard({id}) {

    console.log(id)

    const item = useSelector((state) => state.recipeInfo.recipe)
    

    const dispatch = useDispatch()
    
    useEffect(async() => {
        await dispatch(recipeDetails(3))
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
            </div>
            </>
            : <h1>Loading...</h1>}
        </div>
    )
}



export default RecipeCard
