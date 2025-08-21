import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import photoLarge from '../../assets/photos/preDebut/photoLarge.jpg';
import photoSmall1 from '../../assets/photos/preDebut/photoSmall1.jpg';
import photoSmall2 from '../../assets/photos/preDebut/photoSmall2.jpg';
import photoSmall3 from '../../assets/photos/preDebut/photoSmall3.jpg';
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
  paddingTop: '75%', // 4:3 aspect ratio
  margin: '40px 0', // Add margin to accommodate overlapping photos
}));

const PhotoLarge = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85%',
  height: '85%',
  objectFit: 'cover',
  border: '15px solid white',
  borderRadius: '2px',
  boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
  zIndex: 1,
}));

const PhotoSmall = styled('img')(({ theme }) => ({
  position: 'absolute',
  width: '25%',
  height: 'auto',
  objectFit: 'cover',
  border: '8px solid white',
  backgroundColor: 'white',
  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
  transition: 'all 0.3s ease-in-out',
  zIndex: 2,
  '&:hover': {
    transform: 'scale(1.05) rotate(0deg) !important',
    zIndex: 3,
  },
  [theme.breakpoints.down('sm')]: {
    width: '30%',
    border: '6px solid white',
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
          <Grid size={{ xs: 12, md: 6 }}>
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

            <Typography variant="h6" sx={{ marginTop: 4, color: '#FFFFFF', fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}>
              Join us for an unforgettable evening of jazz, champagne, and merriment
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <PhotoCollage>
              <PhotoLarge 
                src={photoLarge} 
                alt="Adelpha Ellouise Main"
                sx={{
                  objectPosition: 'center 20%',
                }}
              />
              <PhotoSmall 
                src={photoSmall1} 
                alt="Celebration Mirror" 
                sx={{ 
                  top: '-5%',
                  left: '0',
                  transform: 'rotate(-8deg)',
                }}
              />
              <PhotoSmall 
                src={photoSmall2} 
                alt="Celebration Dress" 
                sx={{ 
                  top: '-5%',
                  right: '0',
                  transform: 'rotate(8deg)',
                }}
              />
              <PhotoSmall 
                src={photoSmall3} 
                alt="Celebration Full" 
                sx={{ 
                  bottom: '-5%',
                  right: '0',
                  transform: 'rotate(-5deg)',
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
