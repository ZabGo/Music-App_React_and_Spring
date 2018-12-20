import React, {Component} from 'react';

class TaskEditForm extends Component{

constructor(props){
  // console.log("SongEditForm: ", props);
  super(props);

  this.state = {
    name: props.task.name,
    time: props.task.time,
    content: props.task.content,
    songsOptions: props.songs,
    isChecked: false
  }

  this.isChecked = false;
  this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

checkIfSongAlreadyAddedToTask(task){
  console.log("TaskEditForm - props:",task);
  if(task != null){
    return true;
  }
  return false;
}

handleCheckboxChange(){
  this.setState({isChecked: !this.state.isChecked});
}

componentWillReceiveProps(props) {
  console.log(props);
}

handleSubmit(event){

console.log("event:", event);
  // console.log("this.state", this.state);
  event.preventDefault();
  const task = {

    "name": this.state.name,
    "time":   this.state.time,
    "content":   this.state.content,
    "songs": [...this.state.songsOptions].filter((song) => {
          return this.checkIfSongAlreadyAddedToTask(song.tasks)
        }).map((song) => {
          console.log("TaskEditForm task id:", song.tasks);
          return song.value
        })
      }
      this.props.handleTaskEdit(task);

  }

  render(){
    const isChecked = false;
    if(!this.state.name){
        return null;
    }
    const songsOptions = this.props.songs.map((song, index) => {
      // console.log("event in render", song.tasks.name);
      // return <option key = {index}
      //   value = {song._links.self.href}>{song.title}</option>
    return(
      <div className="list-item">
        <input key={index} id={song.title} type="checkbox" value={song._links.self.href} placeholder = "songs" name="songs" onChange={this.handleCheckboxChange}/>
        <label htmlFor={song.title}>{song.title}</label>
      </div>);
    })

    return (
      <div>
  <form onSubmit={this.handleSubmit}>
    <input type="text" value = {this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })}/>

    <input type="text" value = {this.state.time} name="time" onChange={e => this.setState({ time: e.target.value })}/>

    <input type="text" value = {this.state.content} name="content" onChange={e => this.setState({ content: e.target.value })}/>
    {/* <select multiple name="songs" onChange={e => this.setState({songsOptions: e.target.options})} className="selectForm" >
      {songsOptions}
    </select> */}
    <div multiple name="songs" className="selectForm">
      {songsOptions}
    </div>
    <button type="submit">Save</button>
  </form>
</div>
    );

  }





}



export default TaskEditForm;
