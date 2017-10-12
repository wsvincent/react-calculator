import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.name}</button>;
  }
}

Button.propTypes = {
  clickHandler: PropTypes.func
};

export default Button;
