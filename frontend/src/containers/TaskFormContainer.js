import React, {Component}  from 'react';
import TaskForm from '../components/TaskForm.js';
import Request from '../helper/request.js';

class TaskFormContainer extends Component {

  constructor(props){
    super(props);
    this.state = {songs: []};
    this.handleTaskPost = this.handleTaskPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/songs").then((data) => {
      this.setState({songs: data._embedded.songs})
    });
  }


  handleTaskPost(task, taskId){
    const request = new Request();
    request.post('/tasks', task)
    // .then(() => {
    //   window.location = '/tasks'
    // })
  }

  render(){
    if (!this.state.songs) {
      return null;
    }
    return(
      <div className="main">
        <TaskForm songs ={this.state.songs} handleTaskPost={this.handleTaskPost}/>
      </div>
    );
  }

}

export default TaskFormContainer;
