import React, {Component}  from 'react';
import {Link} from 'react-router-dom';
import Request from '../helper/request.js';
import ReactPlayer from 'react-player';


class SongPlayer extends Component {
  constructor(props){
    console.log("SongPlayer", props);
    super(props);

    this.state = {
      url: null,
      pip: false,
      playing: false,
      volume: 0.8,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false
    }
  }

  load = () => {
    this.setState({
      url: this.props.url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  playPause = () => {
  this.setState({ playing: !this.state.playing })
  }

  pip = () => {
    this.setState({ pip: !this.state.pip })
  }

  stop = () => {
   this.setState({ url: null, playing: false })
  }
  onPause = () => {
  console.log('onPause')
  this.setState({ playing: false })
  }

  onSeekMouseDown = e => {
  this.setState({ seeking: true })
}
onSeekChange = e => {
  this.setState({ played: parseFloat(e.target.value) })
}
onSeekMouseUp = e => {
  this.setState({ seeking: false })
  this.player.seekTo(parseFloat(e.target.value))
}
ref = player => {
   this.player = player
 }


  render(){
//     if(!this.state.url){
//   return null;
// }

    const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate, pip } = this.state
    return (
      <div   className="video-player">
      <ReactPlayer

        ref={this.ref}
        className='react-player'
        width='100%'
        height='100%'
        url={this.props.url}
        pip={pip}
        playing={playing}
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={muted}
        onReady={() => console.log('onReady')}
        onStart={() => console.log('onStart')}
        onPlay={this.onPlay}
        onEnablePIP={this.onEnablePIP}
        onDisablePIP={this.onDisablePIP}
        onPause={this.onPause}
        onBuffer={() => console.log('onBuffer')}
        onSeek={e => console.log('onSeek', e)}
        onEnded={this.onEnded}
        onError={e => console.log('onError', e)}
        onProgress={this.onProgress}
        onDuration={this.onDuration}

      />
      <div className="buttons">
      <button onClick={this.stop} >Stop</button>
      <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
      <input
          type='range' min={0} max={1} step='any'
          value={played}
          onMouseDown={this.onSeekMouseDown}
          onChange={this.onSeekChange}
          onMouseUp={this.onSeekMouseUp}
          className="playedbutton"
        />
      </div>
    </div>

    );
  }
}




export default SongPlayer;
