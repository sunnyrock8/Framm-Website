import React, { Component } from "react";

class TertiaryCTA extends Component {
  static defaultProps = {
    link: "#",
    label: "Insert a label here!",
  };

  render() {
    return (
      <a href={this.props.link} className="header__cta header__cta--tertiary">
        <text>{this.props.label.toLowerCase()}</text> <span>&darr;</span>
      </a>
    );
  }
}

export default TertiaryCTA;
