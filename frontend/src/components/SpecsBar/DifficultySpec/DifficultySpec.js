import React, { Component } from 'react';
import './DifficultySpec.scss';

export default class DifficultySpec extends Component {
  constructor() {
    super();
    this.state = {
      boxColorTwo: '#eeeeee',
      boxColorThree: '#eeeeee',
      difficulty: '',
    };
  }

  componentDidMount() {
    const difficultyOptions = ['EASY', 'MEDIUM', 'HARD'];
    const probabilityCheck = Math.random();

    if (probabilityCheck < (1 / 3)) {
      this.setState({ difficulty: difficultyOptions[0] });
    } else if (probabilityCheck < (2 / 3)) {
      this.setState({ difficulty: difficultyOptions[1], boxColorTwo: '#55ffff' });
    } else {
      this.setState({ difficulty: difficultyOptions[2], boxColorTwo: '#55ffff', boxColorThree: '#55ffff' });
    }
  }

  render() {
    const { boxColorTwo, boxColorThree, difficulty } = this.state;

    return (
      <div className="spec-unique">
        <div id="diff-graphic">
          <div id="difficulty-scale1" />
          <div style={{ backgroundColor: boxColorTwo, boxShadow: `0 0 1px 1px ${boxColorTwo}` }} id="difficulty-scale2" />
          <div style={{ backgroundColor: boxColorThree, boxShadow: `0 0 1px 1px ${boxColorThree}` }} id="difficulty-scale3" />
        </div>
        <div id="diff-text">{difficulty}</div>
      </div>
    );
  }
}
