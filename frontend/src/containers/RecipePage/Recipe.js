import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TagsBar from './TagsBar/TagsBar';
import recipephoto from '../../assets/bread.jpg';
import { withRouter } from 'react-router-dom';
import './Recipe.css';

class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      directions: ['Mix all together', 'Bake in oven', 'Eat it all up'],
      data: [],
      title: 'Easy Creamy Vegan Macaroni and Cheese',
      snippet: 'Although this does not taste like the the traditional mac n cheese recipes most of us grew up with it will satisfy your comfort food craving while helping you avoid preservatives, dyes, meat, and dairy.',
      meal: 'Todo',
      ingredient: ['1 (8 ounce) package elbow macaroni', '1 cup nutritional yeast', '4 cloves garlice'],
      photos: '',
      difficulty: 'EASY',
      duration: '30',
      servings: '2',
    };
  }

  render() {
    const { directions, title, ingredient, snippet, difficulty, duration, servings} = this.state;

    const mealDifficulty = () => {
      if (difficulty === 'EASY') {
        return (
          <img  className="recipe-difficulty" src="https://img.icons8.com/material-rounded/24/4EC8ED/low-connection.png" alt="Easy Difficulty Rating" />
        );
      }
      if (difficulty === 'MEDIUM') {
        return (
          <img  className="recipe-difficulty" src="https://img.icons8.com/material-rounded/24/4EC8ED/medium-connection.png" alt="Medium Difficulty Rating" />
        );
      }
      if (difficulty === 'ADVANCED') {
        return (
          <img  className="recipe-difficulty" src="https://img.icons8.com/material-rounded/24/4EC8ED/bar-chart.png" alt="Advanced Difficulty Rating" />
        );
      }
      return ""; 
    };

    return (
      <div className="recipe-overall-container">
        <div className="row">
          <div className="header">
            <Header />
          </div>
        </div>
        <div>
          <button className="btn navbar-btn btn-lg editButton" type="button">
            <img src="https://img.icons8.com/windows/32/ffa616/edit.png" alt="edit"/>
             <p id="edit-icon-text">Edit</p>
          </button>
          <button  className="btn navbar-btn btn-lg cancelButton" type="button">
             <img src="https://img.icons8.com/windows/32/ffa616/cancel.png" alt="delete"/>
              <p id="delete-icon-text">Delete</p>
          </button>
        </div>
        <img src={recipephoto} alt="recipephoto" className="recipe-photo" />
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
                  { duration }{' '}MIN
              </span>
            </div>
            <div id="recipe-spec-container3" className="recipe-spec-element col-sm-4 text-center">
              <i className="fas fa-utensil-spoon" />
                <span>{ servings }</span>
            </div>
          </div>
        </div>
        <div className="tags-bar">
          <TagsBar/>
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
              {ingredient.map(ingred => (
                <li>
                  <div id="single-ingredient">{ingred}</div>
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
                {directions.map((direction, index) => (
                <div className="single-direction">
                  <span className="direction-index">{index + 1}</span>
                  <p className="direction-action">{direction}</p>
                  <br />
                </div>
                ))}
             </ul>
          </div>

        <div className="row">
            <Footer />
        </div>
        </div>
      );
    }
  }

export default withRouter(Recipe);