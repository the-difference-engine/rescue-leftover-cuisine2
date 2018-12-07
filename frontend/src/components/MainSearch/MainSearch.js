import React, {Component } from 'react';
import search from './MainSearch.css'
import axios from "axios";
import { Link } from "react-router-dom";
import SuggestionInputSearch from 'suggestion-react-input-search';
import history from '../../history'; 
//https://www.npmjs.com/package/suggestion-react-input-search
// MARYANN <span className="search"><input type='text' className='input' placeholder='Search by keywords'/> </span>

const recentSearches = []

class MainSearch extends Component {

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes = () => {
    axios.get('/recipes')
      .then(res => {
        console.log('res',res.data.recipes);
        const recipes = res.data.recipes;
        for (var i = 0; i < recipes.length; i++) {
        recentSearches.push(recipes[i].title);
      }}).catch(err => console.log(err));
  };

  handleOnSubmit(recipe) {
    window.location.href = "/recipes/" + recipe;
  }

  render (){
      
      const placeholder = 'Search by keywords';
      const inputPosition = 'center';

      return(
          <div className="mainSearchContainer">
            <div className="searchSection">
              <p className="findText">Find Recipes from Resuing Leftover Cuisine</p>
              <SuggestionInputSearch
                onSubmitFunction={this.handleOnSubmit}
                recentSearches={recentSearches}
                placeholder={placeholder}
                inputPosition={inputPosition}
                inputClass={search}
                goTo={this.goTo}
              />
            </div>
          </div>
      )
  }
}

export default MainSearch;
