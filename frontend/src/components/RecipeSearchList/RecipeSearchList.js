import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { getRecipes } from '../../lib/apiClient';

class RecipeSearchList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
  }
  
  componentDidMount() {
    getRecipes(this.props.search)
      .then(data => {
        this.setState({
          recipes: data
        });
      });
  }
    
  
  render() {
    return (
      <div id="wrapper">
        {this.state.recipes.map(recipe =>
          <RecipeCard
            {...recipe}
            key={recipe.id}
          />
        )}
      </div>
    )
  }
}

export default RecipeSearchList;