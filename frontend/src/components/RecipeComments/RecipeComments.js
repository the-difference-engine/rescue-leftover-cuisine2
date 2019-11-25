import React, { useState } from 'react';
import map from 'lodash/map';
import { createComment } from '../../lib/apiClient';
import './RecipeComments.css';
import DeleteCommentModal from './DeleteCommentModal/DeleteCommentModal';

const RecipeComments = ({
  comments, recipeId, user, reloadComments,
}) => {
  const [comment, setComment] = useState('');
  const [deleteModal, showDeleteModal] = useState(false);
  const [currentComment, setCurrentComment] = useState(null);

  const toggleDeleteModal = () => {
    showDeleteModal(!deleteModal);
  };

  const formatMinutes = (minute) => {
    if (minute <= 9) {
      return (`0${minute}`);
    }
    return minute;
  };

  const formatTimeStamp = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date(date);
    let hours = d.getHours();
    const min = formatMinutes(d.getMinutes());
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    return (`${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()} ${hours}:${min} ${amOrPm}`);
  };

  const formatMinutes = (minute) => {
    if (minute <= 9) {
      return (`0${minute}`);
    }
    return minute;
  };

  const formatTimeStamp = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date(date);
    let hours = d.getHours();
    const min = formatMinutes(d.getMinutes());
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    return (`${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()} ${hours}:${min} ${amOrPm}`);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setComment(event.target.value);
  };

  const submitComment = async () => {
    await createComment(comment, recipeId);
    reloadComments();
    setComment('');
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

  const modalHandler = (id) => {
    setCurrentComment(id);
    toggleDeleteModal();
  };

  const showDeleteBtn = (commentId) => {
    if (user.is_admin) {
      return (
        <button id="recipe-delete-btn" type="button" onClick={() => modalHandler(commentId)}>
          <i className="fas fa-times" />
        </button>
      );
    }
    return null;
  };

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
            </strong>
            <br />
            {formatTimeStamp(value.created_at)}
            <br />
          </p>
          <div className="comment-body">
            <p>
              {value.body}
            </p>
            {user ? showDeleteBtn(value.id) : null}
          </div>
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
      <DeleteCommentModal
        deleteModal={deleteModal}
        toggleDeleteModal={toggleDeleteModal}
        recipeId={recipeId}
        currentComment={currentComment}
        reloadComments={reloadComments}
      />
    </div>
  );
};

export default RecipeComments;
