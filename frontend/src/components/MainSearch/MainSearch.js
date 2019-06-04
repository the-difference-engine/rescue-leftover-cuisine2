import React, { Component } from 'react';
import './MainSearch.css';

class MainSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      error: '',
      open: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleValidation() {
    let error = '';
    let isValid = true;
    const { searchTerm } = this.state;
    if (!searchTerm) {
      error = 'Please enter at least one keyword to search';
      isValid = false;
    }
    this.setState({ error });
    return isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    const { setSearchTerm } = this.props;
    const { searchTerm } = this.state;
    if (this.handleValidation()) {
      setSearchTerm(searchTerm);
    }
  }

  togglePanel(event) {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { error } = this.state;
    return (
      <div className="mainSearch container-fluid">
        <div className="row">
          <div className="searchSection">
            <p className="findText">
              Find Recipes from Rescuing Leftover Cuisine
            </p>
            <span className="search">
              <form className="search-form" onSubmit={this.handleSubmit}>
                <div className="absoluteContainer">
                  <div className="searchContainer">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search by recipe name or ingredient"
                      onChange={this.handleChange}
                    />
                    <button type="submit" className="search-button">
                      <img
                        src="https://img.icons8.com/ios/30/000000/search.png"
                        alt="search"
                      />
                    </button>
                  </div>
                  <div className="buttonContainer">
                    {!this.state.open ? (
                      <div onClick={(event) => this.togglePanel(event)} className="chevron-box">
                        <img
                          src="https://img.icons8.com/ios/26/000000/chevron-down.png"
                          alt="chevron button"
                          className="chevron-image"
                        />
                      </div>
                    ) : null}
                  </div>
                  {/* ternary operator shortcut (if/else) */}
                  {this.state.open ? (
                    <div className="search-instrucitons">
                      <p> You can search recipe names or ingredients by keyword. Enter your keywords and click the search button or press enter to search. If you use multiple keywords, the search will return only results containing all of your keywords.</p>
                      <div onClick={(event) => this.togglePanel(event)}>
                        <p className="close">Collapse</p>
                      </div>
                    </div>

                  ) : null}
                </div>
              </form>
              <div className="error-message">{error}</div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSearch;
