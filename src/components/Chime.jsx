import React from 'react'
import Sound from 'react-sound'
import soundFile from '../assets/bellOutside.wav'

class Chime extends React.Component {
  render() {
    return (
      <Sound
        url={soundFile}
        playStatus={Sound.status[this.props.playStatus]}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}

export default Chime