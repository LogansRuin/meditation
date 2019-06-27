import React from 'react'
import { Button, Grid, Header } from 'semantic-ui-react'

class Timer extends React.Component {
  state = {
    minutes: 9,
    seconds: 59
  }

  reduceSeconds = () => {
    const seconds = this.state.seconds - 1
    this.setState(
      { seconds }
    )
  }

  render () {
    return (
      <>
        <p>{this.state.minutes}:{this.state.seconds}</p>
        <Button inverted secondary fluid onClick = {this.reduceSeconds}>Start</Button>
        <Grid columns = {2}>
          <Grid.Column>
            <Header as = "h2">Start</Header>
            <Button inverted secondary icon="bell"/>
          </Grid.Column>
          <Grid.Column>
            <Header as = "h2">End</Header>
            <Button inverted secondary icon="bell"/>
          </Grid.Column>
        </Grid>
      </>
    )
  }

  componentDidMount () {

  }

  componentWillUnmount(){

  }
}

export default Timer