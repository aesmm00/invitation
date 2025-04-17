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

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    // Convert to Philippine Time (UTC+8)
    const phTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
    const target = new Date(targetDate);
    const difference = +target - +phTime;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <TimerItem key={interval}>
      <TimerValue>{timeLeft[interval]}</TimerValue>
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
