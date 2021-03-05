import React, { Component } from 'react';
import '../sass/TextInput.scss';

class TextInput extends Component {
  static defaultProps = {
    style: {},
  };
  render() {
    return (
      <input
        name={this.props.name}
        type={
          this.props.password ? 'password' : this.props.email ? 'email' : 'text'
        }
        className={`TextInput ${this.props.validate && 'TextInput--validate'}`}
        placeholder={this.props.placeholder}
        style={this.props.style}
        required={this.props.required}
        minLength={this.props.minLength}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}

export default TextInput;
