import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class ChampDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentChamp: [
        {
          player: "Anthony"
        }
      ]
    }
  }
  render() {
    return (
      <Link to="/battledisplay">
        <h1>Champ Display</h1>
      </Link>
    );
  }
}

export default ChampDisplay;
