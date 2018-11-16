import React from 'react';
import PropTypes from 'prop-types';
import './recipe_card.css';

const RecipeCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap" />
        {/* overlay meal type on graphic */}
        <div className="card-body">
          <div className="card-title">I am a recipe title!</div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        {/* insert recipe dfficulty, time and serving components here */}
      </div>
    </div>
  )
}

RecipeCard.propTypes = {
  
}

export default RecipeCard;