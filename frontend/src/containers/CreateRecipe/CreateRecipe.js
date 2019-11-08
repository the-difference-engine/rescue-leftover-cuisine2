import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import CreateRecipeForm from '../../components/CreateRecipeForm/CreateRecipeForm';
import { getRecipe } from '../../lib/apiClient';
import './CreateRecipe.css';

const CreateRecipe = ({ user, setJwt, match }) => {
  const [heading, setHeading] = useState('Create Recipe');
  const [currentRecipe, setCurrentRecipe] = useState();
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    if (match.params.id && !isEditing) {
      getRecipe(match.params.id).then((response) => {
        setCurrentRecipe(response.data);
        setHeading(`Editing ${response.data.title}`);
        setIsEditing(true);
      });
    }
  });
  // const getHeading = (id) => {
  //   if (id >= 0) {
  //     getRecipe(id).then((response) => {
  //       setHeading(`Editing ${response.data.title}`);
  //     });
  //   }
  //   return heading;
  // };

  return (
    <div className="createRecipePage container-fluid">
      <div className="row">
        <div className="createRecipePage-header">
          <Header showSearchBar user={user} setJwt={setJwt} />
        </div>
      </div>
      <div className="row justify-content-md-center">
        <h1 className="text-center">
          {heading}
        </h1>
      </div>
      <div className="row">
        <div className="edit-recipe-form">
          <CreateRecipeForm
            user={user}
            currentRecipe={match.params.id >= 0 ? currentRecipe : null}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
