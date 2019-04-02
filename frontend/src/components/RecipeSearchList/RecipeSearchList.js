import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
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
    return (
      <div id="cards-wrapper">
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
