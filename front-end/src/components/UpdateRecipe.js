import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import './UpdateRecipe.css';

const initialState = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: ''
};

const UpdateRecipe = (props) => {
  const [formState, setFormState] = useState(initialState);
  // const { id } = useParams();
  // const { push } = useHistory();

  useEffect(() => {
    axios
      .get('')
      .then(res => {
        console.log(res);
        setFormState(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleChanges = e => {
    e.persist();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axios
      .put('', formState)
      .then(res => {
        console.log('Submitting edits: ', res)
        // setList(
        //   list.map(recipe => {
        //     if(recipe.id === res.data.id) {
        //       return res.data
        //     } else {
        //       return recipe
        //     }
        //   })
        // );
        setFormState(initialState);
        // push('/');
      })
      .catch(err => console.log(err));
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