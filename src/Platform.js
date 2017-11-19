import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Platform extends Component {
  render() {
    return (<div>
      <Link to="/userform">
        <div className="platform">
          <h3>Worms</h3>
        </div>
      </Link>
      <div className="platform">
        <h3>League of Legends</h3>
      </div>
      <div className="platform">
        <h3>Starcraft II</h3>
      </div>
      <div className="platform">
        <h3>Dota 2</h3>
      </div>
    </div>)
  }
}

export default Platform;
