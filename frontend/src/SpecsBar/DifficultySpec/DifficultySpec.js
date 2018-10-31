import React, { Component } from 'react';
import './DifficultySpec.css';

export class DifficultySpec extends Component {
	constructor() {
		super();
		this.state = {
			difficulty: '',
			boxColorTwo: '#eeeeee',
			boxColorThree: '#eeeeee'
		}
	}
	componentDidMount(){
		const difficultyOptions = ['EASY', 'MEDIUM', 'HARD'];
		const probabilityCheck = Math.random();
		console.log(probabilityCheck);
		if (probabilityCheck < (1/3)) {
			this.setState({ difficulty: difficultyOptions[0] })
		} else if (probabilityCheck < (2/3)) {
			this.setState({ difficulty: difficultyOptions[1], boxColorTwo: '#55ffff' })			
		} else {
			this.setState({ difficulty: difficultyOptions[2], boxColorTwo: '#55ffff', boxColorThree: '#55ffff' })
		}
	}
	render() {
		return (
			<div className="spec-unique">
				<div id="diff-graphic">
					<div id="difficulty-scale1"></div>
					<div style={{backgroundColor: this.state.boxColorTwo, boxShadow: '0 0 1px 1px ' + this.state.boxColorTwo}} id="difficulty-scale2"></div>
					<div style={{backgroundColor: this.state.boxColorThree, boxShadow: '0 0 1px 1px ' + this.state.boxColorThree}} id="difficulty-scale3"></div>
				</div>
				<div id="diff-text">{this.state.difficulty}</div>
			</div>
		);
	}
}