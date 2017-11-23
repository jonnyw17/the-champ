import React, {Component} from 'react';

class PlayerOneForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const userDetails = {
      playerOne: event.target[0].value,
      twitterHandle: `@${event.target[1].value}`,
      wonLastMatch: false
    }
    this.props.getPlayerOneInfo(userDetails)
  }

  render() {
    return (
    <div>
      <h3>
        Player One
      </h3>
      <form onSubmit={this.handleSubmit} action="http://localhost:3001/api/users" method="post" className="uk-form-horizontal uk-margin-large">
        <div className="uk-margin">
          <label className="uk-form-label">Worms Name</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="text" name="playerOne" placeholder="Steven"/>
          </div>
          <label className="uk-form-label">Twitter handle</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="text" name="twitterHandle" placeholder="@"/>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
    );
  }
}

export default PlayerOneForm;
