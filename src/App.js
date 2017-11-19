import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import SignUp from './SignUp';
import Platform from './Platform';
import PlayersSignIn from './PlayersSignIn';
import ChampDisplay from './ChampDisplay';
import BattleDisplay from './BattleDisplay';

class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact="/" path="/" component={SignUp}/>
            <Route path="/platform" component={Platform}/>
            <Route path="/userform" component={PlayersSignIn}/>
            <Route path="/champdisplay" component={ChampDisplay}/>
            <Route path="/battledisplay" component={BattleDisplay}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
