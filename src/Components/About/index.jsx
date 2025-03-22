import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import photo1 from '../../assets/photos/preDebut/photo1.jpg';

const About = () => {
  return (
    <Container maxWidth="2xl" style={{ padding: '30px 30px', color: '#CF0A0A', backgroundColor: '#000000'}}>
        <Typography variant="h2" component="h1" gutterBottom fontFamily={'"DecomangHold"'} letterSpacing={2}>
            About the Debutante
        </Typography>
    <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent style={{ padding: '30px', backgroundColor: '#DC5F00' }} >
                <Typography variant="h4" paragraph>
                    Meet Adelpha "Eshie" Ellouise Magante
                </Typography>
                <Typography variant="body1" paragraph letterSpacing={2}>
                    From the moment she stepped into the world, Adelpha "Eshie" Ellouise Magante has been a radiant soul—graceful, ambitious, and filled with dreams as grand as the Roaring Twenties. With a heart that beats for adventure and a mind that dreams in elegance, she embodies both timeless sophistication and modern ambition.
                </Typography>
                <Typography variant="body1" paragraph letterSpacing={2}>
                    Growing up, Eshie has always been drawn to the beauty of vintage glamour, the charm of classic music, and the stories told through fashion and art. Whether she's lost in a book, dancing to a jazz melody, or envisioning her future, she carries herself with the poise of a true Gatsby muse.
                </Typography>
                <Typography variant="body1" paragraph letterSpacing={2}>
                    Now, as she steps into adulthood, she embraces this milestone with excitement, confidence, and an unwavering belief in chasing her dreams. Tonight, she invites you to celebrate a night of glitz, glamour, and unforgettable memories—just as Gatsby himself would have imagined.
                </Typography>
                <Typography variant="h4" gutterBottom >
                    Quote from The Great Gatsby
                </Typography>
                <Typography variant="body1" paragraph letterSpacing={2}>
                    “A little party never killed nobody.”
                </Typography>
            </CardContent>
        </Box>
        <CardMedia
            component="img"
            image={photo1}
            sx={{ width: 500 }}
            alt="Live from space album cover"
        />
      </Card>
    </Container>
  );
};

export default About;
