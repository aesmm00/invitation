import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const TimerContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const TimerItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: theme.spacing(0, 2),
}));

const TimerValue = styled(Typography)(({ theme }) => ({
  fontFamily: 'DechoraZone, sans-serif',
  fontSize: '3rem',
  color: '#CF0A0A',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  lineHeight: 1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const TimerLabel = styled(Typography)(({ theme }) => ({
  fontFamily: 'Decoment, sans-serif',
  fontSize: '0.8rem',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  marginTop: theme.spacing(1),
}));

const CountdownTimer = ({ targetDate = '2025-08-09T15:00:00' }) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDateObj = new Date(targetDate);

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDateObj - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timerComponents = Object.keys(countdown).map((interval) => (
    <TimerItem key={interval}>
      <TimerValue>{countdown[interval]}</TimerValue>
      <TimerLabel>{interval}</TimerLabel>
    </TimerItem>
  ));

  return (
    <TimerContainer>
      {timerComponents.length ? timerComponents : <Typography>The event has started!</Typography>}
    </TimerContainer>
  );
};

export default CountdownTimer;
