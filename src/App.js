import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import CountdownPage from './Components/CountdownPage';
import { Divider } from '@mui/material';
import About from './Components/About';
import EighteenRoses from './Components/EighteenRoses';
import EighteenCandles from './Components/EighteenCandles';
import RSVPSection from './Components/RSVPSection';
import EighteenBlueBills from './Components/EighteenBlueBills';

function App() {
  return (
    <>
      <Nav/>
      <Divider style={{ backgroundColor: 'red' }}/>
      <Home/>
      <Divider style={{ backgroundColor: 'red' }}/>
      <CountdownPage/>
      <Divider style={{ backgroundColor: 'red' }}/>
      <About/>
      <RSVPSection/>
      <EighteenRoses/>
      <EighteenCandles/>
      <EighteenBlueBills/>
    </>
  );
}

export default App;
