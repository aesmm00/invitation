import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import CountdownPage from './Components/CountdownPage';
import { Divider } from '@mui/material';
import About from './Components/About';

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <Divider style={{ backgroundColor: 'red' }}/>
      <CountdownPage/>
      <Divider style={{ backgroundColor: 'red' }}/>
      <About/>
    </>
  );
}

export default App;
