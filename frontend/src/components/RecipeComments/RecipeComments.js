import React, { useState } from 'react';
import map from 'lodash/map';
import { createComment } from '../../lib/apiClient';
import './RecipeComments.css';

const RecipeComments = ({ comments, recipeId, user }) => {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    createComment(comment, recipeId);
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <textarea id="comment-box" type="text" value={comment} placeholder="Type a comment" onChange={handleChange} />
      <input type="submit" />
    </form>
  );

  const renderComments = () => {
    return (
      <div>
        {map(comments, value => (
          <div className="comment-content">
            <hr />
            <p><strong>{value.user.first_name} {value.user.last_name}</strong></p>
            <p>{value.body}</p>
          </div>
        ))
        }
      </div>
    );
  };

  return (
    <div className="comment-section container">
      <div className="row">
        <div className="col-sm-12">
          {comments.length === 0
            && !user ? <h1>No one has commented on this recipe.</h1> : <h1>Comments</h1>}
          <div id="box-wrapper">
            {user ? renderForm() : <h3>Please log in to post a comment.</h3>}
          </div>
          <div className="comment-display">
            <div>
              {renderComments()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeComments;
