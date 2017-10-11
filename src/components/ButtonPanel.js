import React, { Component } from 'react';
import Button from './Button';

class ButtonPanel extends Component {
  render() {
    return (
      <div>
        <div>
          <Button />
          <Button />
          <Button />
          <Button />
        </div>

        <div>
          <Button />
          <Button />
          <Button />
          <Button />
        </div>

        <div>
          <Button />
          <Button />
          <Button />
          <Button />
        </div>

        <div>
          <Button />
          <Button />
          <Button />
          <Button />
        </div>

        <div>
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
