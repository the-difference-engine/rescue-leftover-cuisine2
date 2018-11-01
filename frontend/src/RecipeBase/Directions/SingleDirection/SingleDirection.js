import React, { Component } from 'react';
import './SingleDirection.css';

export class SingleDirection extends Component {
	render() {
		return (
			<div className="single-direction">
				<h1 className="direction-index">{this.props.index}</h1>
				<p className="direction-action">{this.props.direction}</p>
				<br/>
			</div>
		);
	}
}