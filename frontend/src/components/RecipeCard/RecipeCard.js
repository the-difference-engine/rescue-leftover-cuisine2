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

  return (
    <div className="card-deck d-inline-flex">
      <div className="card">
        <div className="image-holder">
          <img className="card-img-top" src={props.photo_url} alt={props.alternate} />
          <button>{props.meal}</button>
        </div>
        <div className="card-body">
          <div className="card-title">{props.title}</div>
          <p className="card-snippet">{props.snippet}</p>
        </div>
        <div className="card-bottom">
          <span>{mealDifficulty(props.difficulty)}{props.difficulty}</span>
          {/* duration will be readyInMinutes in Spoonacular API */}
          <span><i className="fas fa-clock"></i>{props.duration} MINUTES</span>
          <span><i className="fas fa-utensil-spoon"></i>{props.servings}</span>
        </div>
      </div>
    </div>
  )
}

RecipeCard.propTypes = {
  meal: PropTypes.string,
  photo_url: PropTypes.string,
  alternate: PropTypes.string,
  title: PropTypes.string,
  snippet: PropTypes.string,
  difficulty: PropTypes.string,
  duration: PropTypes.number,
  servings: PropTypes.number,
}


export default RecipeCard;