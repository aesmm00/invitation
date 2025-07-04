import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Paper, Modal } from '@mui/material';
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
  fontFamily: '"Decoment", sans-serif',
  color: '#FFFFFF',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  marginBottom: theme.spacing(1),
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#FF1E1E',
  }
}));

const EventDetails = ({ showSaveTheDateVideo = false }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <StyledBox>
      <Container maxWidth="2xl">
        <StyledTypography variant="h2" align="center" gutterBottom>
          When & Where
        </StyledTypography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <StyledPaper elevation={3}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <StyledTypography variant="h5">Date</StyledTypography>
                  <StyledBodyTypography variant="body1">Saturday, September 27, 2025</StyledBodyTypography>

                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledTypography variant="h5">Time</StyledTypography>
                  <StyledBodyTypography variant="body1">6:00 PM - 10:00 PM</StyledBodyTypography>
                  <StyledBodyTypography variant="body2" sx={{ fontStyle: 'italic', mt: 2 }}>
                    Join us for an unforgettable evening of celebration and glamour
                  </StyledBodyTypography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledTypography variant="h5">Where</StyledTypography>
                  <StyledBodyTypography variant="body1">To be announce</StyledBodyTypography>
                  {/* <StyledBodyTypography variant="body1">The Grand Gatsby Ballroom</StyledBodyTypography>
                  <StyledBodyTypography variant="body1">123 Roaring Twenties Avenue</StyledBodyTypography>
                  <StyledBodyTypography variant="body1">Manila, Philippines</StyledBodyTypography> */}
                </Grid>
              </Grid>
              <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(207, 10, 10, 0.3)' }}>
                    <CountdownTimer targetDate="2025-09-27T18:00:00" />
                  </Box>
            </StyledPaper>
          </Grid>
          <Grid item xs={12}>
            <StyledPaper elevation={3}>
              <StyledTypography variant="h5">Dress Code: Black & Red Attire</StyledTypography>
              <StyledBodyTypography variant="body1" sx={{ mb: 3 }}>
                Any outfit is allowed, but it must prominently feature black and red colors. We encourage creativity while adhering to this color scheme. For those who wish to embrace our theme, we welcome 1920s Gatsby-inspired elements:
              </StyledBodyTypography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box sx={{
                    border: '1px solid #CF0A0A',
                    p: 2,
                    borderRadius: 1,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(207, 10, 10, 0.1), transparent)',
                      pointerEvents: 'none',
                    }
                  }}>
                    <StyledBodyTypography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
                      Ladies
                    </StyledBodyTypography>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Box sx={{
                          width: '100%',
                          height: '250px',
                          backgroundColor: 'rgba(207, 10, 10, 0.1)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: '1px solid #CF0A0A',
                          borderRadius: 1,
                          overflow: 'hidden',
                          position: 'relative'
                        }}>
                          <img 
                            src={require('../../assets/photos/dressCode/ladies/formalAndSemiFormal.jpg')}
                            alt="Ladies Formal Attire"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleImageClick({
                              src: require('../../assets/photos/dressCode/ladies/formalAndSemiFormal.jpg'),
                              alt: "Ladies Formal Attire"
                            })}
                          />
                          <Typography 
                            sx={{ 
                              position: 'absolute',
                              bottom: 0,
                              width: '100%',
                              backgroundColor: 'rgba(0,0,0,0.85)',
                              color: '#FFFFFF',
                              padding: '4px',
                              textAlign: 'center',
                              fontSize: '0.8rem',
                              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                            }}
                          >
                            Formal/Semi-Formal
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{
                          width: '100%',
                          height: '250px',
                          backgroundColor: 'rgba(207, 10, 10, 0.1)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: '1px solid #CF0A0A',
                          borderRadius: 1,
                          overflow: 'hidden',
                          position: 'relative'
                        }}>
                          <img 
                            src={require('../../assets/photos/dressCode/ladies/gatsbyOutfit.jpg')}
                            alt="Ladies Gatsby Attire"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleImageClick({
                              src: require('../../assets/photos/dressCode/ladies/gatsbyOutfit.jpg'),
                              alt: "Ladies Gatsby Attire"
                            })}
                          />
                          <Typography 
                            sx={{ 
                              position: 'absolute',
                              bottom: 0,
                              width: '100%',
                              backgroundColor: 'rgba(0,0,0,0.7)',
                              color: '#fff',
                              padding: '4px',
                              textAlign: 'center',
                              fontSize: '0.8rem'
                            }}
                          >
                            Gatsby-Inspired
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <StyledBodyTypography variant="body2" sx={{ textAlign: 'left' }}>
                      • Black dresses with red accessories or vice versa<br/>
                      • Red and black patterned or color-blocked outfits<br/>
                      • Black attire with red statement pieces<br/>
                      • Any style of dress or outfit in black and red<br/>
                      • Accessories in black and red tones
                    </StyledBodyTypography>
                    <StyledBodyTypography variant="body2" sx={{ textAlign: 'left', mt: 2, fontStyle: 'italic' }}>
                      Optional Gatsby-inspired elements:<br/>
                      • Flapper-style dresses in black or red<br/>
                      • Art Deco-inspired jewelry<br/>
                      • Feather boas, headbands, or long pearl necklaces
                    </StyledBodyTypography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{
                    border: '1px solid #CF0A0A',
                    p: 2,
                    borderRadius: 1,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(207, 10, 10, 0.1), transparent)',
                      pointerEvents: 'none',
                    }
                  }}>
                    <StyledBodyTypography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
                      Gentlemen
                    </StyledBodyTypography>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Box sx={{
                          width: '100%',
                          height: '250px',
                          backgroundColor: 'rgba(207, 10, 10, 0.1)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: '1px solid #CF0A0A',
                          borderRadius: 1,
                          overflow: 'hidden',
                          position: 'relative'
                        }}>
                          <img 
                            src={require('../../assets/photos/dressCode/gentleman/formalAndSemiFormal.jpg')}
                            alt="Men's Formal Attire"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleImageClick({
                              src: require('../../assets/photos/dressCode/gentleman/formalAndSemiFormal.jpg'),
                              alt: "Men's Formal Attire"
                            })}
                          />
                          <Typography 
                            sx={{ 
                              position: 'absolute',
                              bottom: 0,
                              width: '100%',
                              backgroundColor: 'rgba(0,0,0,0.7)',
                              color: '#fff',
                              padding: '4px',
                              textAlign: 'center',
                              fontSize: '0.8rem'
                            }}
                          >
                            Formal/Semi-Formal
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{
                          width: '100%',
                          height: '250px',
                          backgroundColor: 'rgba(207, 10, 10, 0.1)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: '1px solid #CF0A0A',
                          borderRadius: 1,
                          overflow: 'hidden',
                          position: 'relative'
                        }}>
                          <img 
                            src={require('../../assets/photos/dressCode/gentleman/gatsbyOutfit.jpg')}
                            alt="Men's Gatsby Attire"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              cursor: 'pointer'
                            }}
                            onClick={() => handleImageClick({
                              src: require('../../assets/photos/dressCode/gentleman/gatsbyOutfit.jpg'),
                              alt: "Men's Gatsby Attire"
                            })}
                          />
                          <Typography 
                            sx={{ 
                              position: 'absolute',
                              bottom: 0,
                              width: '100%',
                              backgroundColor: 'rgba(0,0,0,0.7)',
                              color: '#fff',
                              padding: '4px',
                              textAlign: 'center',
                              fontSize: '0.8rem'
                            }}
                          >
                            Gatsby-Inspired
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <StyledBodyTypography variant="body2" sx={{ textAlign: 'left' }}>
                      • Black suits or blazers with red shirts or accessories<br/>
                      • Red and black patterned or color-blocked outfits<br/>
                      • Black attire with red statement pieces<br/>
                      • Any style of outfit combining black and red<br/>
                      • Accessories in black and red tones
                    </StyledBodyTypography>
                    <StyledBodyTypography variant="body2" sx={{ textAlign: 'left', mt: 2, fontStyle: 'italic' }}>
                      Optional Gatsby-inspired elements:<br/>
                      • Pinstripe suits in black with red accents<br/>
                      • Art Deco-inspired cufflinks or tie clips<br/>
                      • Fedoras or newsboy caps in black or red
                    </StyledBodyTypography>
                  </Box>
                </Grid>
              </Grid>
              <StyledBodyTypography variant="body2" sx={{ mt: 3, fontStyle: 'italic', textAlign: 'center' }}>
                Remember, your outfit must prominently feature black and red colors. Feel free to be creative while adhering to this color scheme. Gatsby-inspired elements are welcome to enhance the 1920s theme of our celebration!
              </StyledBodyTypography>
            </StyledPaper>
          </Grid>
        </Grid>
        {showSaveTheDateVideo && (
          <Grid item xs={12} sx={{ mt: 4 }}>
            <SaveTheDateVideo videoId="Yxy-egJh494?si=YornXNWfxqL0b-Qy" />
          </Grid>
        )}
      </Container>
      <Modal
        open={Boolean(selectedImage)}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
          }}
        >
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                cursor: 'pointer',
              }}
              onClick={handleClose}
            />
          )}
        </Box>
      </Modal>
    </StyledBox>
  );
};

export default EventDetails;
