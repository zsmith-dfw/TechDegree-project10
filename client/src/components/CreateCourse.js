
  import React, { Component } from 'react';


  export default class CreateCourse extends Component {
    render() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" type="text/css" />
          <link href="index.css" rel="stylesheet" />
          <title>Courses</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet" type="text/css" />
          <link href="index.css" rel="stylesheet" />
          <title>Courses</title>
          <div id="root">
            <div>
              <div className="header">
                <div className="bounds">
                  <h1 className="header--logo">Courses</h1>
                  <nav><span>Welcome Joe Smith!</span><a className="signout" href="index.html">Sign Out</a></nav>
                </div>
              </div>
              <hr />
              <div className="bounds course--detail">
                <h1>Create Course</h1>
                <div>
                  <div>
                    <h2 className="validation--errors--label">Validation errors</h2>
                    <div className="validation-errors">
                      <ul>
                        <li>Please provide a value for "Title"</li>
                        <li>Please provide a value for "Description"</li>
                      </ul>
                    </div>
                  </div>
                  <form>
                    <div className="grid-66">
                      <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." defaultValue /></div>
                        <p>By Joe Smith</p>
                      </div>
                      <div className="course--description">
                        <div><textarea id="description" name="description" className placeholder="Course description..." defaultValue={""} /></div>
                      </div>
                    </div>
                    <div className="grid-25 grid-right">
                      <div className="course--stats">
                        <ul className="course--stats--list">
                          <li className="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" defaultValue /></div>
                          </li>
                          <li className="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <div><textarea id="materialsNeeded" name="materialsNeeded" className placeholder="List materials..." defaultValue={""} /></div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="grid-100 pad-bottom"><button className="button" type="submit">Create Course</button><button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };