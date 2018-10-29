import React, { Component } from 'react';
import './SingleTag.css';

export class SingleTag extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="single-tag">
				{this.props.tag}
			</div>
		);
	}
}