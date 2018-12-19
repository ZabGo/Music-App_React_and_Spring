<div>
 <ReactPlayer url='https://www.youtube.com/watch?v=BjzvvD5vh_Q' playing={playing} onPlay={this.onPlay} onPause={this.onPause} />
 <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
</div>
