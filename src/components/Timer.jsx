import React from 'react'
import { Button, Grid, Header, Container } from 'semantic-ui-react'
import ClockFace from './ClockFace';

class Timer extends React.Component {
  state = {
    minutes: 9,
    seconds: 5,
    microSeconds: 59
  }

  reduceTime = () => {
    const seconds = this.state.seconds - 1
    this.setState( { seconds } )
  }

  startTimer = () => {
    this.timerInterval = setInterval(this.reduceTime, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerInterval)
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