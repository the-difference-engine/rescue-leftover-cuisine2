import React from 'react';
import './SingleTag.scss';

const SingleTag = ({ tag, deleteSelectedTag, showDeleteButton }) => (
  <div>
    <div className="single-tag">
      <div className="tag-name">{tag}</div>
      {showDeleteButton
        ? <div className="delete-tag" onClick={() => deleteSelectedTag(tag)}>x</div>
        : null
      }
    </div>
  </div>
);

export default SingleTag;
