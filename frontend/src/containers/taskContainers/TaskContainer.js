import React, { Component } from 'react';
import TaskList from '../../components/taskComponents/TaskList.js';
import Request from '../../helper/request.js';

class TaskContainer extends Component{
  constructor(props){
    super(props)

    this.state = {tasks: []}
  }

  componentDidMount(){
   let request = new Request()
   request.get('/tasks').then((data) => {
     this.setState({tasks: data._embedded.tasks})
     console.log("TaskContainer, data: ", data._embedded.tasks);
   })
 }

 render(){
   return(
     <div className="main">
       <TaskList tasks = {this.state.tasks} />
     </div>

   );
 }
}

export default TaskContainer;
