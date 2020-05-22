import React, { Component } from 'react';

export default class SearchError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>Could not display the names.</h2>
      );
    }
    return this.props.children;
  }
}