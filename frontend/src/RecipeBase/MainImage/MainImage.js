import React, { Component } from 'react';
import './MainImage.css';

export class MainImage extends Component {
	render() {
		return (
			<div className="image-container">
         		<img className="recipe-illustration" src="./maccheese.jpg" alt='mac'></img>
        	</div>
		);
	}
}