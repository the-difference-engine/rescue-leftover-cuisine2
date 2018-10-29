import React, { Component } from 'react';
import './IngredientList.css';
import {SingleIngredient} from './SingleIngredient/SingleIngredient.js';

export class IngredientList extends Component {
	constructor() {
		super();
		this.state = {
			ingredients: ['1 (8 ounce) package elbow macaroni', '2/3 cup rice bran oil, divided', '2 cups unsweetened soy milk', '1 cup nutritional yeast', '4 cloves garlic, minced', '2 teaspoons yellow mustard', '1 teaspoon ground paprika']
		}
	}
	render() {
		return (
			<div id="ingredient-list">
				<h4 id="ingredient-title">Ingredients</h4>
				<ul>
					{this.state.ingredients.map((ingred) => {
						return (<li><SingleIngredient
							ingredient={ingred} /></li>
						)
					})}
				</ul>
			</div>
		);
	}
}