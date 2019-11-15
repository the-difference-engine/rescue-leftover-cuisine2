import React from 'react';
import DifficultySpec from './DifficultySpec/DifficultySpec';
import DurationSpec from './DurationSpec/DurationSpec';
import ServingsSpec from './ServingsSpec/ServingsSpec';
import './SpecsBar.scss';

const SpecsBar = () => (
  <div className="specs-bar">
    <div className="row">
      <div id="diff-spec-container1" className="spec-element col-sm-4 text-center">
        <DifficultySpec />
      </div>
      <div id="diff-spec-container2" className="spec-element col-sm-4 text-center">
        <DurationSpec />
      </div>
      <div id="diff-spec-container3" className="spec-element col-sm-4 text-center">
        <ServingsSpec />
      </div>
    </div>
  </div>
);

export default SpecsBar;
