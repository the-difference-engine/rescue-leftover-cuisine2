import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./SearchBar.css";

// All this is copied from MainSearch, needs to be changed
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      error: "",
      redirect: false
    };

    this.setSearchTerm = this.setSearchTerm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setSearchTerm(searchTerm) {
    this.setState({
      searchTerm
    });
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleValidation() {
    let error = "";
    let isValid = true;
    const { searchTerm } = this.state;

    if (!searchTerm) {
      error = "Please enter at least one keyword to search";
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

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

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
            setSearchTerm={this.setSearchTerm}
          />
          {this.renderRedirect()}
          <button type="submit" className="sb-search-button" onClick={this.setRedirect}>
            <img src="https://img.icons8.com/ios/30/000000/search.png" alt="search" />
          </button>
        </form>
        <div className="sb-error-message">{error}</div>
      </div>
    );
  }
}

export default SearchBar;
