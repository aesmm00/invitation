import React, { useEffect, useState } from 'react';
import { Box, CardMedia, Container, Typography, List, ListItem } from '@mui/material';
import eighteenBlueBillsBG from '../../assets/photos/eighteenBlueBills/eighteenBlueBillsBG.jpg';
import eighteenBlueBillsSidePhoto from '../../assets/photos/eighteenBlueBills/eighteenBlueBillsSidePhoto.jpg';
import axios from 'axios';

const EighteenBlueBills = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://script.google.com/macros/s/AKfycbw1T_Gf1k37jAYAhtC-ozc8QcsKrQ2ug79VvSPDMaScCc7Gm3EUhZw1eQQlOhE4OTHB/exec?sheet=EighteenBlueBills`);
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
        <Container maxWidth="2xl" style={{ padding:0, color: '#CF0A0A', backgroundImage: `url(${eighteenBlueBillsBG})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', margin: 0 }} m={0}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <CardMedia
                    component="img"
                    image={eighteenBlueBillsSidePhoto}
                    sx={{ width: {xs: '100%', md: 400, lg:700} }}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }} color='#EEEEEE'>
                    <Typography variant="h2" component="h1" gutterBottom fontFamily={'"DecomangHold"'} letterSpacing={2} >
                        18 Blue Bills – A Toast to Prosperity
                    </Typography>
                    <Typography variant="h5" paragraph letterSpacing={2}>
                    Eighteen chosen guests present the debutante with a symbolic gift of a "blue bill" (Philippine 1,000 peso bill) to wish her financial success and abundance.
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

export default EighteenBlueBills;