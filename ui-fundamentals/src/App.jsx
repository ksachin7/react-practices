import React from 'react'
import { AppGridContainer, Accordian, Button, Card, CardContent, CardHeader, ButtonsGroup, Spinner, Typography } from './components';
import GlobalStyles from './styles/GlobalStyles';
import Select from './components/Select';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleSelectChange = (value) => {
    console.log('Selected value:', value);
  };

  return (
    <>
      <GlobalStyles />
      <Navbar logo='/react.svg' title='Navbar Title'><DarkModeToggle /></Navbar>
      <Typography className='py-1' variant='h1'>UI Components</Typography>
      <AppGridContainer>
        <Card>
          <CardHeader title='Buttons & ButtonGroup' />
          <CardContent>
            <ButtonsGroup>
              <Button variant='outlined' size='sm'>sm-outlined</Button>
              <Button variant='outlined' size='md' color='secondary'>md-outlined</Button>
            </ButtonsGroup>
            <ButtonsGroup>
              <Button size='md' color='warning'>md-button</Button>
              <Button color='danger' uppercase>uppercase</Button>
            </ButtonsGroup>
            <Button size='lg' color='success'>lg-button</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title='Accordian' />
          <CardContent>
            <Accordian title='Default accordian' subtitle='Some extra text'>Accordian texts</Accordian>
            <Accordian title='No gutter space Accordian title' disableGutters>Accordian texts</Accordian>
            <Accordian title='Custom color Accordian title' color='lightGreen'>Accordian texts</Accordian>
            <Accordian title='Disabled accordian title' disabled>Accordian texts</Accordian>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title='Select' />
          <CardContent>
            <Select options={options} width='100%' onChange={handleSelectChange} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader title='Spinners' />
          <CardContent>
            <Spinner type='thin' />
            <Spinner size={50} color='lightBlue' />
            <Spinner size={60} color='lightGreen' />
            <Spinner size={70} />
          </CardContent>
        </Card>
      </AppGridContainer>
    </>
  )
}

export default App
