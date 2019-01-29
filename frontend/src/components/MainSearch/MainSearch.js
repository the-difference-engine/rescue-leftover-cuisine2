import React, { Component } from 'react';
import './MainSearch.css'

class MainSearch extends Component {

  render (){
    return (
      <div className="container-fluid">
        <div className="row-fluid">
          <div className="mainSearchContainer">
            <div class="col-md-2"></div>
            <div className="col-md-6">
              <div className="searchSection">
                <p className="findText">Find Recipes from Resuing Leftover Cuisine</p>
                <span className="search"><input type='text' className='input' placeholder='Search by keywords'/></span>
              </div>
            </div>
            <div class="col-md-2"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainSearch;
