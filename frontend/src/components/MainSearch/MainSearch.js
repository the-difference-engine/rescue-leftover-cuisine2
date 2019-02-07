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
          <div className="col-md-4"></div>
          <div className="suggestionsSection">
            <div className="col-md-4">
              <span>
                <h3>Our Suggestions</h3>
                <h5>Based on this week's popular ingredient donations</h5>
              </span>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    )
  }
}

export default MainSearch;
