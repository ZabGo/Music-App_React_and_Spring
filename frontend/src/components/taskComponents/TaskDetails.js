import React  from 'react';
import {Link} from 'react-router-dom';
import Request from '../../helper/request.js';
import Song from '../songComponents/Song.js';
import SongDetails from '../songComponents/SongDetails.js';
import SongPlayer from '../SongPlayer.js'

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



  const songs = props.songs.map((song, index) => {
    // console.log("songdetails", task);
    return (
      <div className="songContainer">
        <Song song = {song}/>
        <SongPlayer url = {song.url} />
        <SongDetails song = {song} id = {song.id} className="videoDetails"/>
      </div>);
  })


    return (
      <React.Fragment>
      <div className="Songs">
        {songs}
      </div>
      <button onClick={onDelete} className="button-delete">Delete Task</button>
      <button onClick={onEdit} className="button-edit">Edit Task</button>
      </React.Fragment>


    )
}

export default TaskDetails;
