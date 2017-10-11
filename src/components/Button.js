import React, { Component } from 'react';

class Button extends Component {
  onClick = () => {
    console.log('click');
  };

  render() {
    return <button onClick={this.onClick}>{this.props.name}</button>;
  }
}

export default Button;
