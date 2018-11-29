import React from 'react';
import PropTypes from 'prop-types';
import './recipe_card.css';


const Recipe = (props) => {
  return (
    <div className="card-deck d-inline-flex">
      <div className="card">
        <div className="image-holder">
          <img className="card-img-top" src={props.name} alt={props.alternate} />
          <button>{props.meal}</button>
        </div>
        <div className="card-body">
          <div className="card-title">{props.title}</div>
          <p className="card-text">{props.text}</p>
        </div>
      {/* insert recipe dfficulty, time and serving components here */}
      </div>
    </div>
  )
}

const RecipeList = (props) => {
  return (
    <div id="wrapper">
      {props.recipes.map(recipe =>
        <Recipe
          {...recipe}
          key={recipe.id}
        />
      )}
    </div>
  )
}

RecipeList.propTypes = {
  
}

export default RecipeList;