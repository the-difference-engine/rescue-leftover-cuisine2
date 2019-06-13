import React, { useState, useEffect } from 'react';
import querystring from 'querystring';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainSearch from '../../components/MainSearch/MainSearch';
import RecipeSearchList from '../../components/RecipeSearchList/RecipeSearchList';
import BottomSignUp from '../../components/BottomSignUp/BottomSignUp';
import './Homepage.css';

const Homepage = (props) => {
  const [searchTerm, setSearchTerm] = useState(null);

  const getSearchTerm = () => {
    const { location } = props;
    const parsed = querystring.parse(location.search.slice(1)); // don't parse the question mark
    setSearchTerm(parsed.q);
  };

  useEffect(() => {
    getSearchTerm();
  });

  return (
    <div className="homepage container-fluid ">
      <div className="row">
        <div className="header">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="homepageContent">
          <div className="row">
            <MainSearch />
          </div>
          <div className="row suggestions">
            <div className="col-12">
              <h2>Our Suggestions</h2>
              <br />
              <h5>Based on this week&apos;s popular ingredient donations</h5>
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
};

export default Homepage;
