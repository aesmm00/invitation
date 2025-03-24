import React from 'react';
import { Container, Typography, Box, Grid2 } from '@mui/material';
import { styled } from '@mui/system';
import photo1 from '../../assets/photos/preDebut/photo1.jpg';
import homePortraitBg from '../../assets/photos/home/homePortraitBg.jpg';
import homeLandcapeBg from '../../assets/photos/home/homeLandcapeBg.jpg';

// Art Deco styled components
const ArtDecoContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#000',
  color: '#EEEEEE',
  textAlign: 'center',
  padding: '50px 50px',
  fontFamily: 'Cinzel, serif',
  backgroundImage: `url(${homeLandcapeBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.up('sm')]: {
    backgroundImage: `url(${homePortraitBg})`,
  },
}));

const PhotoCollage = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'auto auto',
  gap: '10px',
  marginTop: '20px',
});

const PhotoSmall = styled('img')({
  width: '100%',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '10px',
});

const PhotoLarge = styled('img')({
    gridColumn: 'span 4',
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '10px',
    '@media (max-width: 320px)': {
        height: '150px',
    },
    '@media (max-width: 600px)': {
        height: '250px',
    },
    '@media (min-width: 600px) and (max-width: 960px)': {
        height: '300px',
    },
    '@media (min-width: 960px)': {
        height: '400px',
    },
});

const Home = () => {
  return (
    <ArtDecoContainer maxWidth="2xl">
      <Grid2 container spacing={4} justifyContent="space-between" alignItems={'center'}>
        <Grid2 item size={{ xs: 12, md: 6 }}>
            <Typography 
                variant="h6" 
                letterSpacing={2} 
                fontSize={{sm: '1rem', md: '2rem'}}
            >
                A Night of Glitz, Glamour, and Elegance
            </Typography>

            <Typography variant="h1" 
                fontFamily="DechoraZone" 
                letterSpacing={2} 
                color='#CF0A0A'
                marginY={2}
                fontSize={{xs: '5rem', md: '10rem', xl: '15rem'}}
                sx={{ textShadow: '2px 2px 4px rgb(0, 0, 0)' }}
            >
                Adelpha Ellouise
            </Typography>

            <Typography 
                variant="h6" 
                letterSpacing={2} 
                fontSize={{sm: '1rem', md: '2rem'}}
            >
                Join Us for an 18th Birthday Celebration!
            </Typography>

        </Grid2>
        <Grid2 item size={{ xs: 12, md: 6 }}>
          <PhotoCollage>
            <PhotoSmall src={photo1} alt="Photo 1" />
            <PhotoSmall src={photo1} alt="Photo 2" />
            <PhotoSmall src={photo1} alt="Photo 3" />
            <PhotoSmall src={photo1} alt="Photo 4" />
            <PhotoLarge src={photo1} alt="Photo 5" />
          </PhotoCollage>
        </Grid2>
      </Grid2>
    </ArtDecoContainer>
  );
};

export default Home;
