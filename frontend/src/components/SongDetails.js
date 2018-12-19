import React  from 'react';
import {Link} from 'react-router-dom';
import Request from '../helper/request.js';

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
      <div className="videoDetails">
        <div>tasks: {tasks} </div>
        <div><button onClick={onDelete} className="buttondelete">Delete Song</button></div>
        <div><button onClick={onEdit} className="buttonEdit">Edit Song</button></div>
      </div>
    </React.Fragment>


  )
}

export default SongDetails;
