import React from 'react';

import './ResultDisplay.css'

function ResultDisplay(props) {
  return (
    <div className="result-display">
      <ul className="result-list">
        <li className="result">Darth Vader</li>
        <li className="result">Leia</li>
        <li className="result">CHEWY!!</li>
        <li className="result">*Chewy noise in the distance*</li>
      </ul>
    </div>
  )
}

export default ResultDisplay