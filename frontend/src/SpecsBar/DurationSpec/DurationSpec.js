import React, { Component } from 'react';
import './DurationSpec.css';

export class DurationSpec extends Component {
	render() {
		return (
			<div className="spec-unique">
				<div id="dura-clockface">
				</div>
				<div id="dura-minute">
				</div>
				<div id="dura-hour">
				</div>
				<div id="dura-text">30 MIN</div>
			</div>
		);
	}
}