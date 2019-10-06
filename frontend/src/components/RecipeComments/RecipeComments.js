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
    //console.log(comments[0].user.first_name);
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
            <div className="comments">
              {renderComments()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


RecipeComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string,
    created_at: PropTypes.string,
    id: PropTypes.number,
    recipe_id: PropTypes.id,
    updated_at: PropTypes.string,
    user: PropTypes.shape({
      created_at: PropTypes.string,
      email: PropTypes.string,
      first_name: PropTypes.string,
      id: PropTypes.number,
      interests: PropTypes.number,
      is_admin: PropTypes.bool,
      is_suspended: PropTypes.bool,
      last_name: PropTypes.string,
      profile_photo: PropTypes.string,
      updated_at: PropTypes.string,
      username: PropTypes.string,
    }),
    user_id: PropTypes.number,
  })),
};

RecipeComments.defaultProps = {
  comments: [{
    body: "comment",
    created_at: "2019-10-03T00:31:25.357Z",
    id: 10,
    recipe_id: 28,
    updated_at: "2019-10-03T00:31:25.357Z",
    user: {
      id: 1,
      email: 'bob@domain.com',
      created_at: "2019-09-24T01:03:56.610Z",
      updated_at: "2019-09-24T01:03:56.610Z",
      username: "Bob@RLC",
    },
    user_id: 1,
  }],
};

export default RecipeComments;
