import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { Divider, Box } from '@mui/material';
import About from './Components/About';
import EighteenRoses from './Components/EighteenSection/EighteenRoses';
import EighteenCandles from './Components/EighteenSection/EighteenCandles';
import RSVPSection from './Components/RSVPSection';
import EighteenBlueBills from './Components/EighteenSection/EighteenBlueBills';
import EighteenTreasure from './Components/EighteenSection/EighteenTreasure';
import EventDetails from './Components/EventDetails';
import Footer from './Components/Footer';
import EighteenShots from './Components/EighteenSection/EighteenShots';

const MainContent = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const rsvpRef = useRef(null);
  const rosesRef = useRef(null);
  const candlesRef = useRef(null);
  const blueBillsRef = useRef(null);
  const treasureRef = useRef(null);
  const shotsRef = useRef(null);
  const eventDetailsRef = useRef(null);

  const scrollToSection = (ref) => {
    const element = ref.current;
    const yOffset = -64;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleNavClick = (section) => {
    const refMap = {
      home: homeRef,
      about: aboutRef,
      rsvp: rsvpRef,
      roses: rosesRef,
      candles: candlesRef,
      blueBills: blueBillsRef,
      treasure: treasureRef,
      shots: shotsRef,
      eventDetails: eventDetailsRef
    };

    if (refMap[section]) {
      scrollToSection(refMap[section]);
    }
  };

  return (
    <>
      <Nav onNavClick={handleNavClick} />
      <Box component="main" sx={{ flexGrow: 1, p: 0, mt: 0 }}>
        <Divider style={{ backgroundColor: 'red' }} />
        <div ref={homeRef}><Home /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={eventDetailsRef}><EventDetails /></div>
        <div ref={rosesRef}><EighteenRoses /></div>
        <div ref={candlesRef}><EighteenCandles /></div>
        <div ref={blueBillsRef}><EighteenBlueBills /></div>
        <div ref={treasureRef}><EighteenTreasure /></div>
        <div ref={shotsRef}><EighteenShots /></div>
        <div ref={rsvpRef}><RSVPSection onSubmit={() => scrollToSection(rsvpRef)} /></div>
      </Box>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0' }}>
      <Router basename="/invitation">
        <MainContent />
      </Router>
    </Box>
  );
};

export default App;
