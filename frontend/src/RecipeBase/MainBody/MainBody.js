import React, { Component } from 'react';
import './MainBody.css';

export class MainBody extends Component {
	render() {
		return (
			<div className="row" id="blurb-title">
				<h3 id="recipe-title" className="col-sm-6 offset-sm-3">Easy Creamy Vegan Macaroni and Cheese</h3>
				<p id="recipe-descrip" className="col-sm-8 offset-sm-2">Although this does not taste like the traditional mac 'n cheese recipes most of us grew up with, it will satisfy your comfort food craving while helping you avoid preservatives, dyes, meat, and dairy. Stir in your favorite veggies and/or meatless filler and you've got yourself a satisfying meal. This recipe is very versatile; tweak ingredients to your liking!</p>
			</div>
		);
	}
}