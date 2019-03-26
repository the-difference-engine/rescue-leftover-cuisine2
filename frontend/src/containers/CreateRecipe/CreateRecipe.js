import React from 'react';

import Header from '../../components/Header/Header';
import EditRecipeForm from '../../components/EditRecipe/EditRecipeForm';
import './CreateRecipe.css';

const CreateRecipe = () => (
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
);

export default CreateRecipe;
