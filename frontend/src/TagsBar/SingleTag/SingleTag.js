import React, { Component } from 'react';
import './SingleTag.css';

export class SingleTag extends Component {
	render() {
		return (
			<div className="single-tag">
				{this.props.tag}
			</div>
		);
	}
}