import React, { Component } from 'react';
import SongList from '../components/SongList.js';
import Request from '../helper/request.js';

class SongContainer extends Component{

  constructor(props){
    super(props);
    this.state = {songs: []}
  }

  componentDidMount(){
   let request = new Request()
   request.get('/songs').then((data) => {
     this.setState({songs: data._embedded.songs})
   })
 }

 render(){
   console.log("songs: ", this.state.songs);
   return(
   <SongList songs = {this.state.songs}/>
   );
 }

}

export default SongContainer;
