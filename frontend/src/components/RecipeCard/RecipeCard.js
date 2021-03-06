import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './RecipeCard.scss';

const RecipeCard = (props) => {
  const {
    difficulty,
    duration,
    servings,
    snippet,
    title,
    photo,
    id,
  } = props;

  const mealDifficulty = () => {
    if (difficulty === 'EASY') {
      return (
        <img className="icons" src="https://img.icons8.com/material-rounded/24/000000/low-connection.png" alt="Easy Difficulty Rating" />
      );
    }
    if (difficulty === 'MEDIUM') {
      return (
        <img className="icons" src="https://img.icons8.com/material-rounded/24/000000/medium-connection.png" alt="Medium Difficulty Rating" />
      );
    }
    if (difficulty === 'ADVANCED') {
      return (
        <img className="icons" src="https://img.icons8.com/material-rounded/24/000000/bar-chart.png" alt="Advanced Difficulty Rating" />
      );
    }
    return undefined; // TODO: This is probably bad. What should this return for invalid difficulty?
  };

  const goRecipePage = () => props.history.push(`/recipe/${id}`);

  return (
    <div className="card-deck d-inline-flex" onClick={goRecipePage}>
      <div className="card">
        <div className="image-holder">
          <img className="card-img-top" src={photo} alt={title} />
        </div>
        <div className="card-body">
          <div className="card-title">{title}</div>
          <p className="card-snippet">{snippet}</p>
        </div>
        <div className="card-bottom d-flex flex-row justify-content-around">
          <span className="card-meta flex-fill text-center">
            {mealDifficulty()}
            {difficulty}
          </span>
          {/* duration will be readyInMinutes in Spoonacular API */}
          <span className="card-meta flex-fill text-center">
            <i className="fas fa-clock" />
            {duration}
            {' '}
            MINUTES
          </span>
          <span className="card-meta flex-fill text-center">
            <i className="fas fa-utensil-spoon" />
            {servings}
          </span>
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
};

RecipeCard.defaultProps = {
  photo: '',
};


export default withRouter(RecipeCard);
