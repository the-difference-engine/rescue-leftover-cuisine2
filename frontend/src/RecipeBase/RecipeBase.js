import React, { Component } from 'react';
import './RecipeBase.css';
import {MainImage} from './MainImage/MainImage.js';
import {SpecsBar} from '../SpecsBar/SpecsBar.js';
import {TagsBar} from '../TagsBar/TagsBar.js';
import {MainBody} from './MainBody/MainBody.js';
import {IngredientList} from './IngredientList/IngredientList.js';
import {Directions} from './Directions/Directions.js';
import {CommentSection} from './CommentSection/CommentSection.js';
import {DeleteIcon} from './DeleteIcon/DeleteIcon.js';
import {EditIcon} from './EditIcon/EditIcon.js';


class RecipeBase extends Component {
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
        <IngredientList />
        <div className="separator col-sm-10 offset-sm-1"></div>
        <Directions />
        <CommentSection />
      </div>
    );
  }
}

export default RecipeBase;
