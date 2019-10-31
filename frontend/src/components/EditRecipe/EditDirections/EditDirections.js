import React from 'react';
import map from 'lodash/map';
import './EditDirections.css';

const EditDirections = ({
  directions, handleDirectionsAdd, handleDirectionsChange, handleDirectionsRemove,
}) => (
  <div>
    <div className="directions-container">
      <h1>Directions</h1>
      {map(directions, (direction, idx) => (
        <div className="directions" key={(idx)}>
          <i className="fas fa-circle" />
          <input
            id="directions-input"
            type="text"
            placeholder="Enter text"
            value={direction || ''}
            onChange={e => handleDirectionsChange(idx, e)}
          />
          <button id="recipe-delete-btn" type="button" onClick={() => handleDirectionsRemove(idx)}>
            <i className="fas fa-times" />
          </button>
        </div>
      ))}
      <div className="directions-btn-container">
        <button className="btn navbar-btn btn-lg add-directions-button" type="button" onClick={() => handleDirectionsAdd()}>
          + ADD
        </button>
      </div>
    </div>
  </div>
);


export default EditDirections;
