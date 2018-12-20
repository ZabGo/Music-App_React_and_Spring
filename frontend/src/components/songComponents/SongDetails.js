import React  from 'react';
import {Link} from 'react-router-dom';
import Request from '../../helper/request.js';

const SongDetails = (props) => {


  const onDelete = () => {
  props.handleDelete(props.id);
}

const onEdit = () => {
  props.handleEdit(props.id)
}

if(!props.tasks){
  return null;
}

const tasks = props.tasks.map((task, index) => {
  console.log("songdetails", task);
  return <div key = {task.id}>{task.name}</div>
})

  return (
    <React.Fragment>

        <div className="song-task">Tasks: {tasks} </div>
        <button onClick={onDelete} className="button-delete">Delete Song</button>
        <button onClick={onEdit} className="button-edit">Edit Song</button>

    </React.Fragment>


  )
}

export default SongDetails;
