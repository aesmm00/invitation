import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { Divider, Typography, Box, CircularProgress } from '@mui/material';
import About from './Components/About';
import EighteenRoses from './Components/EighteenSection/EighteenRoses';
import EighteenCandles from './Components/EighteenSection/EighteenCandles';
import RSVPSection from './Components/RSVPSection';
import EighteenBlueBills from './Components/EighteenSection/EighteenBlueBills';
import EighteenTreasure from './Components/EighteenSection/EighteenTreasure';
import EventDetails from './Components/EventDetails';
import Footer from './Components/Footer';
import { verifyCode } from './redux/user/actions';
import { selectCodeVerified, selectLoading, selectError } from './redux/user/selectors';
import EighteenShots from 'Components/EighteenSection/EighteenShots';

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

const ProtectedRoute = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const codeVerified = useSelector(selectCodeVerified);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const verifyInvitationCode = async () => {
      if (code) {
        try {
          await dispatch(verifyCode(code)).unwrap();
        } catch (error) {
          console.error('Failed to verify code:', error);
          navigate('/');
        }
      } else {
        navigate('/');
      }
    };

    verifyInvitationCode();
  }, [code, dispatch, navigate]);

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        backgroundColor: '#000000'
      }}>
        <CircularProgress sx={{ color: '#B22222' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: 2
      }}>
        <Typography variant="h5">
          Invalid invitation code. Please check your invitation for the correct URL.
        </Typography>
      </Box>
    );
  }

  return codeVerified ? <MainContent /> : null;
};

const App = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0' }}>
      <Router basename="/invitation">
        <Routes>
          <Route path="/" element={
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              minHeight: '100vh',
              backgroundColor: '#000000',
              color: '#FFFFFF',
              textAlign: 'center',
              padding: 2
            }}>
              <Typography variant="h5">
                Please use the URL provided in your invitation to access the website.
              </Typography>
            </Box>
          } />
          <Route path="/:code" element={<ProtectedRoute />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
