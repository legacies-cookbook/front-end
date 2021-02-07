import axiosWithAuth from "../utils/axiosWithAuth";
import * as actions from "../constants/recipeConstants";
import axios from "axios";

// gets a list of all recipes
export const listRecipes = () => (dispatch) => {
    dispatch({type: actions.FETCH_RECIPES_REQUEST});
        axiosWithAuth().get("/recipes")
        .then (res => {
            dispatch({type: actions.FETCH_RECIPES_SUCCESS, payload: res.data})
        }).catch(error => dispatch({type: actions.FETCH_RECIPES_FAILURE, payload: error.message}))
        
   
}

// Gets a specific recipe by id
export const recipeDetails = (id) => (dispatch) => {
    dispatch({type: actions.FETCH_RECIPE_REQUEST});
    axiosWithAuth().get(`/recipes/${id}`)
    .then(res => dispatch({type: actions.FETCH_RECIPE_SUCCESS, payload: res})) 
    .catch((error) => {
        dispatch({type: actions.FETCH_RECIPE_FAILURE,
            payload:
                error.resposne && error.response.message
                ? error.response.message
                : error.message
        }) 
    })
}

export const addNewRecipe = (recipe) => (dispatch) => {
    dispatch({type: actions.ADD_RECIPE_REQUEST});
    axiosWithAuth().post("/recipes", {
        "notes" : recipe.photo,
        "title" : recipe.title,
        "source" : recipe.source,
        "categories" : recipe.categories,
        "ingredients" : recipe.ingredients,
        "instructions" : recipe.instructions
    }) .then ((res) => dispatch({type: actions.ADD_RECIPE_SUCCESS, payload: res.message}))
    .catch((error) => {
        dispatch({type: actions.ADD_RECIPE_FAILURE,
            payload:
                error.resposne && error.response.message
                ? error.response.message
                : error.message})
    })
}

// // // Updates an existing recipe
// // export const updateRecipe = (title, source, type, ingredients, instructions) => async (dispatch) => {
// //     dispatch({type: actions.UPDATE_RECIPE_REQUEST});
// //     try {
// //         const {data} = await axiosWithAuth.put(`/recipes/${id}`, { // change to `/recipes/:${id}` if unsuccessful
// //             ingredients,
// //             instructions
// //         });
// //         dispatch({type: actions.UPDATE_RECIPE_SUCCESS, payload: data});
// //     } catch(error) {
// //         dispatch({type: actions.ADD_RECIPE_FAILURE,
// //             payload:
// //                 error.resposne && error.response.message
// //                 ? error.response.message
// //                 : error.message
// //             }) 
// //     }
// // }

 // Deletes a recipe
export const deleteRecipe = (id) => (dispatch) => {
    dispatch({type: actions.DELETE_RECIPE_REQUEST});
    axiosWithAuth().delete(`/recipes/${id}`)
    .then((res) => dispatch({type: actions.DELETE_RECIPE_SUCCESS, payload: res}))
    .catch((error) => {
        dispatch({type: actions.DELETE_RECIPE_FAILURE,
            payload:
                error.resposne && error.response.message
                ? error.response.message
                : error.message
        })
    })
}