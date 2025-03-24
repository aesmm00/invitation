import React, { useState } from 'react';
import { TextField, Radio, RadioGroup, Button, FormControlLabel, Typography, Container, Card, CardContent } from '@mui/material';

const RSVPSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attending, setAttending] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "https://script.google.com/macros/s/AKfycbxuNpTjNM19KpUSsjXYYGDzgJ_NJje34EcJ0KNlh1rIWIzz5PZ6goCA_ApFyntDC1xB9g/exec";
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: JSON.stringify({ name: name, email: email, rsvpStatus: attending })
        }).then(res => res.text()).then(data => {
            alert(data);
        }).catch(error => console.log(error));
    };

    return (
        <Container style={{ padding: '30px 30px', color: '#000000', backgroundColor: '#EEEEEE'}} maxWidth="2xl">
            <Card>
                <CardContent>
                    <Typography variant="h2" component="h1" gutterBottom fontFamily={'"DecomangHold"'} letterSpacing={2} >
                        RSVP
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                margin="normal"
                            />
                        </div>
                        <div>
                            <TextField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                margin="normal"
                            />
                        </div>
                        <div>
                            <Typography variant="h6" component="h2" gutterBottom>
                                Will you be attending?
                            </Typography>
                            <RadioGroup
                                value={attending}
                                onChange={(e) => setAttending(e.target.value)}
                            >
                                <FormControlLabel value="Accepted" control={<Radio />} label="Yes! I’m excited to celebrate this unforgettable night with you!" />
                                <FormControlLabel value="Declined" control={<Radio />} label="Unfortunately, I won’t be able to attend, but I’m sending my warmest wishes for a magical and memorable debut!" />
                            </RadioGroup>
                        </div>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default RSVPSection;
