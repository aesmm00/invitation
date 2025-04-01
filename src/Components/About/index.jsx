import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia, useMediaQuery, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import photo1 from '../../assets/photos/preDebut/photo1.jpg';
import aboutLandscapeBg from '../../assets/photos/about/aboutLandscapeBg.jpg';
import aboutPortraitBg from '../../assets/photos/about/aboutPortraitBg.jpg';

const GatsbyContainer = styled(Container)`
  padding: 0;
  color: #CF0A0A;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  position: relative;
`;

const GatsbyOverlay = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1;
`;

const GatsbyTitle = styled(Typography)`
  position: relative;
  padding: 20px 0;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    border: 2px solid #CF0A0A;
    opacity: 0.6;
  }

  &::before {
    top: 0;
    left: -20px;
    border-right: none;
    border-bottom: none;
  }

  &::after {
    bottom: 0;
    right: -20px;
    border-left: none;
    border-top: none;
  }
`;

const GatsbyCard = styled(Card)`
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid #CF0A0A;
  box-shadow: 0 4px 30px rgba(207, 10, 10, 0.1);
  position: relative;
  overflow: hidden;
`;

const GatsbyMirrorFrame = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  padding: 15px;
  aspect-ratio: 3/4;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid #CF0A0A;
    border-radius: 200px 200px 150px 150px;
    opacity: 0.8;
  }

  .inner-frame {
    position: absolute;
    inset: 15px;
    border: 1px solid #CF0A0A;
    border-radius: 190px 190px 140px 140px;
    opacity: 0.6;
  }

  .arch {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 90px;
    border: 2px solid #CF0A0A;
    border-radius: 90px 90px 0 0;
    border-bottom: none;
    opacity: 0.6;
  }

  .side-arch {
    position: absolute;
    width: 40px;
    height: 160px;
    border: 2px solid #CF0A0A;
    opacity: 0.6;

    &.left {
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 40px 0 0 40px;
      border-right: none;
    }

    &.right {
      right: -20px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 0 40px 40px 0;
      border-left: none;
    }
  }

  .bottom-arch {
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 90px;
    border: 2px solid #CF0A0A;
    border-radius: 0 0 90px 90px;
    border-top: none;
    opacity: 0.6;
  }
`;

const GatsbyImageContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 190px 190px 140px 140px;
  box-shadow: 0 0 20px rgba(207, 10, 10, 0.2);
`;

const GatsbyImage = styled(CardMedia)`
  width: 120%;
  height: 120%;
  object-fit: cover;
  object-position: center 15%;
  transform: scale(1.1) translateX(-8%);
  margin: -10%;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, rgba(207, 10, 10, 0.2), transparent);
    pointer-events: none;
  }
`;

const GatsbyQuote = styled(Box)`
  position: relative;
  overflow: hidden;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border: 2px solid #CF0A0A;
    opacity: 0.3;
  }

  &::before {
    top: -25px;
    left: -25px;
    border-right: none;
    border-bottom: none;
  }

  &::after {
    bottom: -25px;
    right: -25px;
    border-left: none;
    border-top: none;
  }
`;

const GatsbyParagraph = styled(Typography)`
  position: relative;
  padding-left: 15px;
  margin-bottom: 15px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #CF0A0A, transparent);
  }

  &:hover::before {
    background: linear-gradient(to bottom, #FF0000, transparent);
    width: 3px;
    transition: all 0.3s ease;
  }
`;

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <GatsbyContainer maxWidth="2xl" bgImage={isMobile ? aboutPortraitBg : aboutLandscapeBg}>
            <GatsbyOverlay />
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                position: 'relative', 
                zIndex: 2,
                padding: { xs: '20px', sm: '30px', md: '40px' },
            }}>
                <Box sx={{ 
                    textAlign: 'center',
                    marginBottom: { xs: 2, sm: 3, md: 4 },
                    position: 'relative',
                }}>
                    <GatsbyTitle 
                        variant="h2" 
                        component="h1" 
                        fontFamily="DechoraZone" 
                        letterSpacing={2} 
                        color='#CF0A0A'
                        sx={{ 
                            fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
                            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
                            textAlign: 'center',
                            display: 'inline-block'
                        }}
                    >
                        About the Debutante
                    </GatsbyTitle>
                </Box>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 3, sm: 4, md: 6 },
                    alignItems: { xs: 'center', md: 'flex-start' },
                }}>
                    <GatsbyMirrorFrame sx={{ 
                        width: { xs: '240px', sm: '280px', md: '320px', lg: '350px' },
                        padding: { xs: '10px', sm: '12px', md: '15px' }
                    }}>
                        <div className="inner-frame" />
                        <div className="arch" />
                        <div className="side-arch left" />
                        <div className="side-arch right" />
                        <div className="bottom-arch" />
                        <GatsbyImageContainer>
                            <GatsbyImage
                                component="img"
                                image={photo1}
                                alt="Debutante Photo"
                            />
                        </GatsbyImageContainer>
                    </GatsbyMirrorFrame>
                    <GatsbyCard sx={{ 
                        flex: 1, 
                        width: { xs: '100%', md: '60%' },
                        maxHeight: { md: '600px', lg: '700px' },
                        overflowY: { md: 'auto' }
                    }}>
                        <CardContent sx={{ 
                            padding: { xs: '20px', sm: '30px', md: '40px' },
                            color: '#FFFFFF',
                        }}>
                            <Typography 
                                variant="h4" 
                                paragraph 
                                sx={{
                                    color: '#CF0A0A',
                                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                                    borderBottom: '2px solid #CF0A0A',
                                    paddingBottom: '10px',
                                    marginBottom: '20px',
                                    position: 'relative',
                                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                                }}
                            >
                                Meet Adelpha "Eshie" Ellouise Magante
                            </Typography>
                            <GatsbyParagraph variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                                From the moment she stepped into the world, Adelpha "Eshie" Ellouise Magante has been a radiant soul—graceful, ambitious, and filled with dreams as grand as the Roaring Twenties. With a heart that beats for adventure and a mind that dreams in elegance, she embodies both timeless sophistication and modern ambition.
                            </GatsbyParagraph>
                            <GatsbyParagraph variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                                Growing up, Eshie has always been drawn to the beauty of vintage glamour, the charm of classic music, and the stories told through fashion and art. Whether she's lost in a book, dancing to a jazz melody, or envisioning her future, she carries herself with the poise of a true Gatsby muse.
                            </GatsbyParagraph>
                            <GatsbyParagraph variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>
                                Now, as she steps into adulthood, she embraces this milestone with excitement, confidence, and an unwavering belief in chasing her dreams. Tonight, she invites you to celebrate a night of glitz, glamour, and unforgettable memories—just as Gatsby himself would have imagined.
                            </GatsbyParagraph>
                            <GatsbyQuote 
                                sx={{ 
                                    mt: { xs: 3, sm: 4 },
                                    p: { xs: 2, sm: 3 },
                                    border: '2px solid #CF0A0A',
                                    borderRadius: '8px',
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    textAlign: 'center',
                                    position: 'relative'
                                }}
                            >
                                <Typography 
                                    variant="h5" 
                                    sx={{
                                        color: '#CF0A0A',
                                        fontFamily: 'DechoraZone',
                                        letterSpacing: '2px',
                                        mb: 2,
                                        textTransform: 'uppercase',
                                        fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                                    }}
                                >
                                    Quote from The Great Gatsby
                                </Typography>
                                <Typography 
                                    variant="h4" 
                                    sx={{
                                        color: '#FFFFFF',
                                        fontStyle: 'italic',
                                        fontFamily: 'DechoraZone',
                                        letterSpacing: '3px',
                                        lineHeight: 1.4,
                                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                                    }}
                                >
                                    "A little party never killed nobody"
                                </Typography>
                            </GatsbyQuote>
                        </CardContent>
                    </GatsbyCard>
                </Box>
            </Box>
        </GatsbyContainer>
    );
};

export default About;
