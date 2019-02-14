import React from 'react';
import PropTypes from 'prop-types';
import './RecipeCard.css';


const RecipeCard = (props) => {

  const mealDifficulty = (difficulty) => {
    if (difficulty === "EASY") {
      return (
        <img className="icons" src="https://img.icons8.com/material-rounded/24/000000/low-connection.png" alt="Easy Difficulty Rating"></img>
      )
    }
    if (difficulty === "MEDIUM") {
      return (
        <img className="icons" src="https://img.icons8.com/material-rounded/24/000000/medium-connection.png" alt="Medium Difficulty Rating"></img>
      )
    }
    if (difficulty === "ADVANCED") {
      return (
        <img className="icons" src="https://img.icons8.com/material-rounded/24/000000/bar-chart.png" alt="Advanced Difficulty Rating"></img>
      )
    }
  }

  const firstPhoto = () => {
    if (props.photos && props.photos.length > 0) {
      return props.photos[0];
    }
    return "";
  }

  return (
    <div className="card-deck d-inline-flex">
      <div className="card">
        <div className="image-holder">
          <img className="card-img-top" src={firstPhoto()} alt={props.alternate} />
          <button className="card-meal-btn">{props.meal}</button>
        </div>
        <div className="card-body">
          <div className="card-title">{props.title}</div>
          <p className="card-snippet">{props.snippet}</p>
        </div>
        <div className="card-bottom">
          <span className="card-meta">{mealDifficulty(props.difficulty)}{props.difficulty}</span>
          {/* duration will be readyInMinutes in Spoonacular API */}
          <span className="card-meta"><i className="fas fa-clock"></i>{props.duration} MINUTES</span>
          <span className="card-meta"><i className="fas fa-utensil-spoon"></i>{props.servings}</span>
        </div>
      </div>
    </div>
  )
}

RecipeCard.propTypes = {
  meal: PropTypes.string,
  photos: PropTypes.array,
  alternate: PropTypes.string,
  title: PropTypes.string,
  snippet: PropTypes.string,
  difficulty: PropTypes.string,
  duration: PropTypes.number,
  servings: PropTypes.number,
}


export default RecipeCard;