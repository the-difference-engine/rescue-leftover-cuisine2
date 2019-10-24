import React from 'react';
import './SingleTag.css';

const SingleTag = ({ tag, deleteSelTag }) => (
  <div>
    <div className="single-tag">
      <div className="tag-name">{tag}</div>
      <div className="delete-tag" onClick={() => deleteSelTag(tag)}>x</div>
    </div>
    
  </div>
);

export default SingleTag;
