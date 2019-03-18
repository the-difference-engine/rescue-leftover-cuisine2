import React, { Component } from 'react';
import Header from '../../components/Header/Header.js';
import EditRecipeForm from '../../components/EditRecipe/EditRecipeForm.js';
import './CreateRecipe.css';


class CreateRecipe extends Component {
  render() {
    return (
    	<div className="createRecipePage container-fluid">
        <div className="row">
          <div className="createRecipePage-header">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="edit-recipe-form">
						<EditRecipeForm />
          </div>
        </div>
      </div>
        )
    } 
}

export default CreateRecipe;

