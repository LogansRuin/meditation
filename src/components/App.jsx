import React from 'react'
import '../App.css'
import AppHeader from './AppHeader';
import { Container, Divider, Button, Grid, Header } from 'semantic-ui-react';

class App extends React.Component {
  render () {
    return (
      <Container text textAlign="center">
        <AppHeader/>
        <Divider/>
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
      </Container>
    )
  }
}

export default App;
