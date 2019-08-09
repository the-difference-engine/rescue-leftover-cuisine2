import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import ResultsCounter from '../ResultsCounter/ResultsCounter';
import SearchLozenge from '../SearchLozenge/SearchLozenge';
import { getRecipes } from '../../lib/apiClient';

class RecipeSearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    const { searchTerm } = this.props;
    this.updateRecipes(searchTerm);
  }

  componentWillReceiveProps(nextProps) {
    const { searchTerm } = this.props;
    if (searchTerm !== nextProps.searchTerm) {
      this.updateRecipes(nextProps.searchTerm);
    }
  }

  updateRecipes(searchTerm) {
    getRecipes(searchTerm)
      .then((data) => {
        this.setState({
          recipes: data,
        });
      });
  }

  render() {
    const { recipes } = this.state;
    const { searchTerm, parsed } = this.props;
    const renderCounter = !searchTerm ? <div /> : <ResultsCounter recipes={recipes} />;
    const renderLozenge = !searchTerm ? (
      <div />
    ) : (
      <SearchLozenge parsed={parsed} searchTerm={searchTerm} />
    );
    return (
      <div id="cards-wrapper">
        { renderCounter }
        { renderLozenge }
        {recipes.map(recipe => (
          <RecipeCard
            {...recipe}
            key={recipe.id}
          />
        ))}
      </div>
    );
  }
}

export default RecipeSearchList;
