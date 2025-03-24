import React, { useState } from 'react';
import { TextField, Radio, RadioGroup, Button, FormControlLabel, Typography, Container, Card, CardContent } from '@mui/material';
import rsvpSectionBG from '../../assets/photos/rsvpSection/rsvpSectionBG.jpg';

const RSVPSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attending, setAttending] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = name ? "" : "This field is required.";
        tempErrors.email = email ? "" : "This field is required.";
        tempErrors.attending = attending ? "" : "This field is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const url = "https://script.google.com/macros/s/AKfycbxuNpTjNM19KpUSsjXYYGDzgJ_NJje34EcJ0KNlh1rIWIzz5PZ6goCA_ApFyntDC1xB9g/exec";
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: JSON.stringify({ name: name, email: email, rsvpStatus: attending })
            }).then(res => res.text()).then(data => {
                alert(data);
            }).catch(error => console.log(error));
        }
    };

    return (
        <Container maxWidth="2xl"
        style={{ display: 'flex', justifyContent: "center", alignItems: 'center',  padding:'30px 30px', color: '#CF0A0A', backgroundImage: `url(${rsvpSectionBG})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}>
            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Typography variant="h2" component="h1" gutterBottom fontFamily={'"DecomangHold"'} letterSpacing={2} >
                        RSVP - A Night of Elegance Awaits!
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <TextField
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                margin="normal"
                                error={!!errors.name}
                                helperText={errors.name}
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
                                error={!!errors.email}
                                helperText={errors.email}
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
                            {errors.attending && <Typography color="error">{errors.attending}</Typography>}
                        </div>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="primary" 
                            style={{ 
                                marginTop: '20px', 
                                backgroundColor: '#B22222',
                                ':hover': {
                                    backgroundColor: '#8B0000'
                                }
                            }}
                        >
                            Confirm My Attendance
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default RSVPSection;
