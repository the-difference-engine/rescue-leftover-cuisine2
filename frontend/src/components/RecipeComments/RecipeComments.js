import React, { useState } from 'react';
import { createComment } from '../../lib/apiClient';
// import PropTypes from 'prop-types';
import './RecipeComments.css';

const RecipeComments = ({ comments, recipeId }) => {
  const [comment, setComment] = useState('');
  const handleChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    createComment(comment, recipeId);
  };

  const renderComments = () => {
    // console.log(comments);
    // comments.map(comment => console.log(comment));
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
          {renderComments()}
        </div>
      </div>
    </div>
  );
};

// RecipeComments.defaultProps = {
//   comments: [],
// };

// RecipeComments.PropTypes = {
//   comments: PropTypes.arrayOf(Proptypes.shape({})),
// }

export default RecipeComments;
