import React, {Component } from 'react';
import './MainSearch.css'

class MainSearch extends Component {

  render (){
      return(
          <div className="mainSearchContainer">
            <div className="searchSection">
              <p className="findText">Find Recipes from Resuing Leftover Cuisine</p>
              <span className="search"><input type='text' className='input' placeholder='Search by keywords'/> </span>
            </div>
          </div>
      )
  }
}

export default MainSearch;
