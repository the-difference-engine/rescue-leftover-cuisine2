import React, { Component } from 'react';
import './EditIcon.css';

export class EditIcon extends Component {
	render() {
		return (
			<div id="edit-icon-container">
				<img id="pencil-icon-png" src="./pencil.ico" alt='pencil'></img>
				<span id="edit-icon-text">EDIT</span>
			</div>
		);
	}
}