import React, { useRef } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { Divider } from '@mui/material';
import About from './Components/About';
import EighteenRoses from './Components/EighteenRoses';
import EighteenCandles from './Components/EighteenCandles';
import RSVPSection from './Components/RSVPSection';
import EighteenBlueBills from './Components/EighteenBlueBills';
import Box from '@mui/material/Box';


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const rsvpRef = useRef(null);
  const rosesRef = useRef(null);
  const candlesRef = useRef(null);
  const blueBillsRef = useRef(null);

  const handleNavClick = (section) => {
    const scrollToSection = (ref) => {
      const element = ref.current;
      const yOffset = 0;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };

    switch (section) {
      case 'home':
        scrollToSection(homeRef);
        break;
      case 'about':
        scrollToSection(aboutRef);
        break;
      case 'rsvp':
        scrollToSection(rsvpRef);
        break;
      case 'roses':
        scrollToSection(rosesRef);
        break;
      case 'candles':
        scrollToSection(candlesRef);
        break;
      case 'blueBills':
        scrollToSection(blueBillsRef);
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ backgroundColor: '#f0f0f0' }}>
      <Nav onNavClick={handleNavClick} />
      <Box component="main" sx={{ flexGrow: 1, p: 0, mt: 0 }}>
        <Divider style={{ backgroundColor: 'red' }} />
        <div ref={homeRef}><Home /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={rosesRef}><EighteenRoses /></div>
        <div ref={candlesRef}><EighteenCandles /></div>
        <div ref={blueBillsRef}><EighteenBlueBills /></div>
        <div ref={rsvpRef}><RSVPSection /></div>
      </Box>
    </Box>
  );
}

export default App;
