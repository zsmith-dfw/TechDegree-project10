
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
import apiBaseUrl from './config';
import axios from "axios";

export default class App extends Component() {

  constructor() {
    super()
    this.state = {
      courses: [],
    }
  }
  componentDidMount() {
    this.returnCourses()
  }

  returnCourses =() => {
    axios.get(`${apiBaseUrl}/courses`)
    .then(response => {
      this.setState({
        courses: response.data.courses
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }
  render() {
    console.log(this.state.courses)
    return(
      <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/"  render={() => <Courses data={this.state.courses} />} />
          <Route path="/signin" component={UserSignIn} />
          <Route path="/signup" component={UserSignUp} />
        </Switch>
      </div>
    </Router>
  
    )
  }
}









