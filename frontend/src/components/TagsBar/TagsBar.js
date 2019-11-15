import map from 'lodash/map';
import React from 'react';

import AddTag from './AddTag/AddTag';
import SingleTag from './SingleTag/SingleTag';

import './TagsBar.scss';

const TagsBar = ({
  tags, deleteSelectedTag, showDeleteButton, allTags, refreshTags,
}) => (
  <div className="tags-bar col-sm-10 offset-sm-1">
    {map(tags, tag => (
      <SingleTag
        tag={tag.title}
        key={tag.id}
        deleteSelectedTag={deleteSelectedTag}
        showDeleteButton={showDeleteButton}
      />
    ))}
    { showDeleteButton
      ? (
        <AddTag
          allTags={allTags}
          refreshTags={refreshTags}
        />
      )
      : null
    }
  </div>
);

export default TagsBar;
