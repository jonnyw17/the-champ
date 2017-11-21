import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Platform extends Component {
  render() {
    return (
    <div className="platForm-main-div">
      <Link to="/userform">
        <div className="platform-top">
          <h3 className="platform-name">Worms W.M.D.</h3>
        </div>
      </Link>
      <div className="platform">
        <h3 className="platform-name">League of Legends</h3>
        <p>coming soon</p>
      </div>
      <div className="platform">
        <h3 className="platform-name">Starcraft II</h3>
        <p>coming soon</p>
      </div>
      <div className="platform">
        <h3 className="platform-name">Dota 2</h3>
      </div>
    </div>
    )
  }
}

export default Platform;
