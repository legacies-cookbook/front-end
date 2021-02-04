import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { listRecipes, updateRecipe } from '../actions/RecipeActions';
import './UpdateRecipe.css';

const initialState = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: ''
};

const UpdateRecipe = () => {
  const [formState, setFormState] = useState(initialState);

  useEffect(() => {
    listRecipes();
  }, []);

  const handleChanges = e => {
    e.persist();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    updateRecipe();
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

export default connect({ listRecipes, updateRecipe })(UpdateRecipe);