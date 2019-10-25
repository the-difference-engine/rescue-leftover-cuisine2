import React from 'react';
import './SingleTag.css';

const SingleTag = ({ tag, deleteSelTag, showDeleteButton }) => (
  <div>
    <div className="single-tag">
      <div className="tag-name">{tag}</div>
      {showDeleteButton
        ? <div className="delete-tag" onClick={() => deleteSelTag(tag)}>x</div> : <div className="hide" />
      }
    </div>
  </div>
);

export default SingleTag;
