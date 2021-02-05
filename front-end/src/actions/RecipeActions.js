import axiosWithAuth from "../utils/axiosWithAuth";
import * as actions from "../constants/recipeConstants";

// // gets a list of all recipes
export const listRecipes = () => (dispatch) => {
    dispatch({type: actions.FETCH_RECIPES_REQUEST});
    axiosWithAuth.get("/recipes")
    .then(data => {
        return dispatch({type: actions.FETCH_RECIPES_SUCCESS, payload: data})
    })
    .catch(error => {
        dispatch({type: actions.FETCH_RECIPES_FAILURE,
            payload:
                error.resposne && error.response.message
                ? error.response.message
                : error.message
            })
    })
}

// // // Gets a specific recipe by id
// // export const recipeDetails = (id) = async (dispatch) => {
// //     dispatch({type: actions.FETCH_RECIPE_REQUEST});
// //     try {
// //         const {data} = await axiosWithAuth.get(`/recipes/${id}`) // change to `/recipes/:${id}` if unsuccessful
// //         dispatch({type: actions.FETCH_RECIPE_SUCCESS, payload: data});
// //     } catch(error) {
// //         dispatch({type: actions.FETCH_RECIPE_FAILURE,
// //             payload:
// //                 error.resposne && error.response.message
// //                 ? error.response.message
// //                 : error.message
// //             }) 
// //     }
// // }

// // // Adds a new recipe 
// // export const addNewRecipe = (id, user_id, title, source, type, photo, ingredients, instructions) => async (dispatch) => {
// //     dispatch({type: actions.ADD_RECIPE_REQUEST});
// //     try {
// //         const {data} = await axiosWithAuth.post("/recipes", {
// //             id,
// //             user_id,
// //             title,
// //             source,
// //             type,
// //             photo,
// //             ingredients,
// //             instructions
// //         });
// //         dispatch({type: actions.ADD_RECIPE_SUCCESS, payload: data});
// //     } catch(error) {
// //         dispatch({type: actions.ADD_RECIPE_FAILURE,
// //             payload:
// //                 error.resposne && error.response.message
// //                 ? error.response.message
// //                 : error.message
// //             }) 
// //     }
// // }

// // // Updates an existing recipe
// // export const updateRecipe = (ingredients, instructions) => async (dispatch) => {
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

// // // Deletes a recipe
// // export const deleteRecipe = (id) => async (dispatch) => {
// //     dispatch({type: actions.DELETE_RECIPE_REQUEST});
// //     try {
// //         const {data} = axiosWithAuth.delete(`/recipes/${id}`);
// //         dispatch({type: actions.DELETE_RECIPE_SUCCESS, payload: data});
// //     } catch(error) {
// //         dispatch({type: actions.DELETE_RECIPE_FAILURE,
// //             payload:
// //                 error.resposne && error.response.message
// //                 ? error.response.message
// //                 : error.message
// //             })
// //     }
// // }