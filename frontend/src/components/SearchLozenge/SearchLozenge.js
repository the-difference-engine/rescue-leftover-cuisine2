import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SearchLozenge.css';

const SearchLozenge = (props) => {
  const { searchTerm } = props;

  const capitalize = lozenge => lozenge.charAt(0).toUpperCase() + lozenge.slice(1).toLowerCase();

  const lozenges = searchTerm.split(' ');

  function handleClick(event) {
    const targetLozenge = event.currentTarget.textContent;
    const lozengeValue = targetLozenge.substring(0, targetLozenge.length - 1).toLowerCase();
    const newSearchTerm = searchTerm.replace(lozengeValue, '').trim();
    const { history } = props;
    const queryString = `/?q=${newSearchTerm}`;
    history.push(queryString);
    if (!newSearchTerm) {
      const newQueryString = '';
      history.push(newQueryString);
    }
  }

  return (
    <div className="searchLozenge container">
      <div className="row">
        <div className="lozengeBubbles">
          {lozenges.map(lozenge => (
            <div onClick={handleClick} className="lozenge">
              {capitalize(lozenge)}
              <button className="closeLozenge" type="button">x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SearchLozenge.propTypes = {
  searchTerm: PropTypes.string,
};

SearchLozenge.defaultProps = {
  searchTerm: '',
};

export default withRouter(SearchLozenge);
