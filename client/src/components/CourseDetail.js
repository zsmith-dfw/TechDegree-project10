import React, { Component } from "react";
import axios from "axios";
import config from "../config";
import Info from "./Info";

export default class CourseDetail extends Component {
  constructor() {
    super();

    this.state = {
      courseInfo: [
        
      ],
    };
  }
  componentDidMount() {
    this.returnCourseInfo();
  }

  returnCourseInfo = () => {
    const { match: { params} } = this.props
    axios
      .get(`${config.apiBaseUrl}/courses/${params.id}`)
      .then((response) => {
        this.setState({
          course: response.data,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
      console.log(this.props)
  };
  render() {

    const results = this.state.course;
    let courses;
    if (results) {
  return (
        <Info
          title={results.title}
          key={results.id}
          firstName={results.User.firstName}
          lastName={results.User.lastName}
          desc={results.description}
          time={results.estimatedTime}
          materials={results.materialsNeeded}
        />
        )
    }
    return <div>{courses}</div>;
  }
}
