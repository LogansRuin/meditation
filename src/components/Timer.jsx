import React from 'react'
import { Button, Grid, Header, Container } from 'semantic-ui-react'
import ClockFace from './ClockFace';

class Timer extends React.Component {
  state = {
    minutes: 0,
    seconds: 5,
    active: false
  }

  reduceTime = () => {
    // I need some logic that checks to see if the timer is finished or not.

    //if the seconds is equal to 0 then check if minutes 
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
    this.setState( { active: true } )
  }

  stopTimer = () => {
    clearInterval(this.timerInterval)
    this.setState( { active: false } )
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
      </>
    )
  }
}

export default Timer