import React, { Component } from 'react';
import SongList from '../components/SongList.js';
import Request from '../helper/request.js';
import ReactPlayer from 'react-player'

class SongContainer extends Component{

  constructor(props){
    super(props);
    this.state = {songs: []};
 }

 componentDidMount(){
  let request = new Request();
  request.get('/songs').then((data) => {
    console.log("SongContainer, data: ", data);
    this.setState({songs: data._embedded.songs});
  })
}

 render(){
   console.log("songs: ", this.state.songs);
   const {playing, volume} = this.state
   return(
     <div className="main">
       <SongList songs = {this.state.songs}/>
     </div>

   );
 }

}

export default SongContainer;
