import React, { Component } from 'react';

export default class BlankComponent extends Component {
  render() {
    return React.createElement(
      'div',
      null,
      'Blank Component'
    );
  }
}