import React from 'react';

import './SearchForm.css'
import ResultDisplay from './ResultDisplay';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      touched: false,
      searching: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({searching: true})
    const searchTerm = e.target.search.value;
    fetch(`https://swapi.dev/api/people/?search=${searchTerm}`)
    .then(res => {
      if(!res.ok) {
        res.json().then(e => Promise.reject(e))
      } return res.json()
    })
    .then(data => {
      this.setState({
        results: data.results.map(result => result.name),
        touched: true,
        searching: false
      });
      console.log(this.state)
    })
    .catch(err => {
      console.log(err)
    });
  }

  render() {
    return (
      <div>
        <h2>A long time ago in a galaxy far, far away...</h2>
        <h3>Actually, it's a lot closer than that and now!</h3>
        <form className="search-form" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="search">Enter a name to look up</label>
          <input type="text" id="search" name="search" placeholder="Are these the droids you're looking for?" />
          <button type="submit">Use the force</button>
        </form>
        <ResultDisplay results={this.state.results} touched={this.state.touched} searching={this.state.searching}/>
      </div>


    )
  }
}

export default SearchForm