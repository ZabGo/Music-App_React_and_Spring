import React, {Component}  from 'react';
import Request from '../helper/request.js';

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
        console.log("SongForm - map - task", song);
        console.log("SongForm - map - task", song.checked);
          return song.checked
        }).map((song) => {
          console.log("SongForm - map - task", song);
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
    <div >
      <form onSubmit = {this.handleSubmit} className="TaskFormContainer">
        <input type = "text" placeholder = "name" name = "name" className="name grey"/>
        <input type = "text" placeholder = "time" name = "time" className="time grey"/>
        <input type = "text" placeholder = "content" name = "content" className="contentText" />
        <div multiple name="songs" className="selectForm">
          {songsOptions}
        </div>
        <button type = "submit" className="save">Save</button>
      </form>
    </div>
  );
}

}

export default TaskForm;
