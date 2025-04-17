import React, { useState } from 'react';
import styled from '@emotion/styled';
import { TextField, Radio, RadioGroup, Button, FormControlLabel, Typography } from '@mui/material';
import rsvpSectionBG from '../../assets/photos/rsvpSection/rsvpSectionBG.jpg';

const RSVPContainer = styled.div`
  background: url(${rsvpSectionBG});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;

const GatsbyCard = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid #B22222;
  border-radius: 10px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 0 20px rgba(178, 34, 34, 0.5);
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 20px;
  }

  &::before, &::after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    background: linear-gradient(45deg, #B22222, transparent);
    animation: rotate 20s linear infinite;

    @media (max-width: 600px) {
      width: 100px;
      height: 100px;
    }
  }

  &::before {
    top: -75px;
    left: -75px;

    @media (max-width: 600px) {
      top: -50px;
      left: -50px;
    }
  }

  &::after {
    bottom: -75px;
    right: -75px;

    @media (max-width: 600px) {
      bottom: -50px;
      right: -50px;
    }
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const GatsbyCorner = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  border: 2px solid #B22222;

  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
  }

  &.top-left {
    top: 10px;
    left: 10px;
    border-right: none;
    border-bottom: none;
  }

  &.top-right {
    top: 10px;
    right: 10px;
    border-left: none;
    border-bottom: none;
  }

  &.bottom-left {
    bottom: 10px;
    left: 10px;
    border-right: none;
    border-top: none;
  }

  &.bottom-right {
    bottom: 10px;
    right: 10px;
    border-left: none;
    border-top: none;
  }
`;

const GatsbyVector = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  
  &::before, &::after {
    content: '';
    position: absolute;
    background: #B22222;
  }

  &::before {
    top: 20px;
    left: 20px;
    right: 20px;
    height: 2px;
    background: linear-gradient(to right, transparent, #B22222, transparent);
  }

  &::after {
    bottom: 20px;
    left: 20px;
    right: 20px;
    height: 2px;
    background: linear-gradient(to right, transparent, #B22222, transparent);
  }
`;

const GatsbyTitle = styled(Typography)`
  font-family: 'DecomangHold', serif;
  color: #B22222;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  font-size: 2.5rem;

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const GatsbyTextField = styled(TextField)`
  .MuiInputBase-root {
    color: #FFFFFF;
  }
  .MuiInputLabel-root {
    color: #B22222;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #B22222;
  }
`;

const GatsbyRadio = styled(Radio)`
  color: #B22222;
  &.Mui-checked {
    color: #FF0000;
  }
`;

const GatsbyButton = styled(Button)`
  background-color: #B22222;
  color: #FFFFFF;
  font-family: 'DecomangHold', serif;
  margin-top: 20px;
  &:hover {
    background-color: #8B0000;
  }
`;

const GatsbyFormControlLabel = styled(FormControlLabel)`
  margin-bottom: 10px;
  
  .MuiFormControlLabel-label {
    font-size: 0.9rem;
    
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
  }
`;

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
        <RSVPContainer>
            <GatsbyCard>
                <GatsbyVector />
                <GatsbyCorner className="top-left" />
                <GatsbyCorner className="top-right" />
                <GatsbyCorner className="bottom-left" />
                <GatsbyCorner className="bottom-right" />
                <GatsbyTitle variant="h2" component="h1">
                    RSVP - A Night of Elegance Awaits!
                </GatsbyTitle>
                <form onSubmit={handleSubmit}>
                    <GatsbyTextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <GatsbyTextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <Typography variant="h6" component="h2" gutterBottom style={{ color: '#FFFFFF', marginTop: '20px' }}>
                        Will you be attending?
                    </Typography>
                    <RadioGroup
                        value={attending}
                        onChange={(e) => setAttending(e.target.value)}
                    >
                        <GatsbyFormControlLabel 
                            value="Accepted" 
                            control={<GatsbyRadio />} 
                            label="Yes! I'm excited to celebrate this unforgettable night with you!" 
                            style={{ color: '#FFFFFF' }}
                        />
                        <GatsbyFormControlLabel 
                            value="Declined" 
                            control={<GatsbyRadio />} 
                            label="Unfortunately, I won't be able to attend, but I'm sending my warmest wishes for a magical and memorable debut!" 
                            style={{ color: '#FFFFFF' }}
                        />
                    </RadioGroup>
                    {errors.attending && <Typography color="error">{errors.attending}</Typography>}
                    <GatsbyButton type="submit" variant="contained" fullWidth>
                        Confirm My Attendance
                    </GatsbyButton>
                </form>
            </GatsbyCard>
        </RSVPContainer>
    );
};

export default RSVPSection;
