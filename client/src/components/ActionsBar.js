import React from 'react';
import { Link } from 'react-router-dom';

export default class ActionsBar extends React.PureComponent {
  render() {
    const { context } = this.props;
    console.log(context)
    const authUser = context.authenticatedUser;
    return (
        <div className="actions--bar">
        <div className="bounds">
          <div className="grid-100">
          {authUser ?
          <React.Fragment>
            <span>
              <a> <Link className="button" to="/update">
                Update Course</Link>
              </a>
              <a className="button" href="#">
                Delete Course
              </a>
            </span>
            <a>
            <Link className="button button-secondary" to="/">Return to List</Link>
            </a>
            </React.Fragment>
           :
          <React.Fragment>
          <a>
            <Link className="button button-secondary" to="/">Return to List</Link>
            </a>
          </React.Fragment> 
        }
        </div>
        </div>
      </div>
    );
  }
};







