import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import withContext from './Context'

import Header from './components/Header';
import Courses from './components/Courses'
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import CourseDetail from './components/CourseDetail'
import CreateCourse from './components/CreateCourse'
import UpdateCourse from './components/UpdateCourse'
import Error from './Error'

const UserSignUpWithContext = withContext(UserSignUp);


const App = () => {



    return(
      <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/"  render={() => <Courses />} />
          <Route path="/signin" component={UserSignIn} />
          <Route path="/signup" component={UserSignUpWithContext} />
          <Route path="/create" component={CreateCourse} />
          <Route path="/update" component={UpdateCourse} />
          <Route path={"/courses/:id"} component={CourseDetail} />
          <Route path={"/error"} component={Error} />
        </Switch>
      </div>
    </Router>
  
    )
  }

  export default App






