import React  from 'react';
import {Link} from 'react-router-dom';
import Request from '../helper/request.js';
import Song from '../components/Song.js';
import SongDetails from '../components/SongDetails.js';
import SongPlayer from '../components/SongPlayer.js'

const TaskDetails = (props) => {

console.log("TaskDetails: ", props);

  const onDelete = () => {
  props.handleDelete(props.id);
}
const onEdit = () => {
  props.handleEdit(props.id)
}

  if(!props.songs){
    return null;
  }

  // if (props.songs)

  const songs = props.songs.map((song, index) => {
    // console.log("songdetails", task);
    return (      <div className="songContainer">
            <Song song = {song}/>
            <SongPlayer url = {song.url} />
            <SongDetails song = {song} id = {song.id} className="videoDetails"/>
          </div>);
    // return <li key = {song.id}>{song.title}</li>
  })


    return (
      <React.Fragment>
      Songs:
      <ul>
        {songs}
      </ul>
      <button onClick={onDelete}>Delete Task</button>
      <button onClick={onEdit}>Edit Task</button>
      </React.Fragment>


    )
}

export default TaskDetails;
