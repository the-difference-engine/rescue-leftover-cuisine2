import React, { Component } from 'react';
import './RecipeBase.css';
import {MainImage} from './MainImage/MainImage.js';
import {SpecsBar} from '../SpecsBar/SpecsBar.js';
import {TagsBar} from '../TagsBar/TagsBar.js';
import {CommentSection} from './CommentSection/CommentSection.js';
import {DeleteIcon} from './DeleteIcon/DeleteIcon.js';
import {EditIcon} from './EditIcon/EditIcon.js';


class RecipeBase extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: ['1 (8 ounce) package elbow macaroni', '2/3 cup rice bran oil, divided', '2 cups unsweetened soy milk', '1 cup nutritional yeast', '4 cloves garlic, minced', '2 teaspoons yellow mustard', '1 teaspoon ground paprika'],
      directions: ['Preheat', 'Bring', 'Combine', 'Pour', 'Bake']
    }
  }
  render() {
    return (
      <div className="overall-container">
        <header className="recipe-path">
          <p className="path-information">Jason Oliver > Easy Creamy Vegan Macaroni and Cheese</p>
          <p className="path-information-mobile">> Jason Oliver > Recipe</p>
          <EditIcon />
          <DeleteIcon />
        </header>
        <MainImage />
        <SpecsBar />
        <TagsBar />
        <div className="row" id="blurb-title">
          <h3 id="recipe-title" className="col-sm-6 offset-sm-3">Easy Creamy Vegan Macaroni and Cheese</h3>
          <p id="recipe-descrip" className="col-sm-8 offset-sm-2">Although this does not taste like the traditional mac 'n cheese recipes most of us grew up with, it will satisfy your comfort food craving while helping you avoid preservatives, dyes, meat, and dairy. Stir in your favorite veggies and/or meatless filler and you've got yourself a satisfying meal. This recipe is very versatile; tweak ingredients to your liking!</p>
        </div>
        <div className="separator col-sm-10 offset-sm-1"></div>
        <div id="ingredient-list">
          <h4 id="ingredient-title">Ingredients</h4>
          <ul>
            {this.state.ingredients.map((ingred, i) => {
              return (
                <li>
                  <div id="single-ingredient">
                    {ingred}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="separator col-sm-10 offset-sm-1"></div>
        <div id="direction-container" className="col-sm-10 offset-sm-1">
          <h4 id="direction-title">Directions</h4>
          <ul>
            {this.state.directions.map((direction, index) => {
              return (
                <div className="single-direction">
                  <h1 className="direction-index">{index + 1}</h1>
                  <p className="direction-action">{direction}</p>
                  <br/>
                </div>
              )
            })}
          </ul>
        </div>
        <CommentSection />
      </div>
    );
  }
}

export default RecipeBase;
