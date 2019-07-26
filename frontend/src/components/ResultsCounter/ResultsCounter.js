import React, { Component } from 'react';
import { getRecipes } from '../../lib/apiClient';
import './ResultsCounter.css';


class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipesFound: [],
      searchTerm: null,
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
    this.setState({
      searchTerm: true,
    });
  }

  recipeData(searchTerm) {
    getRecipes(searchTerm)
      .then((data) => {
        this.setState({
          recipesFound: data,
        });
      });
    if (!searchTerm) {
      this.setState({
        searchTerm: false,
      });
    }
  }

  render() {
    const { searchTerm } = this.state;
    const { recipesFound } = this.state;
    if (!searchTerm) {
      return <div />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="resultsCounter">
            { recipesFound.length}
            {' Recipes Found'}
          </div>
        </div>
      </div>
    );
  }
}
export default SearchResults;
