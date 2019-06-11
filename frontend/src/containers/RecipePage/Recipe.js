import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import TagsBar from './TagsBar/TagsBar';
import recipephoto from '../../assets/bread.jpg';
import { withRouter } from 'react-router-dom';
 import { pageRecipe } from '../../lib/apiClient';
import './Recipe.css';
import axios from 'axios';

class Recipe extends Component {
  constructor() {
    super();
    this.state = {
     
      directions: ['bake'],
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



    const { directions, ingredients, title ,ingredient, meal, snippet, photos, difficulty, duration, servings} = this.state;


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

    return (
      <div className="overall-container">
        <div className="row">
          <div className="header">
            <Header />
          </div>
        </div>
        <div>
            <button type="button" className="user-edit-button">
              <img 
                src="https://img.icons8.com/windows/32/ffa616/edit.png"
                alt="edit"
              />

            </button>
            <button type="button" className="user-edit-button">
              <img
                src="https://img.icons8.com/windows/32/ffa616/cancel.png"
                alt="delete"
              />
            </button>
        </div>
        <img src={recipephoto} alt="recipephoto" className="recipe-photo" />
          
          <div className="specs-bars">
          <div className="row">
         
          <div id="diff-spec-container1" className="spec-element col-sm-4 text-center">
              <span className="card-meta"> {mealDifficulty()}
               {difficulty}</span>
               </div>

             <div id="diff-spec-container2" className="spec-element col-sm-4 text-center">
             <span className="Bluez">
              <i className="fas fa-clock" />
                 { duration }{' '}MIN</span>
               </div>


          <div id="diff-spec-container3" className="spec-element col-sm-4 text-center">
           <i className="fas fa-utensil-spoon" />
              <span className="Bluez">{ servings }</span>
            </div>

            </div>
           </div>

        <div className="tags-bar">
          <TagsBar />
        </div>
        <div className="row" id="blurb-title">
          <h1 id="recipe-title" className="col-sm-6 offset-sm-3">
             {title}
          </h1>
          <p id="recipe-descrip" className="col-sm-8 offset-sm-2">
            {
              snippet
            }
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
          <ul className="ListItems">
            {directions.map((direction, index) => (
              <div className="single-direction">
                <h1 className="direction-index">{index + 1}</h1>
                <p className="direction-action">{direction}</p>
                <br />
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Recipe);