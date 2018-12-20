import React  from 'react';
import {Link} from 'react-router-dom';
import Request from '../../helper/request.js';
import Task from '../taskComponents/Task.js';

const Song = (props) => {
  if(!props.song){
  return null;
}

  console.log("Song props", props);

  return (
    <React.Fragment>
      <div className="songDetails">
        <div className="black title">{props.song.title}</div>
        {/* <div className="black">url: {props.song.url}</div> */}
      </div>
    </React.Fragment>
  )
}

export default Song;
