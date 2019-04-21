import React, { Component } from 'react';
import './SearchBar.css';

// All this is copied from MainSearch, needs to be changed
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    const { error } = this.state;
    return (
      <span className="search">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search by keywords"
            onChange={this.handleChange}
          />
          <button type="submit" className="search-button">
            <img
              src="https://img.icons8.com/ios/30/000000/search.png"
              alt="search"
            />
          </button>
        </form>
        <div className="error-message">{error}</div>
      </span>
    );
  }
}

export default SearchBar;
