import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel.js';

class App extends Component {
  render() {
    return (
      <div>
        <Display value="42" />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
