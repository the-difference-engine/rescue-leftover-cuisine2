import React, { Component } from 'react';
import './Directions.css';
import {SingleDirection} from './SingleDirection/SingleDirection.js';

export class Directions extends Component {
	constructor() {
		super();
		this.state = {
			directions: ['Preheat', 'Bring', 'Combine', 'Pour', 'Bake']
		}
	}
	render() {
		return (
			<div id="direction-container">
				<h4 id="direction-title">Directions</h4>
				<ul>
					{this.state.directions.map((direction, index) => {
						return (<SingleDirection
							direction={direction} index={index + 1} />
						)
					})}
				</ul>
			</div>
		);
	}
}