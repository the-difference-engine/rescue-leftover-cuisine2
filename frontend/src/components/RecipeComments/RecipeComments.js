import React, { useState } from 'react';
import map from 'lodash/map';
import { createComment } from '../../lib/apiClient';
import './RecipeComments.css';

const RecipeComments = ({
  comments, recipeId, user, reloadComments,
}) => {
  const [comment, setComment] = useState('');

  const formatDate = (date) => {
    const monthFormatter = (n) => {
      let month;
      if (n === 0) {
        month = 'January';
      } else if (n === 1) {
        month = 'February';
      } else if (n === 2) {
        month = 'March';
      } else if (n === 3) {
        month = 'April';
      } else if (n === 4) {
        month = 'May';
      } else if (n === 5) {
        month = 'June';
      } else if (n === 6) {
        month = 'July';
      } else if (n === 7) {
        month = 'August';
      } else if (n === 8) {
        month = 'September';
      } else if (n === 9) {
        month = 'October';
      } else if (n === 10) {
        month = 'November';
      } else if (n === 11) {
        month = 'December';
      }
      return month;
    }
    const d = new Date(date);
    const day = d.getUTCDate();
    const month = monthFormatter(d.getUTCMonth());
    const year = d.getUTCFullYear();
    return (`${day} ${month} ${year}`);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const submitComment = async () => {
    setComment('');
    console.log(comments[1].created_at);
    await createComment(comment, recipeId);
    reloadComments();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitComment();
  };

  const renderForm = () => (
    <form>
      <textarea id="comment-box" type="text" value={comment} placeholder="Type a comment" onChange={handleChange} />
      <input id="submit-btn" type="submit" onClick={handleSubmit} />
    </form>
  );

  const renderComments = () => (
    <div>
      {map(comments, value => (
        <div key={value.id} className="comment-content">
          <hr />
          <p>
            <strong>
              {value.user.first_name}
              {' '}
              {value.user.last_name}
              {' '}
              {formatDate(value.created_at)}
            </strong>
            <br />
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
