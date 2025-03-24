import React from 'react';
import { Box, Card, CardMedia, Container, Typography, List, ListItem } from '@mui/material';
import eighteenRosesBG from '../../assets/photos/18roses/EighteenRosesBG.jpg';
import eighteenSidePhoto from '../../assets/photos/18roses/sidePhoto.jpg';

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
    "Name14",
    "Name15",
    "Elver Magante",
    "Perseus Macavinta",
    "Romano Magante"
];

const EighteenRoses = () => {
    return (
        <Container maxWidth="2xl" style={{ padding:0, color: '#CF0A0A', backgroundImage: `url(${eighteenRosesBG})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', margin: 0 }} m={0}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <CardMedia
                    component="img"
                    image={eighteenSidePhoto}
                    sx={{ width: {xs: '100%', md: 400, lg:700} }}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }} color='#EEEEEE'>
                    <Typography variant="h2" component="h1" gutterBottom fontFamily={'"DecomangHold"'} letterSpacing={2} >
                        18 Roses – A Dance of Elegance
                    </Typography>
                    <Typography variant="h5" paragraph letterSpacing={2}>
                        A waltz dance with 18 special men in the debutante’s life—symbolizing love and guidance as she steps into adulthood.
                    </Typography>
                    <List sx={{ pl: {xs: 1, md: 8} }} >
                        {participants.map((name, index) => (
                            <ListItem key={index} dense style={{padding:0}}>
                                <Typography variant="h6" paragraph letterSpacing={3}>
                                    {index+1} - {name}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Container>
    );
};

export default EighteenRoses;