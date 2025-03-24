import React from 'react';
import { Box, CardMedia, Container, Typography, List, ListItem } from '@mui/material';
import eighteenCandlesBG from '../../assets/photos/eighteenCandles/eighteenCandlesBG.jpg';
import eighteenSidePhoto from '../../assets/photos/eighteenCandles/eighteenSidePhoto.jpg';

const participants = [
    "Name1",
    "Name2",
    "Name3",
    "Name4",
    "Name5",
    "Name6",
    "Name7",
    "Name8",
    "Name9",
    "Name10",
    "Name11",
    "Name12",
    "Name13",
    "Westly Enciso",
    "Andrea Enciso",
    "Linda Macavinta",
    "Edita Magante",
    "Emma Magante"
];

const EighteenCandles = () => {
    const half = Math.ceil(participants.length / 2);
    const firstHalf = participants.slice(0, half);
    const secondHalf = participants.slice(half);

    return (
        <Container maxWidth="2xl" style={{ padding:0, color: '#CF0A0A', backgroundImage: `url(${eighteenCandlesBG})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', margin: 0 }} m={0}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' } }}>
                <CardMedia
                    component="img"
                    image={eighteenSidePhoto}
                    sx={{ width: {xs: '100%', md: 400, lg:700} }}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }} color='#EEEEEE'>
                    <Typography variant="h2" component="h1" gutterBottom fontFamily={'"DecomangHold"'} letterSpacing={2} >
                        18 Candles – A Light of Hope
                    </Typography>
                    <Typography variant="h5" paragraph letterSpacing={2}>
                        A ceremony where 18 special women in the debutante’s life light candles, symbolizing their wishes and guidance as she steps into adulthood.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'}}}>
                        <List sx={{ pl: {xs: 1, sm: 8} }} >
                            {firstHalf.map((name, index) => (
                                <ListItem key={index} dense style={{padding:0}}>
                                    <Typography variant="h6" paragraph letterSpacing={3}>
                                        {index+1} - {name}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                        <List sx={{ pl: {xs: 1, sm: 15} }} >
                            {secondHalf.map((name, index) => (
                                <ListItem key={index + half} dense style={{padding:0}}>
                                    <Typography variant="h6" paragraph letterSpacing={3}>
                                        {index + half + 1} - {name}
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