import React, { Component } from 'react';
import Course from './Course'
import apiBaseUrl from '../config';
import axios from "axios";

export default class Courses extends Component() {
  constructor() {

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
      // this.setState({
      //   courses: response.data.courses
      // })
      console.log(response)
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }
  render(props) {
    console.log(this.state.courses)
  const results = props.data;
  console.log(results)
  let courses;
  if(results.length > 0) {
    courses = results.map((course) => {
      const courseName = `http://localhost:5000/api/courses:id`;
      return <Course url={courseName} key={course.id} />
    })
  }

  return (
    <div>
      {courses}
    </div>
  )
}
}
