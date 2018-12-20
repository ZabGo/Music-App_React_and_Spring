import React, {Component}  from 'react';
import Song from '../../components/songComponents/Song.js';
import SongDetails from '../../components/songComponents/SongDetails.js';
import TaskList from '../../components/taskComponents/TaskList.js';
import Request from '../../helper/request.js';
import SongPlayer from '../../components/SongPlayer.js'



class SingleSongContainer extends Component{

  constructor(props){
    super(props);
    console.log("props constructor", this.props);

    this.state = {song: null}

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount(){

    let request = new Request()
    const url = '/songs/' + this.props.id;
    request.get(url).then((data) => {
      console.log("data componentDidMount", data);
      this.setState({song: data});
    })
  }

  handleDelete(id){
    console.log("SingleSongContainer - id: ", id);
  const request = new Request();
  const url = '/songs/' + id;
  request.delete(url)
  .then(() => {
    window.location = '/songs'
  })
}

handleEdit(id){
  window.location = '/songs/song/edit/' + id
}



  render(){
    if(!this.state.song){
        return null;
    }



    console.log("Single song in render", this.state.song);
    let tasks = []
    if (this.state.song._embedded) {
      tasks = this.state.song._embedded.tasks;
    }

    return (
      <div className="main">
        <h1 className="title">{this.state.song.title}</h1>
        <SongPlayer url = {this.state.song.url} />
        <SongDetails song = {this.state.song} id = {this.props.id} tasks={tasks} handleDelete = {this.handleDelete} handleEdit = {this.handleEdit} className="videoDetails"/>
      </div>
  );
  }

}

export default SingleSongContainer;
