import React from "react";
import { Link } from "react-router-dom";
import Data from '../Data'

export default class ActionsBar extends React.PureComponent {


  render() {
    const { context } = this.props;

    

    console.log(context);
    const authUser = context.authenticatedUser
    return (
      <div className="actions--bar">
        <div className="bounds">
          <div className="grid-100">
            {authUser && authUser.userId === this.props.userId ? (
              <React.Fragment>
                <span>
                  <Link className="button" to={`/courses/${this.props.id}/update`}>
                    Update Course
                  </Link>
                  <Link className="button" onClick={Data.DeleteCourse} to="/">
                    Delete Course
                  </Link>
                </span>
                <Link className="button button-secondary" to="/">
                  Return to List
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link className="button button-secondary" to="/">
                  Return to List
                </Link>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }

}
