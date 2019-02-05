import React, { Component } from 'react';
import './MainSearch.css'

class MainSearch extends Component {

  render (){
    return (
      <div className="mainSearch container-fluid">
        <div className="row">
          <div className="searchSection">
            <p className="findText">Find Recipes from Rescuing Leftover Cuisine</p>
              <span className="search"><input type='text' className='input' placeholder='Search by keywords'/></span>
          </div>
        </div>
        <div className="row">
          <div className="suggestionsSection">
            <p>Our Suggestions</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MainSearch;
