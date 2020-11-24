import React from "react";
import ActionsBar from "./ActionsBar";
import withContext from '../Context'




const ActionsBarWithContext = withContext(ActionsBar)



const Info = (props) => (
  
  
  <div>
  <ActionsBarWithContext userId={props.userId} id={props.id}/>
    <div className="bounds course--detail">
      <div className="grid-66">
        <div className="course--header">
          <h4 className="course--label">Course</h4>
          <h3 className="course--title">{props.title}</h3>
          <p>{props.firstName} {props.lastName}</p>
        </div>
        <div className="course--description">
          <p>{props.desc}</p>
        </div>
      </div>
      <div className="grid-25 grid-right">
        <div className="course--stats">
          <ul className="course--stats--list">
            <li className="course--stats--list--item">
              <h4>Estimated Time</h4>
              <h3>{props.time}</h3>
            </li>
            <li className="course--stats--list--item">
              <h4>Materials Needed</h4>
              <ul>
                <li>{props.materials}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Info;



