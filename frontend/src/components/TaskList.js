import React, { Component } from 'react';
import Task from './Task.js';
import Request from '../helper/request.js';
import {Link} from 'react-router-dom';

const TaskList = (props) => {
  const tasks = props.tasks.map( (task) => {
    console.log("TaskList - task :", task);
    return (
      <div key = {task.id} className = "list-item">
        <Link to = {"/tasks/" + task.id} className = "noLine">
          <Task task = {task} />
        </Link>
      </div>
    );
  })

  return (
    <div className="component-list">
      {tasks}
    </div>);
}

export default TaskList;
