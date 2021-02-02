import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

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
    <div className='update-form'>
      <h2>Update Recipe</h2>
      <form onSubmit={submitForm}>
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={formState.title}
          onChange={handleChanges}
        />
        <input
          type='text'
          name='source'
          placeholder='Source'
          value={formState.source}
          onChange={handleChanges}
        />
        <input
          type='text'
          name='ingredients'
          placeholder='Ingredients'
          value={formState.ingredients}
          onChange={handleChanges}
        />
        <input
          type='textarea'
          name='instructions'
          placeholder='Instructions'
          value={formState.instructions}
          onChange={handleChanges}
        />
        <select name='category' id='category' >
          <option value='' disabled selected>Select a Category</option>
          <option value='' selected='selected'>Breakfast</option>
          <option value='' selected='selected'>Lunch</option>
          <option value='' selected='selected'>Dinner</option>
          <option value='' selected='selected'>Dessert</option>
          <option value='' selected='selected'>Gluten Free</option>
          <option value='' selected='selected'>Vegetarian</option>
        </select>
        <button>Save Edits</button>
      </form>
    </div>
  )
};

export default UpdateRecipe;