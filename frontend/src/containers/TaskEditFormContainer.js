import React, {Component}  from 'react';
import Request from '../helper/request.js';
import TaskEditForm from '../components/TaskEditForm.js';


class TaskEditFormContainer extends Component{

  constructor(props){
    super(props);

    this.state = {
      task: null,
      songs: null
    }

    this.handleTaskEdit = this.handleTaskEdit.bind(this);

  }

  componentDidMount(){
  const request = new Request();
  request.get("/tasks/" + this.props.id).then((task) => {
    this.setState({task: task})
  });
  request.get("/songs").then((songs) => {
    this.setState({songs: songs._embedded.songs})
  });
}

handleTaskEdit(task){
  const request = new Request();
  request.patch('/tasks/' + this.props.id, task)
  .then(() => {
    window.location = '/tasks/' + this.props.id
  })
}

render(){
  console.log("SongEditFormContainer", this.state);
  if(!this.state.task || !this.state.songs){
    return <h1>loading</h1>;
  }
  return <TaskEditForm songs = {this.state.songs} task={this.state.task} handleTaskEdit= {this.handleTaskEdit} />

}



}

export default TaskEditFormContainer;
