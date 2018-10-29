import React, { Component } from 'react';
import './DifficultySpec.css';

export class DifficultySpec extends Component {
	render() {
		return (
			<div className="spec-unique">
				<div id="diff-graphic">
					<div id="difficulty-scale1"></div>
					<div id="difficulty-scale2"></div>
					<div id="difficulty-scale3"></div>
				</div>
				<div id="diff-text">EASY</div>
			</div>
		);
	}
}