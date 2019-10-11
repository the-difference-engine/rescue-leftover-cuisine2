import map from 'lodash/map';
import React, { Component } from 'react';
import { getRecipeTags } from '../../lib/apiClient';

import AddTag from './AddTag/AddTag';
import SingleTag from './SingleTag/SingleTag';

import './TagsBar.css';

export default class TagsBar extends Component {
  constructor() {
    super();
    this.state = {
      tags: [],
    };
  }

  componentDidMount() {
    const { id } = this.props;
    getRecipeTags(id).then((data) => {
      console.log('data', data);
      this.setState({
        tags: data,
      });
    });
  }

  render() {
    const { tags } = this.state;
    return (
      <div className="tags-bar col-sm-10 offset-sm-1">
        {map(tags, tag => <SingleTag tag={tag.title} key={tag.id} />)}
        <AddTag />
      </div>
    );
  }
}
