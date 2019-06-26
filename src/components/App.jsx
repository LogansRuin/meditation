import React from 'react'
import '../App.css'
import AppHeader from './AppHeader';
import { Container, Divider } from 'semantic-ui-react';
import Timer from './Timer';

class App extends React.Component {
  render () {
    return (
      <Container text textAlign="center">
        <AppHeader/>
        <Divider/>
        <Timer/>
      </Container>
    )
  }
}

export default App;
