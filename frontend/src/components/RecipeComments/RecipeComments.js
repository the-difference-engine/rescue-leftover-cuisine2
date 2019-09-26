import React, { useState } from 'react';
import './RecipeComments.css';

const RecipeComments = () => {
  const [comment, setComment] = useState('');

  return (
    <div className="comment-section">
      <div id="box-wrapper">
        <input id="comment-box" type="text" value={comment} onChange={e => setComment(e.target.value)} placeholder="Type a comment" />
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
