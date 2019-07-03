import React from 'react'
import { Button, Grid, Header, Container } from 'semantic-ui-react'
import ClockFace from './ClockFace';
import Chime from './Chime';


class Timer extends React.Component {
  state = {
    minutes: 10,
    seconds: 0,
    active: false,
    playStatus: 'STOPPED'
  }
  reduceTime = () => {
    // I need some logic that checks to see if the timer is finished or not.
    let minutes = this.state.minutes
    let seconds = this.state.seconds
    
    if ( seconds === 0 && minutes === 0 ) {
      this.stopTimer()
    } else if ( seconds === 0 && minutes > 0 ) {
      minutes --
      seconds = 59
      this.setState( { minutes, seconds } )
    } else {
      seconds --
      this.setState( { seconds } )
    }
  }

  startTimer = () => {
    this.timerInterval = setInterval(this.reduceTime, 1000)
    this.setState( { active: true, playStatus: 'PLAYING' } )
  }

  stopTimer = () => {
    clearInterval(this.timerInterval)
    this.setState( { active: false, playStatus: 'STOPPED', minutes: 10, seconds: 0} )
  }

  handleSongFinishedPlaying  = () => {
    this.setState( {playStatus: 'STOPPED'} )
  }

  render () {
    return (
      <>
        <ClockFace minutes = {this.state.minutes} seconds = {this.state.seconds} microSeconds = {this.state.microSeconds}/>
        <Container>
          <Grid columns = {2}>
            <Grid.Row>
              <Grid.Column>
                <Button inverted secondary fluid onClick = {this.startTimer}>Start</Button>
              </Grid.Column>
              <Grid.Column>
                <Button inverted secondary fluid onClick = {this.stopTimer}>Stop</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as = "h2">Start</Header>
                <Button inverted secondary icon="bell"/>
              </Grid.Column>
              <Grid.Column>
                <Header as = "h2">End</Header>
                <Button inverted secondary icon="bell"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Chime playStatus={this.state.playStatus} handleSongFinishedPlaying={this.handleSongFinishedPlaying}/>
      </>
    )
  }
}

export default Timer