import React, { useState } from 'react';
import { createComment } from '../../lib/apiClient';
import './RecipeComments.css';

const RecipeComments = (recipeId) => {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    createComment(recipeId, comment);
  };

  return (
    <div className="comment-section">
      <div id="box-wrapper">
        <form onSubmit={handleSubmit}>
          <input id="comment-box" type="text" value={comment} onChange={handleChange} placeholder="Type a comment" />
        </form>
      </div>
      <div className="comment-display">
        <div className="comments">
          <h5>First Name & Last Name</h5>
          <p>lorem ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeComments;
