import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addNewRecipe } from '../actions/RecipeActions';
import { useHistory } from 'react-router-dom'; 
import './AddRecipe.css';

const initialState = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  photo: '',
  categories: [3]
};

const AddRecipe = () => {

  const history = useHistory()

  const addRecipe = useSelector((state) => console.log(state))
  const [formState, setFormState] = useState({
    title: '',
    source: '',
    ingredients: '',
    instructions: '',
    photo: '',
    categories: [5]
  });

  const dispatch = useDispatch();

  const handleChanges = e => {
    e.persist();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const submitForm = async(e) => {
    e.preventDefault();
    console.log(formState)
    await dispatch(addNewRecipe(formState))
    setFormState(initialState);
    history.push("/recipes")
    
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
          name='photo'
          className='add-form-fields'
          id='add-photo'
          placeholder='photo URL'
          value={formState.photo}
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
        </select>
        <button className='add-form-fields' id='add-button'>Save Recipe</button>
      </form>
    </div>
  )
};

export default AddRecipe;