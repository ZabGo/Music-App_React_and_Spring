import React, {Component} from 'react';

class TaskEditForm extends Component{

constructor(props){
  console.log("SongEditForm: ", props);
  super(props);

  this.state = {
    name: props.task.name,
    time: props.task.time,
    content: props.task.content,
    songsOptions: props.songs
  }

  this.handleSubmit = this.handleSubmit.bind(this);
}

componentWillReceiveProps(props) {
  console.log(props);
}

handleSubmit(event){

  console.log("this.state", this.state);
  event.preventDefault();
  const task = {

    "name": this.state.name,
    "time":   this.state.time,
    "content":   this.state.content,
    "songs": [...this.state.songsOptions].filter((option) => {
          return option.selected
        }).map((option) => {
          return option.value
        })
      }
      this.props.handleTaskEdit(task);

  }

  render(){
    if(!this.state.name){
        return null;
    }
    const songsOptions = this.props.songs.map((song, index) => {
      return <option key = {index}
        value = {song._links.self.href}>{song.title}</option>
    })

    return (
      <div>
  <form onSubmit={this.handleSubmit}>
    <input type="text" value = {this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })}/>
    <input type="text" value = {this.state.time} name="time" onChange={e => this.setState({ time: e.target.value })}/>
    <input type="text" value = {this.state.content} name="content" onChange={e => this.setState({ content: e.target.value })}/>
    <select multiple name="songs" onChange={e => this.setState({songsOptions: e.target.options})} className="selectForm" >
      {songsOptions}
    </select>
    <button type="submit">Save</button>
  </form>
</div>
    );

  }





}



export default TaskEditForm;
