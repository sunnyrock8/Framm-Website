import React, { Component } from 'react';
import '../sass/CTA.scss';

class PrimaryCTA extends Component {
  static defaultProps = {
    style: {},
  };

  render() {
    return this.props.button ? (
      <button
        href={this.props.link}
        className="cta cta--primary"
        style={this.props.style}
        onClick={this.props.onClick}
        type={this.props.type}
      >
        {this.props.label}
      </button>
    ) : (
      <a
        href={this.props.link}
        className="cta cta--primary"
        style={this.props.style}
        onClick={this.props.onClick}
      >
        {this.props.label}
      </a>
    );
  }
}

export default PrimaryCTA;
