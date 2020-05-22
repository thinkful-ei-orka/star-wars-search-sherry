import React from 'react';

import './ResultDisplay.css'

function ResultDisplay(props) {

  function renderLis(props) {
    return props.results.map((name, i) =>  <li className="result" key={i}>{name}</li>)
  } 

  return (
    <div className="result-display">
      <ul className="result-list">
        {renderLis(props)}
      </ul>
    </div>
  )
}

export default ResultDisplay