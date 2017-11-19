import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state ={
      users: []
    }
  }
    componentDidMount( ) {
      fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}))
    }
  render() {
    return (
      <div>
      {this.state.users.map((user) => {
        return <p id={user.id}>{user.username}</p>
      })}

        <h1>Sign In</h1>
        <Link to="/platform">
          <h1>Sign Up</h1>
        </Link>
      </div>
    )
  }
}

export default SignUp;
