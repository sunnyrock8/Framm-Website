import React, { Component } from 'react';
import '../sass/Modal.scss';

class Modal extends Component {
  static defaultProps = {
    visible: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      hidden: this.props.hidden,
    };
    this.handleBGClick = this.handleBGClick.bind(this);
    this.handleEscapeKey = this.handleEscapeKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscapeKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey);
  }

  handleEscapeKey(e) {
    if (e.key === 'Escape') this.props.hide();
  }

  handleBGClick(evt) {
    if (!evt.target.classList?.contains('modal-bg')) return;

    this.props.hide();
  }

  render() {
    return (
      <div
        className={`modal-bg  ${this.props.visible ? '' : 'modal-bg--hide'}`}
        style={{ display: this.props.hidden ? 'none' : 'block' }}
        onClick={this.handleBGClick}
      >
        <div className={`modal`}>
          <div className="modal__close-container">
            <span className="modal__close" onClick={this.props.hide}>
              &times;
            </span>
          </div>
          <div>
            <h1 className="modal__heading">{this.props.heading}</h1>
            <div className="modal__body">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
