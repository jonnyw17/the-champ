import React, { Component } from 'react';

class PlayerOneDetailsConfirmed extends Component {
  render() {
    return (
        <ul>
          <li>{this.props.playerOne}</li>
          <li>{this.props.twitter}</li>
        </ul>
    )
  }
}

export default PlayerOneDetailsConfirmed;
