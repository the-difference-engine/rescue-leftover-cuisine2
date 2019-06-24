import React from 'react';
import './SearchLozenge.css';

const SearchLozenge = (props) => {
  let { searchTerm } = props;
  if (!searchTerm) {
    searchTerm = '';
  }
  const lozenges = searchTerm.split(' ');
  return (
    <div className="searchLozenge container">
      <div className="row">
        <div className="lozengeBubbles">
          {lozenges.map(lozenge => (
            <div className="lozenges">
              {lozenge.charAt(0).toUpperCase() }
              {lozenge.substr(1)}
              {' '}
              {' x'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchLozenge;
