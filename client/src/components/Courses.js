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
        courses: response.data
      })
      console.log(response)
      // console.log(title)
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }
  render() {
    // console.log(this.state.courses)
  const results = this.state.courses
  // console.log(results)
  let courses;
  if(results && results.length > 0) {
    courses = results.map(course => 

       <Course title={course.title}
               key={course.id} />)
    }
    console.log(courses)
    return (
      <div className ='bounds'>

        {courses}

      </div>
    )
  }


}
