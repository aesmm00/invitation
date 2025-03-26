import React, { useEffect, useState } from 'react';
import { Box, CardMedia, Container, Typography, List, ListItem } from '@mui/material';
import eighteenCandlesBG from '../../assets/photos/eighteenCandles/eighteenCandlesBG.jpg';
import eighteenSidePhoto from '../../assets/photos/eighteenCandles/eighteenSidePhoto.jpg';
import axios from 'axios';

const EighteenCandles = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
        
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://script.google.com/macros/s/AKfycbw1T_Gf1k37jAYAhtC-ozc8QcsKrQ2ug79VvSPDMaScCc7Gm3EUhZw1eQQlOhE4OTHB/exec?sheet=EighteenCandles`);
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
    
    console.log(data);

    const half = Math.ceil(data.length / 2);
    const firstHalf = data.slice(0, half);
    const secondHalf = data.slice(half);

    return (
        <Container maxWidth="2xl" style={{ padding:0, color: '#CF0A0A', backgroundImage: `url(${eighteenCandlesBG})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', margin: 0 }} m={0}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' } }}>
                <CardMedia
                    component="img"
                    image={eighteenSidePhoto}
                    sx={{ width: {xs: '100%', md: 400, lg:700} }}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2, textShadow: '2px 2px 2px rgb(0, 0, 0)' }} color='#000000' >
                    <Typography variant="h2" component="h1" gutterBottom fontFamily={'"DecomangHold"'} letterSpacing={2} >
                        18 Candles – A Light of Hope
                    </Typography>
                    <Typography variant="h5" paragraph letterSpacing={2}>
                        A ceremony where 18 special women in the debutante’s life light candles, symbolizing their wishes and guidance as she steps into adulthood.
                    </Typography>
                    {error && (
                        <Typography variant="h6" color="error" paragraph>
                            {error}
                        </Typography>
                    )}
                    <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}}}>
                        <List sx={{ pl: {xs: 1, sm: 8} }} >
                            {firstHalf.map((item, index) => (
                                <ListItem key={index} dense style={{padding:0}}>
                                    <Typography variant="h6" paragraph letterSpacing={3}>
                                        {index + 1} - {item.Name}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                        <List sx={{ pl: {xs: 1, sm: 15} }} >
                            {secondHalf.map((item, index) => (
                                <ListItem key={index + half} dense style={{padding:0}}>
                                    <Typography variant="h6" paragraph letterSpacing={3}>
                                        {index + half + 1} - {item.Name}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default EighteenCandles;