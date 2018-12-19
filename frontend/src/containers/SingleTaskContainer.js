import React, {Component}  from 'react';
import Task from '../components/Task.js';
import Request from '../helper/request.js';
// import SongList from '../components/SongList.js';
import SongContainer from './SongContainer.js';
import TaskDetails from '../components/TaskDetails.js';

class SingleTaskContainer extends Component{

  constructor(props){
    super(props);

    this.state = {task: null}

    this.handleDelete = this.handleDelete.bind(this);

    this.handleEdit = this.handleEdit.bind(this)
    console.log("this.state SingleTaskContainer", this.state);
  }

  componentDidMount(){

    let request = new Request()
    const url = '/tasks/' + this.props.id;
    console.log("url componentDidMount", url);
    request.get(url).then((data) => {
      this.setState({task: data});
    })
  }
  handleDelete(id){
    console.log("id delete task", id);
  const request = new Request();
  const url = '/tasks/' + id;
  request.delete(url).then(() => {
    window.location = '/tasks'
  })
}

handleEdit(id){
  window.location = '/tasks/task/edit/' + id
}






  render(){
    if(!this.state.task){
  return null;
}

let songs = []
if (this.state.task._embedded) {
  songs = this.state.task._embedded.songs;
}

  console.log("SingleTaskContainer: ", this.state);
    return (
      <div>

        <Task task = {this.state.task}/>
        <TaskDetails task = {this.state.task} id ={this.props.id} songs={songs} handleEdit = {this.handleEdit} handleDelete = {this.handleDelete}/>


    </div>

  );
  }

}

export default SingleTaskContainer;
