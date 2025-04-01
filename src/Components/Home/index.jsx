import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import photo1 from '../../assets/photos/preDebut/photo1.jpg';
import homePortraitBg from '../../assets/photos/home/homePortraitBg.jpg';
import homeLandscapeBg from '../../assets/photos/home/homeLandscapeBg.jpg';

// Art Deco styled components
const ArtDecoContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#FFD700', // Gold color for text
  textAlign: 'center',
  padding: '50px 20px',
  fontFamily: 'Cinzel, serif',
  backgroundImage: `url(${homeLandscapeBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    backgroundImage: `url(${homePortraitBg})`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)', // Darker overlay for better contrast
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
});

const PhotoCollage = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '100%', // 1:1 Aspect ratio
  [theme.breakpoints.up('sm')]: {
    paddingTop: '75%', // 4:3 Aspect ratio
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '56.25%', // 16:9 Aspect ratio
  },
}));

const PhotoLarge = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

const PhotoSmall = styled('img')(({ theme }) => ({
  position: 'absolute',
  width: '30%',
  height: 'auto',
  objectFit: 'cover',
  border: '4px solid white',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  [theme.breakpoints.up('sm')]: {
    border: '6px solid white',
  },
  [theme.breakpoints.up('md')]: {
    border: '8px solid white',
  },
}));

const DecorativeLine = styled(Box)({
  height: '2px',
  background: 'linear-gradient(to right, transparent, #CF0A0A, transparent)',
  margin: '20px 0',
});

const Home = () => {
  return (
    <ArtDecoContainer maxWidth={false}>
      <ContentWrapper>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h6" 
              letterSpacing={4}
              sx={{ textTransform: 'uppercase', marginBottom: 2, color: '#FFFFFF' }}
            >
              A Night of Opulence and Splendor
            </Typography>

            <Typography 
              variant="h1" 
              fontFamily="DechoraZone" 
              letterSpacing={2} 
              color='#CF0A0A'
              sx={{ 
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '7rem', xl: '10rem' },
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
                marginBottom: 2
              }}
            >
              Adelpha Ellouise
            </Typography>

            <Typography 
              variant="h5" 
              letterSpacing={2}
              sx={{ marginBottom: 4, color: '#FFFFFF', fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
            >
              Cordially invites you to her Gatsby-inspired 18th Birthday Soirée
            </Typography>

            <DecorativeLine />

            <Typography variant="h6" sx={{ marginTop: 4, color: '#FFFFFF', fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' } }}>
              Join us for an unforgettable evening of jazz, champagne, and merriment
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <PhotoCollage>
              <PhotoLarge src={photo1} alt="Adelpha Ellouise" />
              <PhotoSmall 
                src={photo1} 
                alt="Celebration 1" 
                sx={{ 
                  top: '5%', 
                  right: '10%', 
                  transform: 'rotate(-8deg)',
                  zIndex: 3 
                }}
              />
              <PhotoSmall 
                src={photo1} 
                alt="Celebration 2" 
                sx={{ 
                  top: '35%', 
                  right: '5%', 
                  transform: 'rotate(5deg)',
                  zIndex: 2 
                }}
              />
              <PhotoSmall 
                src={photo1} 
                alt="Celebration 3" 
                sx={{ 
                  bottom: '5%', 
                  right: '15%', 
                  transform: 'rotate(-5deg)',
                  zIndex: 1 
                }}
              />
            </PhotoCollage>
          </Grid>
        </Grid>
      </ContentWrapper>
    </ArtDecoContainer>
  );
};

export default Home;
