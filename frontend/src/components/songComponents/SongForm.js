import React, {Component, Fragment}  from 'react';
import Request from '../../helper/request.js';

class SongForm extends Component{
  constructor(props){
    console.log("SongForm", props);
    super(props);
    this.state = {
      isChecked: false
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheckboxChange(){
    this.setState({isChecked: !this.state.isChecked});
  }

  handleSubmit(event){
    console.log("SongForm - event.target.tasks", event.target.tasks);
    event.preventDefault();

    const song = {
      "title": event.target.title.value,
      "url": event.target.url.value,
      "tasks": [...event.target.tasks].filter((task) => {
        console.log("SongForm - map - task", task);
        console.log("SongForm - map - task", task.value);
          return task.checked
        }).map((task) => {
          return task.value;
        })

    }
    console.log("SongForm song: ", song.tasks);
    this.props.handleSongPost(song);
  }


  // console.log("SongForm - props", props);

  render(){

    const taskOptions = this.props.tasks.map((task, index) => {
      console.log("taskOptions - task", task);
      return(
        <div className="list-item">
          <input key={index} id={task.name} type="checkbox" value={task._links.self.href} placeholder = "tasks" name="tasks" onChange={this.handleCheckboxChange} />
          <label htmlFor={task.name}>{task.name}</label>
        </div>);
      });
  return (
    <Fragment>
      <h1 className="title">Add a Song</h1>
      <form onSubmit = {this.handleSubmit} className="add-song">
        {/* <div className="form"> */}
        <input type = "text" placeholder = "title" name = "title" className="title-song"/>
        <input type = "text" placeholder = "url" name = "url" className="url-song"/>
        <div className="list">
          {taskOptions}
        </div>
        <button type = "submit" className="button-save">Save</button>
      {/* </div> */}
      </form>
    </Fragment>

  );
}
}

export default SongForm;
