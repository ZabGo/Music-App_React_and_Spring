import React  from 'react';
import {Link} from 'react-router-dom';
import Request from '../helper/request.js';


const Task = (props) => {
//   if(!props.task){
//   return null;
// }
console.log("Task", props);
console.log("Task  id ", props.task.id);
  return (
    <React.Fragment>
      <div className="black">name: {props.task.name}</div>
      <div className="black">time: {props.task.time}</div>
      <div className="black">content: {props.task.content}</div>

    </React.Fragment>
  );
}

export default Task;
