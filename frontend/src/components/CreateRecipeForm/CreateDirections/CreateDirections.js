import React, { useEffect } from 'react';
import map from 'lodash/map';
import { getRecipe } from '../../../lib/apiClient';
import './CreateDirections.css';

const EditDirections = ({
  directions, setDirections, id, isEditing, setIsEditing,
}) => {
  useEffect(() => {
    if (id && !isEditing) {
      getRecipe(id).then((response) => {
        setDirections(response.data.directions);
      });
      setIsEditing(true);
    }
  });
  const handleDirectionsChange = (i, event) => {
    const values = [...directions];
    values[i] = event.target.value;
    setDirections(values);
  };
  const handleDirectionsAdd = () => {
    const values = [...directions];
    values.push('');
    setDirections(values);
  };
  const handleDirectionsRemove = (i) => {
    const values = [...directions];
    values.splice(i, 1);
    setDirections(values);
  };
  return (
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
};

export default EditDirections;
