import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainSearch from '../../components/MainSearch/MainSearch';
import RecipeSearchList from '../../components/RecipeSearchList/RecipeSearchList';
import BottomSignUp from '../../components/BottomSignUp/BottomSignUp';
import './Homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
    };

    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  setSearchTerm(searchTerm) {
    this.setState({
      searchTerm,
    });
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <div className="homepage container-fluid ">
        <div className="row">
          <div className="header">
            <Header showSearchBar={false} />
          </div>
        </div>
        <div className="row">
          <div className="homepageContent">
            <div className="row">
              <MainSearch setSearchTerm={this.setSearchTerm} />
            </div>
            <div className="row suggestions">
              <div className="col-12">
                <h2>Our Suggestions</h2>
                <br />
                <h6>{ 'Based on this week\'s popular ingredient donations' }</h6>
              </div>
            </div>
            <div className="row">
              <RecipeSearchList searchTerm={searchTerm} />
            </div>
            <div className="row">
              <BottomSignUp />
            </div>
            <div className="row">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
