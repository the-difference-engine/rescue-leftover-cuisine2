import React, { Component } from 'react';


class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <div />;
  }
}

export default (ScrollToTopOnMount);
