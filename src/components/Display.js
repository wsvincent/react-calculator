import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string
};

export default Display;
