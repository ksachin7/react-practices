import React from 'react'
import './styles/App.css'
import TypoGraphy from './components/Typography';
import Button from './components/Button';
import AppContainer from './components/AppContainer';
import GlobalStyles from './styles/GlobalStyles';
import { Card, CardContent, CardHeader } from './components/Card'
import ButtonGroup from './components/ButtonGroup';

function App() {

  return (
    <AppContainer>
      <GlobalStyles />
      <TypoGraphy variant='h1' component=''>UI Components</TypoGraphy>
      <Card>
        <CardHeader title='Buttons & ButtonGroup' />
        <CardContent>
          <ButtonGroup>
            <Button variant='outlined' size='sm' color='info'>sm-outlined</Button>
            <Button size='md' color='warning'>md-button</Button>
            <Button size='lg'>lg-button</Button>
            <Button color='danger' uppercase>uppercase</Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </AppContainer>
  )
}

export default App
