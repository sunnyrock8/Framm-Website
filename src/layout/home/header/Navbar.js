import React, { Component } from 'react';
import { PrimaryCTA, SecondaryCTA } from './CTA';

class Navbar extends Component {
  render() {
    return (
      <nav className="header__nav">
        <img
          src="img/framm_logo.png"
          alt="Framm Logo"
          className="header__logo"
        />
        <div className="header__nav-ctas">
          <SecondaryCTA
            link="#login"
            label="Login"
            onClick={this.props.showLoginModal}
          />
          <PrimaryCTA
            link="#signup"
            label="Sign Up"
            onClick={this.props.showSignupModal}
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
