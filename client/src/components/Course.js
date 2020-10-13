import React from "react";
import { Link } from "react-router-dom";

const Course = (props) => (
  <div className="grid-33">
    <Link className="course--module course--link" to="/courses/:id">
    {/* <Link to="/courses?sort=id" /> */}
      <h4 className="course--label">Course</h4>
      <h3 className="course--title">{props.title}</h3>
    </Link>
  </div>
);
export default Course;
