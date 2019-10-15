import React, { useState } from 'react';
import map from 'lodash/map';
import { createComment } from '../../lib/apiClient';
import './RecipeComments.css';

const RecipeComments = ({ comments, recipeId, user, rerenderComments }) => {
  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   createComment(comment, recipeId);
  // };
const submitComment = async () => {
  await createComment(comment, recipeId);
  const newData = { body: comment };
  const newCommentData = { ...comments, ...newData };
  rerenderComments(newCommentData);
}
  const clickEvent = event => {
    event.preventDefault();
    submitComment();
  }

  const renderForm = () => (
    <form >
      <textarea id="comment-box" type="text" value={comment} placeholder="Type a comment" onChange={handleChange} />
      <input id="submit-btn" type="submit" onClick={clickEvent} />
    </form>
  );

  const renderComments = () => (
    <div>
      {map(comments, value => (
        <div className="comment-content">
          <hr />
          <p>
            <strong>
              {value.user.first_name}
              {' '}
              {value.user.last_name}
            </strong>
          </p>
          <p>{value.body}</p>
        </div>
      ))
      }
    </div>
  );

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
