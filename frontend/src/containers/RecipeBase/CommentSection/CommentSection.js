import React, { Component } from 'react';
import './CommentSection.css';
import { SingleComment } from './SingleComment/SingleComment.js';

export class CommentSection extends Component {
	constructor() {
		super();
		this.state = {
			comments: [{user: 'alfonso', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}],
			nextText: ''
		}
	}
	handleInput = (e) => {
		this.setState({ nextText: e.currentTarget.value });
	}
	enterComment = (event) => {
		if (event.which === 13 && !event.shiftKey){
			event.target.form.dispatchEvent(new Event("submit", {cancelable: true}));
			console.log('operationsl');
			event.preventDefault();
		}
	}
	submitComment = () => {
		document.getElementById("new-comment-box").addEventListener("keypress", this.enterComment);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.setState(state => {
			const comments = state.comments.concat({user: 'anonymous', body: state.nextText});

			return {
				comments,
				nextText: '',
			};
		});
		document.getElementById('new-comment-box').value = '';
	}
	handleKeyPress = (event) => {
	  if(event.key === 'Enter'){
	    this.handleSubmit(event);
	  }
	}
	render() {
		return (
			<div>
				<div id="comment-container">
					<h2 id="comments-title">Comments</h2>
					<textarea id="new-comment-box" className="col-sm-10" placeholder="Type a comment" onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
					<div id="submitted-comments">
						{this.state.comments.map((item, index) => {
							return (<SingleComment
								text={item.body} speaker={item.user} key={index} />
							)
						})}
					</div>
				</div>
			</div>
		);
	}
}