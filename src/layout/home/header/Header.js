import React, { Component } from 'react';

import Navbar from './Navbar';
import Modal from '../../../components/Modal';

import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

import '../../../sass/Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      loginModalHidden: true,
      signupModal: false,
      signupModalHidden: true,
    };
    this.showLoginModal = this.showLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);
    this.showSignupModal = this.showSignupModal.bind(this);
    this.hideSignupModal = this.hideSignupModal.bind(this);
  }

  showLoginModal() {
    this.setState({ ...this.state, loginModal: true, loginModalHidden: false });
  }

  hideLoginModal() {
    this.setState({ ...this.state, loginModal: false });
    setTimeout(
      () => this.setState({ ...this.state, loginModalHidden: true }),
      400
    );
  }

  showSignupModal() {
    this.setState({
      ...this.state,
      signupModal: true,
      signupModalHidden: false,
    });
  }

  hideSignupModal() {
    this.setState({ ...this.state, signupModal: false });
    setTimeout(
      () => this.setState({ ...this.state, signupModalHidden: true }),
      400
    );
  }

  render() {
    return (
      <>
        <Modal
          heading="Login"
          visible={this.state.loginModal}
          hidden={this.state.loginModalHidden}
          hide={this.hideLoginModal}
        >
          <LoginForm />
        </Modal>
        <Modal
          heading="Sign Up"
          visible={this.state.signupModal}
          hidden={this.state.signupModalHidden}
          hide={this.hideSignupModal}
        >
          <SignupForm />
        </Modal>
        <div className="header">
          <Navbar
            showLoginModal={this.showLoginModal}
            showSignupModal={this.showSignupModal}
          />
          <main className="header__content">
            <div className="header__text-content">
              <h1 className="header__title">
                The{' '}
                <span className="header__title--highlight">best quality</span>{' '}
                photo shoot props to make your{' '}
                <span className="header__title--highlight">dreams</span> come
                true.
              </h1>
              <a href="" className="header__cta header__cta--tertiary">
                <text>learn more</text>{' '}
                <span>
                  <img src="img/darr.svg" alt="" />
                </span>
              </a>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>

            <img src="img/header_image.png" className="header__hero-image" />
          </main>
        </div>
      </>
    );
  }
}

export default Header;
