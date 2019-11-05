import React from 'react';
import Header from '../../components/Header/Header';
import CreateRecipeForm from '../../components/CreateRecipeForm/CreateRecipeForm';
import './CreateRecipe.css';

const CreateRecipe = ({ user, setJwt }) => (
  <div className="createRecipePage container-fluid">
    <div className="row">
      <div className="createRecipePage-header">
        <Header showSearchBar user={user} setJwt={setJwt} />
      </div>
    </div>
    <div className="row justify-content-md-center">
      <h1 className="text-center">Create Recipe</h1>
    </div>
    <div className="row">
      <div className="edit-recipe-form">
        <CreateRecipeForm user={user} />
      </div>
    </div>
  </div>
);

export default CreateRecipe;
