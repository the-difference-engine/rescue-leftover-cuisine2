import React, { Component } from 'react';
import './SingleComment.css';

export class SingleComment extends Component {
	render() {
		return (
			<div className="single-comment">
				<div className="single-comment-heading">
					<div className="commenter-icon"></div>
					<p className="commenter-title">{this.props.speaker}</p>
				</div>
				<div className="single-comment-body">
					<p>{this.props.text}</p>
				</div>
			</div>
		);
	}
}