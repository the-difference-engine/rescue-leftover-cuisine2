import React, { useEffect } from 'react';
import map from 'lodash/map';
import { getRecipe } from '../../../lib/apiClient';
import './ingredients.css';

const Ingredients = ({
  ingredients,
  setIngredients,
  id,
  isEditing,
  setIsEditing,
}) => {
  useEffect(() => {
    if (id && !isEditing) {
      getRecipe(id).then((response) => {
        setIngredients(response.data.ingredients);
      });
      setIsEditing(true);
    }
  });
  const handleIngredientChange = (i, event) => {
    const values = [...ingredients];
    values[i] = event.target.value;
    setIngredients(values);
  };

  const handleIngredientAdd = () => {
    const values = [...ingredients];
    values.push('');
    setIngredients(values);
  };

  const handleIngredientRemove = (i) => {
    const values = [...ingredients];
    values.splice(i, 1);
    setIngredients(values);
  };

  return (
    <div className="ingredients-container">
      <h1>Ingredients</h1>
      {map(ingredients, (ingredient, idx) => (
        <div className="ingredients" key={(idx)}>
          <i className="fas fa-circle" />
          <input
            id="ingredient-input"
            type="text"
            placeholder="Enter text"
            value={ingredient || ''}
            onChange={e => handleIngredientChange(idx, e)}
          />
          <button id="recipe-delete-btn" type="button" onClick={() => handleIngredientRemove(idx)}>
            <i className="fas fa-times" />
          </button>
        </div>
      ))}
      <div className="ingredient-btn-container">
        <button className="btn navbar-btn btn-lg add-ingredient-button" type="button" onClick={() => handleIngredientAdd()}>
          + ADD
        </button>
      </div>
    </div>
  );
};

export default Ingredients;
