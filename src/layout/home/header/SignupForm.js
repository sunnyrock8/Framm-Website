import React, { cloneElement, Component } from 'react';
import TextInput from '../../../components/TextInput';
import PrimaryCTA from '../../../components/PrimaryCTA';

class SignupForm extends Component {
  static defaultProps = {
    name: '',
    email: '',
    password: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
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
      <form className="signup-form" action="">
        <TextInput
          name="name"
          placeholder="Name"
          style={{ width: '100%', marginTop: '5rem' }}
          required={true}
          onChange={this.updateValue}
          value={this.state.name}
          validate={true}
        />
        <TextInput
          name="email"
          placeholder="Email"
          email={true}
          style={{ width: '100%', marginTop: '2.8rem' }}
          required={true}
          onChange={this.updateValue}
          value={this.state.email}
          validate={true}
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
          validate={true}
        />
        <p
          className="signup-form__instructions"
          style={{
            fontSize: '1.4rem',
            fontFamily: "'Lora', sans-serif",
            opacity: 0.8,
            textAlign: 'left',
            marginTop: '2.2rem',
            display: this.state.password.length >= 8 ? 'none' : 'block',
          }}
        >
          The password should be at least 8 characters long
        </p>
        <PrimaryCTA
          label="Sign Up"
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

export default SignupForm;
