import React, {Component } from 'react';
import search from './MainSearch.css'
import SuggestionInputSearch from 'suggestion-react-input-search'; 
//https://www.npmjs.com/package/suggestion-react-input-search
// <span className="search"><input type='text' className='input' placeholder='Search by keywords'/> </span>

class MainSearch extends Component {

  componentDidMount() {
    
      
  }

  handleOnSubmit(term) {
      // Do whatever you need i.e. calling API
  }

  handleOnSubmit(recipe) {
    window.location.href = "/recipes/" + recipe;
  }

  render (){
      const recentSearches = ['star wars', 'star wars IV', 'star trek', 'star wars I'];
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
              />
            </div>
          </div>
      )
  }
}

export default MainSearch;
