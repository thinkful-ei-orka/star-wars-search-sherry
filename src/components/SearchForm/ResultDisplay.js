import React from 'react';

import './ResultDisplay.css'

function ResultDisplay(props) {
  console.log(props)

  function renderLis(props) {
    if(props.results.length > 0) {
      return props.results.map((name, i) =>  <li className="result" key={i}>{name}</li>)
    } else if(props.touched  && props.results.length === 0) {
      return <li className="result" key="0">No such droids exist</li>
    }
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