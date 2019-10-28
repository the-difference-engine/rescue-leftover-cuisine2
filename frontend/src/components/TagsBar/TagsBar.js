import map from 'lodash/map';
import React from 'react';

import AddTag from './AddTag/AddTag';
import SingleTag from './SingleTag/SingleTag';

import './TagsBar.css';

const TagsBar = ({
  tags, deleteSelTag, showDeleteButton, allTags,
}) => (
  <div className="tags-bar col-sm-10 offset-sm-1">
    {map(tags, tag => (
      <SingleTag
        tag={tag.title}
        key={tag.id}
        deleteSelTag={deleteSelTag}
        showDeleteButton={showDeleteButton}
      />
    ))}
    { showDeleteButton
      ? (
        <AddTag
          allTags={allTags}
        />
      )
      : <div />
    }
  </div>
);

export default TagsBar;
