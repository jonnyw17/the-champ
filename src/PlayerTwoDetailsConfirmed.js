import React, { Component } from 'react';

class PlayerTwoDetailsConfirmed extends Component {
  render() {
    return (
        <ul>
          <li>{this.props.playerTwo}</li>
          <li>{this.props.twitter}</li>
        </ul>
    );
  }
}

export default PlayerTwoDetailsConfirmed;
