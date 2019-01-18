import React from 'react';
import PropTypes from 'prop-types';
import './recipe_card.css';


const Recipe = (props) => {

  const mealDifficulty = () => {
    if (props.difficulty === "EASY") {
      return (
        <img className="icons" src="https://img.icons8.com/material-rounded/24/000000/low-connection.png" alt="Easy Difficulty Rating"></img>
      )
    }
    if (props.difficulty === "MEDIUM") {
      return (
        <img className="icons" src="https://img.icons8.com/material-rounded/24/000000/medium-connection.png" alt="Medium Difficulty Rating"></img>
      )
    }
    if (props.difficulty === "HARD") {
      return (
        <img className="icons" src="https://img.icons8.com/material-rounded/24/000000/bar-chart.png" alt="Hard Difficulty Rating"></img>
      )
    }
  }

  return (
    <div className="card-deck d-inline-flex">
      <div className="card">
        <div className="image-holder">
          <img className="card-img-top" src={props.url} alt={props.alternate} />
          <button>{props.meal}</button>
        </div>
        <div className="card-body">
          <div className="card-title">{props.title}</div>
          <p className="card-snippet">{props.snippet}</p>
        </div>
        <div className="card-bottom">
          <span>{mealDifficulty()}{props.difficulty}</span>
          {/* readyInMinutes API call will get meal creation time from Spoonacular */}
          <span><i className="fas fa-clock"></i>{props.readyInMinutes} MINUTES</span>
          <span><i className="fas fa-utensil-spoon"></i>{props.spoons}</span>
        </div>
      </div>
    </div>
  )
}

const RecipeList = (props) => {
  console.log(props.recipes)

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
  meal: PropTypes.string,
  url: PropTypes.string,
  alternate: PropTypes.string,
  title: PropTypes.string,
  snippet: PropTypes.string,
  difficulty: PropTypes.string,
  readyInMinutes: PropTypes.number,
  spoons: PropTypes.number,
}

export default RecipeList;