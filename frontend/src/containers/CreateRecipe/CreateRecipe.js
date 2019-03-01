import React, { Component } from 'react';
import Header from '../../components/Header/Header.js';
import CreateRecipeForm from '../../components/CreateRecipeForm/CreateRecipeForm.js';
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
          <div className="createRecipePage-form">
						<CreateRecipeForm />
          </div>
        </div>
      </div>
        )
    } 
}

export default CreateRecipe;

