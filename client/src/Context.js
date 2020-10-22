import React, { Component } from 'react';
import Data from './Data'
import Cookies from 'js-cookie';
// import Courses from './components/Courses'


const Context = React.createContext(); 

export class Provider extends Component {

  state = {
    authenticatedUser:  Cookies.getJSON('authenticatedUser') || null
  }

  constructor() {
    super();
    this.data = new Data();
    // this.courses = new Courses();
  }

  render() {
    const { authenticatedUser } = this.state;
    // const { courses } = this.state

    const value = {
      authenticatedUser,
      // courses,
      // courses: this.courses,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut
       }
    };

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>  
    );
  }

  // getCourses = async() => {
  //   const courses = await this.courses.
  // }

  
  signIn = async (emailAddress, password) => {
    const user = await this.data.getUser(emailAddress, password);
    if (user !== null) {
      user.password = password;
      this.setState(() => {
        return {
          authenticatedUser: user
        }
      })
      Cookies.set('authenticatedUser', JSON.stringify(user), { expires:1 });
     
    }
    return user;

  }

  signOut = () => {
    this.setState(() => {
      return {
        authenticatedUser: null,
      };
    });
    Cookies.remove('authenticatedUser');
  }
}

export const Consumer = Context.Consumer;

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}

