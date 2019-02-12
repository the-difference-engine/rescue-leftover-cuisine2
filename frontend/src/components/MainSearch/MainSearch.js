import React, { Component } from 'react';
import './MainSearch.css'

class MainSearch extends Component {

  render (){
    return (
      <div className="mainSearch container-fluid">
        <div className="row">
          <div className="searchSection">
            <p className="findText">Find Recipes from Rescuing Leftover Cuisine</p>
              <span className="search">
                <form className="search-form"><input type="text" className="input" placeholder="Search by keywords" /></form>
              </span>
          </div>
        </div>
      </div>
    )
  }
}

export default MainSearch;
