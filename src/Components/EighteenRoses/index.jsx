import React, { useEffect, useState } from 'react';
import { Box, CardMedia, Container, Typography, List, ListItem } from '@mui/material';
import styled from '@emotion/styled';
import eighteenRosesBG from '../../assets/photos/eighteenRoses/eighteenRosesBG.jpg';
import eighteenSidePhoto from '../../assets/photos/eighteenRoses/eighteenSidePhoto.jpg';
import axios from 'axios';

const GatsbyContainer = styled(Container)`
  padding: 0;
  color: #CF0A0A;
  background-image: url(${eighteenRosesBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  position: relative;
  min-height: 100vh;
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

const GatsbyListItem = styled(ListItem)`
  position: relative;
  padding-left: 20px;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
  
  &:hover {
    color: #CF0A0A;
    transform: translateX(10px);
  }
`;

const GatsbyImage = styled(CardMedia)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(45deg, rgba(207, 10, 10, 0.2), transparent);
    pointer-events: none;
  }
`;

const EighteenRoses = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://script.google.com/macros/s/AKfycbw1T_Gf1k37jAYAhtC-ozc8QcsKrQ2ug79VvSPDMaScCc7Gm3EUhZw1eQQlOhE4OTHB/exec?sheet=EighteenRoses`);
                if (response.data.error) {
                    setError(response.data.error);
                } else {
                    setData(response.data);
                    setError("");
                }
            } catch (error) {
                setError("Error fetching data");
            }
        };

        fetchData();
    }, []);

    const half = Math.ceil(data.length / 2);
    const firstHalf = data.slice(0, half);
    const secondHalf = data.slice(half);

    return (
        <GatsbyContainer maxWidth="2xl">
            <GatsbyOverlay />
            <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                position: 'relative', 
                zIndex: 2,
                padding: { xs: '20px', md: '40px' }
            }}>
                <GatsbyImage
                    component="img"
                    image={eighteenSidePhoto}
                    sx={{ 
                        width: {xs: '100%', md: 400, xl:700},
                        position: 'relative'
                    }}
                    alt="Eighteen Roses"
                />
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    padding: 3, 
                    position: 'relative',
                    flex: 1,
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '10px',
                    margin: { xs: '20px 0', md: '0 0 0 20px' }
                }} color='#EEEEEE'>
                    <Typography 
                        variant="h6" 
                        letterSpacing={4}
                        sx={{ 
                            textTransform: 'uppercase', 
                            marginBottom: 2, 
                            color: '#FFFFFF',
                            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }
                        }}
                    >
                        A Dance of Elegance and Grace
                    </Typography>
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
                        18 Roses
                    </GatsbyTitle>
                    <Typography 
                        variant="h5" 
                        letterSpacing={2}
                        sx={{ 
                            marginBottom: 4, 
                            color: '#FFFFFF', 
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem', lg: '1.75rem' },
                            textAlign: 'center'
                        }}
                    >
                        Distinguished gentlemen join the debutante in a waltz, each bearing a rose to honor her grace
                    </Typography>
                    {error && (
                        <Typography variant="h6" color="error" paragraph>
                            {error}
                        </Typography>
                    )}
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: {xs: 'column', sm: 'row'},
                        justifyContent: 'space-around',
                        gap: {md: 4, sm: 0},
                        marginTop: 4
                    }}>
                        <List>
                            {firstHalf.map((item, index) => (
                                <GatsbyListItem key={index} dense>
                                    <Typography variant="h6" paragraph letterSpacing={3} sx={{ 
                                        fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' }
                                    }}>
                                        {index + 1} - {item.Name}
                                    </Typography>
                                </GatsbyListItem>
                            ))}
                        </List>
                        <List>
                            {secondHalf.map((item, index) => (
                                <GatsbyListItem key={index + half} dense>
                                    <Typography variant="h6" paragraph letterSpacing={3} sx={{ 
                                        fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' }
                                    }}>
                                        {index + half + 1} - {item.Name}
                                    </Typography>
                                </GatsbyListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        </GatsbyContainer>
    );
};

export default EighteenRoses;
