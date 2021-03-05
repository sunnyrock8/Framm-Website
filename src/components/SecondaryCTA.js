import React, { Component } from 'react';

class SecondaryCTA extends Component {
  defaultClickHandler() {}
  render() {
    return (
      <a
        href={this.props.link}
        className="cta cta--secondary"
        onClick={this.props.onClick || this.defaultClickHandler}
      >
        {this.props.label}
      </a>
    );
  }
}

export default SecondaryCTA;
