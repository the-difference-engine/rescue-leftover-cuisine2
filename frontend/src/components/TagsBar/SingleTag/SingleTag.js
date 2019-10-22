import React from 'react';
import './SingleTag.css';

const SingleTag = ({ tag, deleteSelTag }) => (
  <div>
    <div className="single-tag">
      {tag}
    </div>
    <button type="button" onClick={() => deleteSelTag(tag)}>x</button>
  </div>
);

export default SingleTag;
