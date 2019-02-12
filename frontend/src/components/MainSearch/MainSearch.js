import React, { Component } from 'react';
import './MainSearch.css'

class MainSearch extends Component {

  handleKeyPress = (event) => {
    console.log(event);
    if(event.key === 'Enter'){
      this.props.setSearchTerm(event.target.value)
    }
  }

  render (){
    return (
      <div className="mainSearch container-fluid">
        <div className="row">
          <div className="searchSection">
            <p className="findText">Find Recipes from Rescuing Leftover Cuisine</p>
            <span className="search"><input type='text' className='input' placeholder='Search by keywords' onKeyPress={this.handleKeyPress}/></span>
          </div>
        </div>
      </div>
    )
  }
}

export default MainSearch;
