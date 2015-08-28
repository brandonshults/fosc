'use strict';
import React from 'react';

export default class StyleSheetLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <link
        rel='stylesheet'
        type='text/css'
        href={this.props.href}
        />
    )
  }
}