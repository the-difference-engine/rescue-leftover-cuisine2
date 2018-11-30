import React, { Component } from 'react';
import './TagsBar.css';
import {SingleTag} from './SingleTag/SingleTag.js';
import {AddTag} from './AddTag/AddTag.js';

export class TagsBar extends Component {
	constructor() {
		super();
		this.state = {
			tags: ['VEGAN', 'HEALTHY', 'DINNER', 'CHEESY', 'KIDS', 'NUTS']
		}
	}
	render() {
		return (
			<div className="tags-bar col-sm-10 offset-sm-1">
				{this.state.tags.map((tag, i) => {
					return (<SingleTag
						tag={tag} key={i} />
					)
				})}
				<AddTag />
			</div>
		);
	}
}