import React from 'react';
import './ResultsCounter.scss';

const ResultsCounter = ({ recipes }) => (
  <div className="container">
    <div className="row">
      <div className="resultsCounter">
        {recipes.length}
        {' Recipes Found'}
      </div>
    </div>
  </div>
);

export default ResultsCounter;
