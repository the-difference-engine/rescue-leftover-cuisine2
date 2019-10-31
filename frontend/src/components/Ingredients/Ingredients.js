import React from 'react';
import map from 'lodash/map';


const Ingredients = ({
  ingredients, handleIngredientChange, handleAdd, handleRemove,
}) => (
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
        <button id="recipe-delete-btn" type="button" onClick={() => handleRemove(idx)}>
          <i className="fas fa-times" />
        </button>
      </div>
    ))}
    <div className="ingredient-btn-container">
      <button className="btn navbar-btn btn-lg add-ingredient-button" type="button" onClick={() => handleAdd()}>
          + ADD
      </button>
    </div>
  </div>
);

export default Ingredients;
