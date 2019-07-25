import React from 'react';
import './SearchLozenge.css';

const SearchLozenge = (props) => {
  let { searchTerm } = props;
  searchTerm = searchTerm || '';

  const capitalize = lozenge => lozenge.charAt(0).toUpperCase() + lozenge.slice(1).toLowerCase();

  const lozenges = searchTerm.split(' ');

  if (!searchTerm) {
    return (
      <div />
    );
  } return (
    <div className="searchLozenge container">
      <div className="row">
        <div className="lozengeBubbles">
          {lozenges.map(lozenge => (
            <div className="lozenges">
              {capitalize(lozenge)}
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
