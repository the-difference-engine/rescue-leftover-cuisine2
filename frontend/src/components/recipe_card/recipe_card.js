import React from 'react';
import PropTypes from 'prop-types';
import './recipe_card.css';
import PunkCat from './../../assets/punk_cat.jpg';

const RecipeCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="image-holder">
          <img className="card-img-top" src={PunkCat} alt="cat in punk rock vest" />
          <button>DINNER</button>
        </div>
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