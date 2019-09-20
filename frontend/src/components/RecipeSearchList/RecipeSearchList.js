import map from 'lodash/map';
import React, { useState, useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import ResultsCounter from '../ResultsCounter/ResultsCounter';
import SearchLozenge from '../SearchLozenge/SearchLozenge';
import { getRecipes } from '../../lib/apiClient';

const RecipeSearchList = ({ searchTerm }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes(searchTerm)
      .then(data => setRecipes(data));
  }, [searchTerm]);

  const renderCounter = searchTerm ? <ResultsCounter recipes={recipes} /> : <div />;
  const renderLozenge = searchTerm ? <SearchLozenge searchTerm={searchTerm} /> : <div />;

  return (
    <div id="cards-wrapper">
      {renderCounter}
      {renderLozenge}
      {map(recipes, recipe => (
        <RecipeCard
          {...recipe}
          key={recipe.id}
        />
      ))}
    </div>
  );
};

export default RecipeSearchList;
