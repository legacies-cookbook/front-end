// import * as actions from "../constants/recipeConstants";

// const initialState = []

// export const recipeListReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case actions.FETCH_RECIPE_REQUEST: 
//             return {loading: true};
//         case actions.FETCH_RECIPE_SUCCESS:
//             return {
//                 loading: false,
//                 recipes: action.payload
//             };
//         case actions.FETCH_RECIPES_FAILURE:
//             return {
//                 loading: false,
//                 error: action.payload
//             };
//         default: return state;
//     }
// }

// export const recipeDetailsReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case actions.FETCH_RECIPE_REQUEST:
//             return {loading: true};
//         case actions.FETCH_RECIPE_SUCCESS:
//             return {
//                 loading: false,
//                 recipe: action.payload
//             }
//         case actions.FETCH_RECIPE_FAILURE:
//             return {
//                 loading: false,
//                 error: action.payload
//             }
//         default: return state;
//     }
// }

// export const addRecipeReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case actions.ADD_RECIPE_REQUEST:
//             return {loading: true};
//         case actions.ADD_RECIPE_SUCCESS:
//             return {
//                 loading: true,
//                 recipies: action.payload,
//             }
//         case actions.ADD_RECIPE_FAILURE:
//             return {
//                 loading: false,
//                 error: action.payload
//             }
//         default: return state;
//     }
// }

// export const editRecipeReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case actions.UPDATE_RECIPE_REQUEST:
//             return {loading: true};
//         case actions.UPDATE_RECIPE_SUCCESS:
//             return {loading: false, success: true};
//         case actions.UPDATE_RECIPE_FAILURE:
//             return {loading: false, error: action.payload};
//         default: return state;
//     }
// }

// export const deleteRecipeReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case actions.DELETE_RECIPE_REQUEST:
//             return {loading: true};
//         case actions.DELETE_RECIPE_SUCCESS:
//             return {loading: false, success: true};
//         case actions.DELETE_RECIPE_FAILURE:
//             return {loading: false, error: action.payload};
//         default: return state;
//     }
// }