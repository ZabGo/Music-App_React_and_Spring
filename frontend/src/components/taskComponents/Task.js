import React  from 'react';
import {Link} from 'react-router-dom';
import Request from '../../helper/request.js';


const Task = (props) => {
//   if(!props.task){
//   return null;
// }
console.log("Task", props);
console.log("Task  id ", props.task.id);
  return (
    <React.Fragment>
      {/* <div className="songDetails"> */}
        <div className="task-title"> {props.task.name}</div>
        <div className="task-time">Time: {props.task.time} minutes</div>
      {/* </div> */}
    </React.Fragment>
  );
}

export default Task;
