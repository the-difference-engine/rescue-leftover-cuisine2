import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { getRecipes } from '../../lib/apiClient';

class RecipeSearchList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  
  componentDidMount() {
    this.updateRecipes(this.props.searchTerm);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchTerm !== nextProps.searchTerm) {
      this.updateRecipes(nextProps.searchTerm);
    }
  }

  updateRecipes(searchTerm) {
    getRecipes(searchTerm)
      .then(data => {
        this.setState({
          recipes: data
        });
      });
  }
  
  render() {
    return (
      <div id="cards-wrapper">
        {this.state.recipes.map(recipe =>
          <RecipeCard
            {...recipe}
            key={recipe.id}
          />
        )}
      </div>
    );
  }
}

export default RecipeSearchList;