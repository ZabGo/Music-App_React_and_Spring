import React, {Component} from 'react';

class SongEditForm extends Component{

constructor(props){
  console.log("SongEditForm: ", props);
  super(props);

  this.state = {
    title: props.song.title,
    url: props.song.url,
    tasksOptions: props.tasks
  }

  this.handleSubmit = this.handleSubmit.bind(this);
}

componentWillReceiveProps(props) {
  console.log(props);
}

handleSubmit(event){

  console.log("this.state", this.state);
  event.preventDefault();
  const song = {

    "title": this.state.title,
    "url":   this.state.url,
    "tasks": [...this.state.tasksOptions].filter((option) => {
          return option.selected
        }).map((option) => {
          return option.value
        })
      }
      this.props.handleSongEdit(song);

  }

  render(){
    if(!this.state.title){
        return null;
    }
    const tasksOptions = this.props.tasks.map((task, index) => {
      return <option key = {index}
        value = {task._links.self.href}>{task.name}</option>
    })

    return (
      <div>
  <form onSubmit={this.handleSubmit}>
    <input type="text" value = {this.state.title} name="title" onChange={e => this.setState({ title: e.target.value })}/>
    <input type="text" value = {this.state.url} name="url" onChange={e => this.setState({ url: e.target.value })}/>
    <select multiple name="tasks" onChange={e => this.setState({tasksOptions: e.target.options})} >
      {tasksOptions}
    </select>
    <button type="submit">Save</button>
  </form>
</div>
    );

  }





}



export default SongEditForm;
