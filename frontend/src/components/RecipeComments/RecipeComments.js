import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createComment } from '../../lib/apiClient';
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
    const commentsArr = [];
    for (let i = comments.length - 1; i >= 0; i--) {
      const commentArr = [];
      const commenter = (`${comments[i].user.first_name} ${comments[i].user.last_name}`);
      commentArr.push(commenter);
      commentArr.push(comments[i].body);
      commentsArr.push(commentArr);
    }
    return (
      <div>
        {commentsArr.map((value) => {
          return (
            <div className="comment-content">
              <hr />
              <p><strong>{value[0]}</strong></p>
              <p>{value[1]}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="comment-section container">
      <div className="row">
        <div className="col-sm-12">
          <h1>Comments</h1>
          <div id="box-wrapper">
            <form onSubmit={handleSubmit}>
              <textarea id="comment-box" type="text" value={comment} placeholder="Type a comment" onChange={handleChange}/>
              <input type="submit" />
            </form>
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
