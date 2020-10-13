import React, { Component } from "react";
import axios from "axios";
import config from "../config";
import Info from "./Info";

export default class CourseDetail extends Component {
  constructor() {
    super();

    this.state = {
      courseInfo: [],
    };
  }
  componentDidMount() {
    this.returnCourseInfo();
  }

  returnCourseInfo = () => {
    axios
      .get(`${config.apiBaseUrl}/courses/`)
      .then((response) => {
        this.setState({
          courses: response.data,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };
  render() {
    // const { id } = this.props.match.params;

    const results = this.state.courses;
    let courses;
    if (results && results.length > 0) {
      courses = results.map((course) => (
        <Info
          title={course.title}
          key={course.id}
          name={course.User}
          desc={course.description}
          time={course.estimatedTime}
          materials={course.materialsNeeded}
        />
      ));
    }
    return <div>{courses}</div>;
  }
}
