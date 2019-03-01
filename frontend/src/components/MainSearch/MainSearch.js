import React, { Component } from 'react';
import './MainSearch.css'

class MainSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setSearchTerm(this.state.searchTerm);
  }

  render (){
    return (
      <div className="mainSearch container-fluid">
        <div className="row">
          <div className="searchSection">
            <p className="findText">Find Recipes from Rescuing Leftover Cuisine</p>
              <span className="search">
                <form className="search-form">
                  <input type="text" className="input" placeholder="Search by keywords" ref={input => this.search = input} onChange={this.handleInputChange} />
                  <p></p>
                </form>
              </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSearch;
