import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Countdown from 'react-countdown';
import './flipCountdown.css'; // Import the CSS for flip effect

// Countdown renderer
const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Box display="flex" justifyContent="center" fontSize="32px" fontFamily="DecomangHold" letterSpacing={2}>
        <Box className="flip-clock" mx={1}><div className="flip-card"><div className="flip-card-inner"><div className="flip-card-front">{days}</div><div className="flip-card-back">{days}</div></div></div>d</Box>
        <Box className="flip-clock" mx={1}><div className="flip-card"><div className="flip-card-inner"><div className="flip-card-front">{hours}</div><div className="flip-card-back">{hours}</div></div></div>h</Box>
        <Box className="flip-clock" mx={1}><div className="flip-card"><div className="flip-card-inner"><div className="flip-card-front">{minutes}</div><div className="flip-card-back">{minutes}</div></div></div>m</Box>
        <Box className="flip-clock" mx={1}><div className="flip-card"><div className="flip-card-inner"><div className="flip-card-front">{seconds}</div><div className="flip-card-back">{seconds}</div></div></div>s</Box>
      </Box>
    );
  };

const CountdownPage = () => {

    return (
        <Container style={{ textAlign: 'center', padding: '30px 30px', color: '#CF0A0A', backgroundColor: '#EEEEEE'}} maxWidth="2xl">
            <Typography variant="h3" component="h1" gutterBottom fontFamily={'"DecomangHold"'} letterSpacing={2}>
                Countdown to Debut
            </Typography>
            <Countdown date={new Date('2025-09-23T00:00:00')} renderer={renderer} />
        </Container>
    );
};

export default CountdownPage;
