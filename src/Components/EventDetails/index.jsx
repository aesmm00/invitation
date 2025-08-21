import React from 'react';
import { Box, Typography, Container, Grid, Paper, Stack } from '@mui/material';
import { styled } from '@mui/system';
import CountdownTimer from '../CountdownTimer';
import { keyframes } from '@emotion/react';
import eventDetailsLandscapeBg from '../../assets/photos/eventDetails/eventDetailsLandscapeBg.jpg';
import eventDetailsPortraitBg from '../../assets/photos/eventDetails/eventDetailsPortraitBg.jpg';
import SaveTheDateVideo from './SaveTheDateVideo';

const shimmer = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 0.8; }
  100% { opacity: 0.4; }
`;

const borderGlow = keyframes`
  0% { box-shadow: 0 0 5px #CF0A0A; }
  50% { box-shadow: 0 0 20px #CF0A0A; }
  100% { box-shadow: 0 0 5px #CF0A0A; }
`;

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  color: '#CF0A0A',
  position: 'relative',
  backgroundImage: `url(${eventDetailsLandscapeBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  [theme.breakpoints.down('sm')]: {
    backgroundImage: `url(${eventDetailsPortraitBg})`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  }
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'rgba(26, 26, 26, 0.7)',
  border: '1px solid #CF0A0A',
  animation: `${borderGlow} 3s infinite`,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontFamily: '"DechoraZone", sans-serif',
  color: '#CF0A0A',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '0',
    width: '40px',
    height: '2px',
    background: '#CF0A0A',
    animation: `${shimmer} 3s infinite`,
  }
}));

const StyledBodyTypography = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  marginBottom: theme.spacing(1),
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#FF1E1E',
  },
  letterSpacing: 2,
}));

const DecorativeCircle = styled('div')(({ size = 50, color}) => ({
  width: `${size}px`,
  height: `${size}px`,
  backgroundColor: color,
  borderRadius: '50%',
  lineHeight: '1',
  marginLeft: '-25px', // Half of the circle size for overlap
  '&:first-of-type': {
    marginLeft: 0,
  },
  boxShadow: '0 0 0 1px #670d2f', // White border for better separation
}));

const GatsbyTitle = styled(Typography)`
  position: relative;
  padding: 20px 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(to right, transparent, #CF0A0A, transparent);
  }
`;

const EventDetails = ({ showSaveTheDateVideo = false }) => {

  return (
    <StyledBox>
      <Container maxWidth="2xl">

        <GatsbyTitle 
            variant="h2" 
            component="h1" 
            fontFamily="DechoraZone" 
            letterSpacing={2} 
            color='#CF0A0A'
            sx={{ 
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
              marginBottom: 2,
              textAlign: 'center'
            }}
          >
            Party Details
        </GatsbyTitle>

        <Grid container spacing={2} marginTop={5}>
          <Grid size={{ xs: 12 }}>
            <StyledPaper elevation={3}>
              <Grid container direction={'row'} alignItems={'center'} justifyContent={'center'} mt={4} spacing={2}>
                <Grid size={{ sm: 12, md: 6 }} spacing={2}>
                  <Box spacing={2}>
                    <StyledTypography variant="h3">Date & Venue</StyledTypography>
                    <StyledBodyTypography variant="h5">Saturday, September 27, 2025</StyledBodyTypography>
                    <StyledBodyTypography variant="h5">6:00 PM - 10:00 PM</StyledBodyTypography>
                    <StyledBodyTypography variant="h5" sx={{ fontWeight: 'bold' }} marginTop={4}>
                      The Grand Events Place 
                    </StyledBodyTypography>
                    <StyledBodyTypography variant="h5">4th Floor, 2501 Rodriguez St., Balut, Tondo, Manila</StyledBodyTypography>
                    <StyledBodyTypography variant="h5">(Landmark: Above Frapatea Cafe and Goldilocks)</StyledBodyTypography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <StyledTypography variant="h3">Dress Code</StyledTypography>
                  <StyledBodyTypography variant="h5">
                    Feel free to come in casual to semi-formal wear – I'd love to see you in colors from this sweet palette!
                  </StyledBodyTypography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                      <Stack direction={'row'}>
                        <DecorativeCircle color="#992525" />
                        <DecorativeCircle color="#7a1e1e" />
                        <DecorativeCircle color="#5c1818" />
                        <DecorativeCircle color="#3a1010" />
                        <DecorativeCircle color="#1a0b0b" />
                        <DecorativeCircle color="#000000ff" />
                      </Stack> 
                  </Box>   
                  <StyledBodyTypography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
                    To keep it extra special, let's leave Silver/White for our birthday girl, Adelpha!
                  </StyledBodyTypography>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <StyledTypography variant="h3">Celebration Message</StyledTypography>
                  <StyledBodyTypography variant="h5" sx={{ fontStyle: 'italic' }}>
                    We're so excited to celebrate this special day with you!
                  </StyledBodyTypography>
                  <StyledBodyTypography variant="h5" sx={{ mt: 2 }}>
                    Get ready for a magical afternoon filled with laughter, love, and sweet memories!
                  </StyledBodyTypography>
                </Grid>
              </Grid>
              <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(207, 10, 10, 0.3)' }}>
                <CountdownTimer targetDate="2025-09-27T18:00:00" />
              </Box>
            </StyledPaper>
          </Grid>
        </Grid>
        {showSaveTheDateVideo && (
          <Grid xs={12} sx={{ mt: 4 }}>
            <SaveTheDateVideo videoId="Yxy-egJh494?si=YornXNWfxqL0b-Qy" />
          </Grid>
        )}
      </Container>
    </StyledBox>
  );
};

export default EventDetails;
