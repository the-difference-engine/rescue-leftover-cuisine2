import React, { Component } from 'react';
import './SpecsBar.css';
import {ServingsSpec} from './ServingsSpec/ServingsSpec.js';
import {DurationSpec} from './DurationSpec/DurationSpec.js';
import {DifficultySpec} from './DifficultySpec/DifficultySpec.js';

export class SpecsBar extends Component {
	render() {
		return (
			<div className="specs-bar">
				<div className="row">
					<div id="diff-spec-container1" className="spec-element col-sm-4 text-center">
						<DifficultySpec/>
					</div>
					<div id="diff-spec-container2" className="spec-element col-sm-4 text-center">
						<DurationSpec/>
					</div>
					<div id="diff-spec-container3" className="spec-element col-sm-4 text-center">
						<ServingsSpec/>
					</div>
				</div>
			</div>
		);
	}
}