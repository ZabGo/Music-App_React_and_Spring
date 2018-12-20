import React, {Component}  from 'react';
import Request from '../../helper/request.js';
import SongEditForm from '../../components/songComponents/SongEditForm.js';


class SongEditFormContainer extends Component{

  constructor(props){
    super(props);

    this.state = {
      song: null,
      tasks: null
    }

    this.handleSongEdit = this.handleSongEdit.bind(this);

  }

  componentDidMount(){
  const request = new Request();
  request.get("/songs/" + this.props.id).then((song) => {
    this.setState({song: song})
  });
  request.get("/tasks").then((tasks) => {
    this.setState({tasks: tasks._embedded.tasks})
  });
}

handleSongEdit(song){
  const request = new Request();
  request.patch('/songs/' + this.props.id, song)
  .then(() => {
    window.location = '/songs/' + this.props.id
  })
}

render(){
  console.log("SongEditFormContainer", this.state);
  if(!this.state.tasks || !this.state.song){
    return <h1>loading</h1>;
  }
  return <SongEditForm tasks = {this.state.tasks} song={this.state.song} handleSongEdit= {this.handleSongEdit} />

}



}

export default SongEditFormContainer;
