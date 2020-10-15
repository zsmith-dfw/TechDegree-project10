import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent {
  render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav>
          {authUser ?
          <React.Fragment>
            <span>Welcome, {authUser.firstName}</span>
            <Link className="signout" to="/signout">Sign Out</Link>
          </React.Fragment>

         :
            <React.Fragment>
              <Link className="signup" to="/signup">Sign Up</Link>
              <Link className="signin" to="/signin">Sign In</Link>
            </React.Fragment>
          }
          </nav>
        </div>
      </div>
    );
  }
};


// <div className="header">
// <div className="bounds">
//   <h1 className="header--logo">Courses</h1>
//   <nav><a className="signup" href="sign-up.html">Sign Up</a><a className="signin" href="sign-in.html">Sign In</a></nav>
// </div>
// </div>



