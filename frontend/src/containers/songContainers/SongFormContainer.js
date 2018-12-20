import React, {Component}  from 'react';
import SongForm from '../../components/songComponents/SongForm.js';
import Request from '../../helper/request.js';

class SongFormContainer extends Component{


  constructor(props){
    super(props);
    this.state = {tasks: []};
    this.handleSongPost = this.handleSongPost.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get("/tasks").then((data) => {
      console.log("SongFormContainer", data);
      this.setState({tasks: data._embedded.tasks})
    });
  }

  handleSongPost(song, taskId){
    const request = new Request();
    request.post('/songs', song)
    .then(() => {
      window.location = '/songs'
    })
  }

  render(){
    if (!this.state.tasks) {
      return null;
    }
    return(
      <div className="main">
      <SongForm tasks ={this.state.tasks} handleSongPost={this.handleSongPost}/>
    </div>
    );
  }

}

export default SongFormContainer;
