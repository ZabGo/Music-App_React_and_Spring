import React, {Component, Fragment}  from 'react';
import Request from '../../helper/request.js';

class TaskForm extends Component{
  constructor(props){
    super(props);
    this.state ={
      isChecked: false
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheckboxChange(){
    this.setState({isChecked: !this.state.isChecked});
  }


   handleSubmit(event){
    console.log("SongForm event.target.name.value: ", event.target.name.value);
    event.preventDefault();
    const task = {
      "name": event.target.name.value,
      "time": event.target.time.value,
      "content": event.target.content.value,
      "songs": [...event.target.songs].filter((song) => {
          return song.checked
        }).map((song) => {
          return song.value;
        })

    }

    this.props.handleTaskPost(task);
  }

  render(){
    // const songsOptions = props.songs.map((song, index) => {
    //   return (
    //     <div className="song-item">
    //       <input key={index} id={song.title} type="checkbox" value={song._links.self.href} />
    //       <label for={song.title}>{song.title}</label>
    //     </div>);
    //   })
      const songsOptions = this.props.songs.map((song, index) => {
        // console.log("taskOptions - task", task);
        return(
          <div className="list-item">
            <input key={index} id={song.title} type="checkbox" value={song._links.self.href} placeholder = "songs" name="songs" onChange={this.handleCheckboxChange} />
            <label htmlFor={song.title}>{song.title}</label>
          </div>);
        });
  return (
    <Fragment>
      <h1 className="title">Add a Task</h1>
      <form onSubmit = {this.handleSubmit} className="add-song">
        <input type = "text" placeholder = "name" name = "name" className="title-song"/>
        <input type = "text" placeholder = "time" name = "time" className="url-song"/>
        <input type = "text" placeholder = "content" name = "content" className="content-task" />
        <div multiple name="songs" className="list">
          {songsOptions}
        </div>
        <button type = "submit" className="button-save">Save</button>
      </form>
    </Fragment>
  );
}

}

export default TaskForm;
