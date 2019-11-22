import map from 'lodash/map';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import isNull from 'lodash/isNull';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TagsBar from '../../components/TagsBar/TagsBar';
import { getRecipe } from '../../lib/apiClient';
import RecipeComments from '../../components/RecipeComments/RecipeComments';
import './Recipe.css';

class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      directions: [],
      title: '',
      snippet: '',
      ingredients: [],
      difficulty: '',
      duration: '',
      servings: '',
      photo: '',
      tags: [],
      recipeId: '',
      comments: '',
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { match: { params: { id } } } = this.props;
    getRecipe(id).then((response) => {
      this.setState({
        recipeId: id,
        title: response.data.title,
        snippet: response.data.snippet,
        ingredients: response.data.ingredients,
        // TODO: add placeholder photo later
        photo: response.data.photos ? response.data.photos[0] : '',
        directions: response.data.directions,
        difficulty: response.data.difficulty,
        duration: response.data.duration,
        servings: response.data.servings,
        userId: response.data.user_id,
        tags: response.data.tags,
        comments: response.data.comments,
      });
    });
  }

  render() {
    const { user, setJwt } = this.props;
    const {
      directions, title, ingredients, snippet, difficulty, duration, servings, photo, userId, tags,
      recipeId, comments,
    } = this.state;

    const reloadComments = () => {
      const { match: { params } } = this.props;
      getRecipe(params.id).then((response) => {
        this.setState({ comments: response.data.comments });
      });
    };

    const renderButtons = () => (
      <div>
        <button className="btn navbar-btn btn-lg edit-button" type="button">
          <img src="https://img.icons8.com/windows/32/ffa616/edit.png" alt="edit" />
          <p id="edit-icon-text">Edit</p>
        </button>
        <button className="btn navbar-btn btn-lg cancel-button" type="button">
          <img src="https://img.icons8.com/windows/32/ffa616/cancel.png" alt="delete" />
          <p id="delete-icon-text">Delete</p>
        </button>
      </div>
    );

    const mealDifficulty = () => {
      if (difficulty === 'EASY') {
        return (
          <img className="recipe-difficulty" src="https://img.icons8.com/material-rounded/24/4EC8ED/low-connection.png" alt="Easy Difficulty Rating" />
        );
      }
      if (difficulty === 'MEDIUM') {
        return (
          <img className="recipe-difficulty" src="https://img.icons8.com/material-rounded/24/4EC8ED/medium-connection.png" alt="Medium Difficulty Rating" />
        );
      }
      if (difficulty === 'ADVANCED') {
        return (
          <img className="recipe-difficulty" src="https://img.icons8.com/material-rounded/24/4EC8ED/bar-chart.png" alt="Advanced Difficulty Rating" />
        );
      }
      return '';
    };
    return (
      <div className="recipe-overall-container">
        <Helmet>
          <title>{title}</title>
          <meta property="og:title" content={`${title} | Rescuing Leftover Cuisine`} />
          <meta property="og:image" content={photo} />
          <meta property="og:image:alt" content={title} />
        </Helmet>

        <div className="row">
          <div className="header">
            <Header user={user} setJwt={setJwt} />
          </div>
        </div>
        {user && (user.id === userId || user.is_admin) ? renderButtons() : null}
        <div className="recipe-image-wrapper">
          <img src={photo} alt="recipephoto" className="recipe-photo" />
        </div>
        <div className="recipe-specs-bars">
          <div className="row">
            <div id="recipe-spec-container1" className="recipe-spec-element col-sm-4 text-center">
              <span>
                {mealDifficulty()}
                {difficulty}
              </span>
            </div>
            <div id="recipe-spec-container2" className="recipe-spec-element col-sm-4 text-center">
              <span>
                <i className="fas fa-clock" />
                {duration}
                {' '}
                MIN
              </span>
            </div>
            <div id="recipe-spec-container3" className="recipe-spec-element col-sm-4 text-center">
              <i className="fas fa-utensil-spoon" />
              <span>{servings}</span>
            </div>
          </div>
        </div>
        <div className="tags-bar">
          <TagsBar tags={tags} />
        </div>
        <div className="row" id="blurb-title">
          <h1 id="recipe-title" className="col-sm-6 offset-sm-3">
            {title}
          </h1>
          <p id="recipe-descrip" className="col-sm-8 offset-sm-2">
            {snippet}
          </p>
        </div>
        <div id="hr" />
        <div className="separator col-sm-10 offset-sm-1" />
        <div id="ingredient-box">
          <div id="ingredient-list">
            <h1 id="ingredient-title">Ingredients</h1>
            <ul id="ingredient-ul">
              {map(ingredients, ingredient => (
                <li key={ingredient}>
                  <div className="single-ingredient">{ingredient}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="hr" />
        <div className="separator col-sm-10 offset-sm-1" />
        <div id="direction-container" className="col-sm-10 offset-sm-1">
          <h1 id="direction-title">Directions</h1>
          <ul className="direction-list">
            {map(directions, (direction, index) => (
              <div className="single-direction" key={direction}>
                <span className="direction-index">{index + 1}</span>
                <p className="direction-action">{direction}</p>
                <br />
              </div>
            ))
            }
          </ul>
        </div>
        {!isNull(comments)
          ? (
            <RecipeComments
              comments={comments}
              recipeId={recipeId}
              user={user}
              reloadComments={reloadComments}
            />
          ) : null}
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(Recipe);
