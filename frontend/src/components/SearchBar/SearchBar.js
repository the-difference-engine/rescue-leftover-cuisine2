import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SearchBar.css';

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

  handleRedirect = () => {
    const { history } = this.props;
    const { searchTerm } = this.state;
    const queryString = `/?q=${searchTerm}`;
    history.push(queryString);
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.handleValidation()) {
      this.handleRedirect();
    }
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

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { error } = this.state;
    return (
      <div className="sb-search">
        <form className="form-inline sb-search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="sb-search-input"
            placeholder="Search by keywords"
            onChange={this.handleChange}
          />

          <button type="submit" className="sb-search-button">
            <img src="https://img.icons8.com/ios/30/000000/search.png" alt="search" />
          </button>
        </form>
        <div className="sb-error-message">{error}</div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
