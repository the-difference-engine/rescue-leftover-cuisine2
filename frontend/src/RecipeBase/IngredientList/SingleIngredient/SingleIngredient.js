import React, { Component } from 'react';
import './SingleIngredient.css';

export class SingleIngredient extends Component {
	render() {
		return (
			<div id="single-ingredient">
				{this.props.ingredient}
			</div>
		);
	}
}