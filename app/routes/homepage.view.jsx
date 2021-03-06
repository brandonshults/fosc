'use strict';
import React from 'react';
import './homepage.scss';

export default class MainContentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,
    };
  }

  handleClick(event) {
    this.setState({clicks: this.state.clicks+1});
  }

  render() {
    return (
        <div onClick={this.handleClick.bind(this)}>
          <span>{this.props.title}</span>
          <span>{this.state.clicks}</span>
        </div>
    )
  }
}
