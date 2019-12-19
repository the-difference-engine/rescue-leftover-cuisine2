import map from 'lodash/map';
import React, { useState, useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import ResultsCounter from '../ResultsCounter/ResultsCounter';
import SearchLozenge from '../SearchLozenge/SearchLozenge';
import { getRecipes } from '../../lib/apiClient';
import './RecipeSearchList.scss';

const RecipeSearchList = ({ searchTerm }) => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [newSearchTerm, setnewSearchTerm] = useState(false);

  useEffect(() => {
    setnewSearchTerm(true);
    setPage(1);
    getRecipes(1, searchTerm)
      .then(data => setRecipes(data));
  }, [searchTerm]);

  useEffect(() => {
    if (!newSearchTerm) {
      getRecipes(page, searchTerm)
        .then(data => setRecipes(recipes.concat(data)));
    }
  }, [page]);

  const loadMoreRecipes = () => {
    setPage(page + 1);
    if (newSearchTerm) {
      setnewSearchTerm(false);
    }
  };

  const renderCounter = searchTerm ? <ResultsCounter recipes={recipes} /> : <div />;
  const renderLozenge = searchTerm ? <SearchLozenge searchTerm={searchTerm} /> : <div />;

  return (
    <div className="cards-container">
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
      <button className="btn load-more-button ml-3" type="button" onClick={loadMoreRecipes}>load more</button>
    </div>
  );
};

export default RecipeSearchList;
