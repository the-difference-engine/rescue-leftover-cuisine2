import React, { useRef, useEffect } from 'react';
import querystring from 'querystring';
import isNil from 'lodash/isNil';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainSearch from '../../components/MainSearch/MainSearch';
import RecipeSearchList from '../../components/RecipeSearchList/RecipeSearchList';
import BottomSignUp from '../../components/BottomSignUp/BottomSignUp';
import './Homepage.scss';

const Homepage = ({ location, user, setJwt }) => {
  const parsed = querystring.parse(location.search.slice(1)); // don't parse the question mark
  const searchTerm = parsed.q;

  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);


  const myRef = useRef(null);

  const executeScroll = () => {
    scrollToRef(myRef);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homepage container-fluid">
      <div className="row">
        <div className="header">
          <Header user={user} setJwt={setJwt} scrollToRecipes={executeScroll} />
        </div>
      </div>
      <div className="row">
        <div className="homepageContent">
          <div className="row">
            <MainSearch onSubmit={executeScroll} searchTerm={searchTerm} />
          </div>
          <div className="row suggestions" ref={myRef}>
            <div className="col-12">
              <h2>Recent Recipes</h2>
              <br />
              <h5>Newest recipes from our community.</h5>
            </div>
          </div>
          <div className="row">
            <RecipeSearchList searchTerm={searchTerm} />
          </div>
          {isNil(user) ? (
            <div className="row">
              <BottomSignUp />
            </div>
          ) : null
          }
          <div className="row">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
