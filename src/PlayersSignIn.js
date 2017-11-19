import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PlayerOneForm from './PlayerOneForm';
import PlayerTwoForm from './PlayerTwoForm';
import PlayerOneDetailsConfirmed from './PlayerOneDetailsConfirmed';
import PlayerTwoDetailsConfirmed from './PlayerTwoDetailsConfirmed';
import request from 'superagent';

class PlayersSignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [],
      addPlayer: false,
      playerOneDetails: [],
      playerTwoDetails: []
    }
    this.addPlayer = this.addPlayer.bind(this);
    this.getPlayerTwoInfo = this.getPlayerTwoInfo.bind(this);
    this.getPlayerOneInfo = this.getPlayerOneInfo.bind(this);
  }

  addPlayer() {
    this.setState({addPlayer: true})
  }

  getPlayerOneInfo(PlayerOneObj) {
    console.log(PlayerOneObj)
    this.setState({playerOneDetails: PlayerOneObj})
    //store obj in mongodb
    return axios.post('/api/messages', PlayerOneObj).then(result => {
      .then((response) => {
        console.log('saved successfully')
    }).catch(console.log)
  }

  getPlayerTwoInfo(PlayerTwoObj) {
    console.log(PlayerTwoObj)
    this.setState({playerTwoDetails: PlayerTwoObj})
  }

  render() {
    return (
      <div>

      {
        //test state for playerOne details, if present (will only be present if details have been submitted) remove form and display playerOne details
        this.state.playerOneDetails.length !== 0
          ? <PlayerOneDetailsConfirmed playerOne={this.state.playerOneDetails.playerOne} twitter={this.state.playerOneDetails.twitterHandle}/>
          : <PlayerOneForm getPlayerOneInfo={this.getPlayerOneInfo}/>
      }

      <hr className="divider"/>

      <button onClick={this.addPlayer}>+</button>
      {
        //test state for playerTwo details, if present (will only be present if details have been submitted) remove form and display playerTwo details
        this.state.addPlayer
          ? this.state.playerTwoDetails.length !== 0
          ? <PlayerTwoDetailsConfirmed playerTwo={this.state.playerTwoDetails.playerTwo} twitter={this.state.playerTwoDetails.twitterHandle} />
          : <PlayerTwoForm getPlayerTwoInfo={this.getPlayerTwoInfo}/>
          : <h3>
              Add Player Two
            </h3>
      }

      <Link to="/champdisplay">
        <h1>Proceed</h1>
      </Link>

    </div>
    );
  }
}

export default PlayersSignIn;
