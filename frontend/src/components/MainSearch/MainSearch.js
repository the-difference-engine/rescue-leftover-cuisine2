import React, {Component } from 'react';
import search from './MainSearch.css'
import axios from "axios";
import SuggestionInputSearch from 'suggestion-react-input-search';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const recentSearches = []

class MainSearch extends Component {

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes = () => {
    axios.get('/recipes')
      .then(res => {
        const recipes = res.data.recipes;
        for (var i = 0; i < recipes.length; i++) {
        recentSearches.push(recipes[i].title);
        }}).catch(err => console.log(err));
  };

  handleOnSubmit(recipe) {
    history.push('/recipes/' + recipe );
  }

  render (){

      return(
          <div className="mainSearchContainer">
            <div className="searchSection">
              <p className="findText">Find Recipes from Resuing Leftover Cuisine</p>
              <SuggestionInputSearch
                onSubmitFunction={this.handleOnSubmit}
                recentSearches={recentSearches}
                placeholder={'Search by Keywords'}
                inputPosition={'center'}
                inputClass={search}
              />
            </div>
          </div>
      )
  }
}

export default MainSearch;
