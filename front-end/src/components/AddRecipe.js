import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { listRecipes, addNewRecipe } from '../actions/RecipeActions';
import './AddRecipe.css';

const initialState = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: ''
};

const AddRecipe = () => {
  const [formState, setFormState] = useState(initialState);

  const handleChanges = e => {
    e.persist();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    addNewRecipe(formState);
    setFormState(initialState);
  };

  return (
    <div className='add-div'>
      <h2 className='add-header'>New Recipe</h2>
      <form onSubmit={submitForm} className='add-form'>
        <input
          type='text'
          name='title'
          className='add-form-fields'
          id='add-title'
          placeholder='Title'
          value={formState.title}
          onChange={handleChanges}
        />
        <input
          type='text'
          name='source'
          className='add-form-fields'
          id='add-source'
          placeholder='Source'
          value={formState.source}
          onChange={handleChanges}
        />
        <textarea
          type='textarea'
          name='ingredients'
          className='add-form-fields'
          placeholder='Ingredients'
          value={formState.ingredients}
          onChange={handleChanges}
        />
        <textarea
          type='textarea'
          name='instructions'
          className='add-form-fields'
          placeholder='Instructions'
          value={formState.instructions}
          onChange={handleChanges}
        />
        <select name='category' className='add-form-fields' id='category' >
          <option disabled selected>--Select a Category--</option>
          <option value='Breakfast'>Breakfast</option>
          <option value='Lunch'>Lunch</option>
          <option value='Dinner'>Dinner</option>
          <option value='Dessert'>Dessert</option>
          <option value='Gluten Free'>Gluten Free</option>
          <option value='Vegetarian'>Vegetarian</option>
        </select>
        <button className='add-form-fields' id='add-button'>Save Edits</button>
      </form>
    </div>
  )
};

export default connect({ listRecipes, addNewRecipe })(AddRecipe);