import React from "react";

const Info = (props) => (
  <div>
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">
          <span>
            <a className="button" href="update-course.html">
              Update Course
            </a>
            <a className="button" href="#">
              Delete Course
            </a>
          </span>
          <a className="button button-secondary" href="index.html">
            Return to List
          </a>
        </div>
      </div>
    </div>
    <div className="bounds course--detail">
      <div className="grid-66">
        <div className="course--header">
          <h4 className="course--label">Course</h4>
          <h3 className="course--title">{props.title}</h3>
          <p>{props.User}</p>
        </div>
        <div className="course--description">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="grid-25 grid-right">
        <div className="course--stats">
          <ul className="course--stats--list">
            <li className="course--stats--list--item">
              <h4>Estimated Time</h4>
              <h3>{props.estimatedTime}</h3>
            </li>
            <li className="course--stats--list--item">
              <h4>Materials Needed</h4>
              <ul>
                <li>{props.materialsNeeded}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Info;
