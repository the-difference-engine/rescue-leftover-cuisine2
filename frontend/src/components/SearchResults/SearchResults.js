import React, { Component } from 'react';
import { getRecipes } from '../../lib/apiClient';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipesFound: [],
    };
  }

  componentDidMount() {
    const { searchTerm } = this.props;
    this.recipeData(searchTerm);
  }

  componentWillReceiveProps(nextProps) {
    const { searchTerm } = this.props;
    if (searchTerm !== nextProps.searchTerm) {
      this.recipeData(nextProps.searchTerm);
    }
  }

  recipeData(searchTerm) {
    getRecipes(searchTerm)
      .then((data) => {
        this.setState({
          recipesFound: data,
        });
      });
  }

  render() {
    const { recipesFound } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="searchResults">
            { recipesFound.length}
            {' Recipes Found'}
          </div>
        </div>
      </div>
    );
  }
}
export default SearchResults;
