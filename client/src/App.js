import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Courses from './components/Courses'
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';


const App = () => {

    return(
      <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/"  render={() => <Courses />} />
          <Route path="/signin" component={UserSignIn} />
          <Route path="/signup" component={UserSignUp} />
        </Switch>
      </div>
    </Router>
  
    )
  }

  export default App






