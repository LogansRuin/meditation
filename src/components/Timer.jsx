import React from 'react'
import { Button, Grid, Header } from 'semantic-ui-react'

class Timer extends React.Component {
  render () {
    return (
      <>
        <p>10:00</p>
        <Button inverted secondary fluid>Start</Button>
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
}

export default Timer