import React  from 'react';
// import {Link} from 'react-router-dom';
import Request from '../helper/request.js';

const Song = (props) => {

  return (
    <React.Fragment>
      <p>title: {props.song.title}</p>
      <p>url: {props.song.url}</p>
    </React.Fragment>
  )
}

export default Song;
