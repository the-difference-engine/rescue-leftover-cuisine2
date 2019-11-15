import capitalize from 'lodash/capitalize';
import map from 'lodash/map';
import replace from 'lodash/replace';
import split from 'lodash/split';
import toLower from 'lodash/toLower';
import trim from 'lodash/trim';
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SearchLozenge.scss';

const SearchLozenge = ({ history, searchTerm }) => {
  const lozenges = split(searchTerm, ' ');

  const handleClick = (event) => {
    const targetLozenge = event.currentTarget.textContent;
    const lozengeValue = toLower(targetLozenge.substring(0, targetLozenge.length - 1));
    // Remove the deleted search term and clean up extra spaces
    const newSearchTerm = trim(replace(replace(searchTerm, lozengeValue, ''), '  ', ' '));
    const queryString = newSearchTerm ? `/?q=${newSearchTerm}` : '';
    history.push(queryString);
  };

  return (
    <div className="searchLozenge container">
      <div className="row">
        <div className="lozengeBubbles">
          {map(lozenges, lozenge => (
            <div onClick={handleClick} className="lozenge" key={lozenge}>
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
