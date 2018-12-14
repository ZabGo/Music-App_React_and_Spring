import React, { Component } from 'react';
import Song from './Song.js';
import Request from '../helper/request.js';

const SongList = (props) => {
	const songs = props.songs.map((song) => {
		 	return (
				<li key={song.id} className="song-item">
					<div className = "component">
				<Song song={song} />
			</div>
			</li>
		)
		})

	return (
		<ul className="component-list">
	    {songs}
	  </ul>

	)
}
 export default SongList;
