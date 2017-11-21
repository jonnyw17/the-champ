import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <Link to="/platform">
          <h1>Sign Up</h1>
        </Link>
      </div>
    )
  }
}

export default SignUp;
