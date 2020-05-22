import React from 'react';

import './SearchForm.css'
import ResultDisplay from './ResultDisplay';

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <h2>A long time ago in a galaxy far, far away...</h2>
        <h3>Actually, it's a lot closer than that and now!</h3>
        <form className="search-form">
          {/* remember, onSumbit goes on the FORM */}
          <label htmlFor="search">Enter a name to look up</label>
          <input type="text" id="search" name="search" placeholder="Are these the droids you're looking for?" />
          <button type="submit">Use the force</button>
        </form>
        <ResultDisplay />
      </div>


    )
  }
}

export default SearchForm