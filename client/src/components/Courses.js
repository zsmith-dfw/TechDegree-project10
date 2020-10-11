import React, { Component } from 'react';
import Course from './Course'
import config from '../config';
import axios from "axios";

export default class Courses extends Component {
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
    axios.get(`${config.apiBaseUrl}/courses`)
    .then(response => {
      this.setState({
        title: response.data.data
      })
      console.log(response)
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }
  render() {
    console.log(this.state.courses)
  const results = this.state
  console.log(results)
  let courses;
  if(results && results.length > 0) {
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

