import React, { Component } from 'react';
import TextInput from '../../../components/TextInput';
import PrimaryCTA from '../../../components/PrimaryCTA';

class LoginForm extends Component {
  static defaultProps = {
    email: '',
    password: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      password: this.props.password,
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(evt) {
    this.setState((curState) => ({
      ...curState,
      [evt.target.name]: evt.target.value,
    }));
  }

  render() {
    return (
      <form className="login-form">
        <TextInput
          name="email"
          placeholder="Email"
          email={true}
          style={{ width: '100%', marginTop: '5rem' }}
          required={true}
          onChange={this.updateValue}
          value={this.state.email}
        />
        <TextInput
          name="password"
          placeholder="Password"
          password={true}
          style={{ width: '100%', marginTop: '2.8rem' }}
          required={true}
          minLength={8}
          onChange={this.updateValue}
          value={this.state.password}
        />
        <PrimaryCTA
          label="Login"
          type="submit"
          button={true}
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 500,
            fontSize: '1.75rem',
            width: '100%',
            textAlign: 'center',
            marginTop: '4rem',
            marginBottom: '6rem',
            cursor: 'pointer',
          }}
        />
      </form>
    );
  }
}

export default LoginForm;
