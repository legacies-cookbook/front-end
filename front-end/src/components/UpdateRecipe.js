import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { recipeDetails, updateRecipe } from '../actions/RecipeActions';
import { useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router-dom";
import './UpdateRecipe.css';

const initialState = {
  title: '',
  source: '',
  ingredients: '',
  type: '',
  instructions: '',
  category: [3]
};

// updte action expects a title, source, type, ingredients, instructions, categories, id.
// IE formState.title, formState.source, formState.type etc...
// Categories is a bit tricky because the API expects an array of numbers so I would just set a static 
// value for categories and not change it. I hard coded 3. 

const UpdateRecipe = () => {
  const [formState, setFormState] = useState(initialState);
  const { id } = useParams()

  const recipe = useSelector((state) => state.recipe.recipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipeDetails(id));
  }, [dispatch]);

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/recipes/${id}`)
  //     .then(res => {
  //       console.log(res.data)
  //       setFormState(res.data)
  //     })
  //     .catch(err => console.log(err));
  // }, [id])

  const handleChanges = e => {
    e.persist();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    updateRecipe(formState);
    setFormState(initialState);
  };

  return (
    <div className='update-div'>
      <h2 className='update-header'>Update Recipe</h2>
      <form onSubmit={submitForm} className='update-form'>
        <input
          type='text'
          name='title'
          className='update-form-fields'
          id='update-title'
          placeholder='Title'
          value={formState.title}
          onChange={handleChanges}
        />
        <input
          type='text'
          name='source'
          className='update-form-fields'
          id='update-source'
          placeholder='Source'
          value={formState.source}
          onChange={handleChanges}
        />
        <textarea
          type='textarea'
          name='ingredients'
          className='update-form-fields'
          placeholder='Ingredients'
          value={formState.ingredients}
          onChange={handleChanges}
        />
        <textarea
          type='textarea'
          name='instructions'
          className='update-form-fields'
          placeholder='Instructions'
          value={formState.instructions}
          onChange={handleChanges}
        />
        <select name='category' className='update-form-fields' id='category' >
          <option disabled selected>--Select a Category--</option>
          <option value='Breakfast'>Breakfast</option>
          <option value='Lunch'>Lunch</option>
          <option value='Dinner'>Dinner</option>
          <option value='Dessert'>Dessert</option>
          <option value='Gluten Free'>Gluten Free</option>
          <option value='Vegetarian'>Vegetarian</option>
        </select>
        <button className='update-form-fields' id='update-button'>Save Edits</button>
      </form>
    </div>
  )
};

export default UpdateRecipe;