import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import './MainSearch.css';

class MainSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      error: '',
      showInstructions: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  componentDidMount() {
    const cookies = new Cookies();
    if (cookies.get('rlc') !== 'visited') {
      this.setState({
        showInstructions: true,
      });
      cookies.set('rlc', 'visited', { path: '/' });
    }
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
      this.setState({ searchTerm: '' });
      this.handleRedirect();
    }
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

  togglePanel() {
    this.setState(prevState => ({ showInstructions: !prevState.showInstructions }));
  }

  renderChevronButton() {
    return (
      <div className="chevronButtonContainer">
        <div onClick={this.togglePanel} className="chevron-box">
          <img
            src="https://img.icons8.com/ios/26/000000/chevron-down.png"
            alt="chevron button"
            className="chevron-image"
          />
        </div>
      </div>
    );
  }

  renderInstructions() {
    return (
      <div className="searchInstructions">
        <p>
          You can search recipe names or ingredients by keyword. Enter your keywords and
          click the search button or press enter to search. If you use multiple keywords, the
          search will return only results containing all of your keywords.
        </p>
        <div onClick={this.togglePanel}>
          <p className="close">Collapse</p>
        </div>
      </div>
    );
  }

  render() {
    const { error, showInstructions, searchTerm } = this.state;

    return (
      <div className="mainSearch container-fluid">
        <div className="row">
          <div className="searchSection">
            <p className="findText">Find Recipes from Rescuing Leftover Cuisine</p>
            <span className="search">
              <form className="search-form" onSubmit={this.handleSubmit}>
                <div className="absoluteContainer">
                  <div className="searchContainer">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search by recipe name or ingredient"
                      value={searchTerm}
                      onChange={this.handleChange}
                    />
                    <button type="submit" className="search-button">
                      <img
                        src="https://img.icons8.com/ios/30/000000/search.png"
                        alt="search"
                      />
                    </button>
                  </div>
                  <div>
                    { showInstructions ? this.renderInstructions() : this.renderChevronButton() }
                  </div>
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

export default withRouter(MainSearch);
