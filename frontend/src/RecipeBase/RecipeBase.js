import React, { Component } from 'react';
import './RecipeBase.css';
import {MainImage} from './MainImage/MainImage.js';
import {SpecsBar} from '../SpecsBar/SpecsBar.js';
import {TagsBar} from '../TagsBar/TagsBar.js';
import {MainBody} from './MainBody/MainBody.js';
import {Directions} from './Directions/Directions.js';
import {CommentSection} from './CommentSection/CommentSection.js';
import {DeleteIcon} from './DeleteIcon/DeleteIcon.js';
import {EditIcon} from './EditIcon/EditIcon.js';


class RecipeBase extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: ['1 (8 ounce) package elbow macaroni', '2/3 cup rice bran oil, divided', '2 cups unsweetened soy milk', '1 cup nutritional yeast', '4 cloves garlic, minced', '2 teaspoons yellow mustard', '1 teaspoon ground paprika']
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
        <MainBody />
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
        <Directions />
        <CommentSection />
      </div>
    );
  }
}

export default RecipeBase;
