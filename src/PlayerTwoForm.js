import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const userDetails = {
      playerTwo: event.target[0].value,
      twitterHandle: `@${event.target[1].value}`,
      wonLastMatch: false
    }
    this.props.getPlayerTwoInfo(userDetails)
  }

  render() {
    return (
    <div>
      <h3>
        Player Two
      </h3>
      <form onSubmit={this.handleSubmit} action="http://localhost:3001/api/users" method="post" className="uk-form-horizontal uk-margin-large">
        <div className="uk-margin">
          <label className="uk-form-label">Worms Name</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="text" placeholder="Steven"/>
          </div>
          <label className="uk-form-label">Twitter handle</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-horizontal-text" type="text" placeholder="@"/>
          </div>
        </div>
        <input type="submit"/>
      </form>
    </div>
    )
  }
}

export default SignUp;
