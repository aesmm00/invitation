import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { TextField, Radio, RadioGroup, Button, FormControlLabel, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import rsvpSectionBG from '../../assets/photos/rsvpSection/rsvpSectionBG.jpg';
import { updateField, addName, removeName, resetForm } from '../../redux/rsvp/slice';
import { submitRSVP } from '../../redux/rsvp/actions';
import { 
    selectNames, 
    selectEmail, 
    selectAttending, 
    selectAllergies,
    selectMessage, 
    selectSubmitting, 
    selectSubmitted, 
    selectError 
} from '../../redux/rsvp/selectors';

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
    const dispatch = useDispatch();
    const names = useSelector(selectNames);
    const email = useSelector(selectEmail);
    const attending = useSelector(selectAttending);
    const allergies = useSelector(selectAllergies);
    const message = useSelector(selectMessage);
    const submitting = useSelector(selectSubmitting);
    const submitted = useSelector(selectSubmitted);
    const error = useSelector(selectError);
    const [errors, setErrors] = React.useState({});
    const [showAlert, setShowAlert] = React.useState(false);

    const handleCloseAlert = () => {
        setShowAlert(false);
        const currentHash = window.location.hash;
        window.location.href = window.location.origin + window.location.pathname + currentHash;
    };

    const handleAddName = (e) => {
        e.preventDefault(); // Prevent form submission
        dispatch(addName());
    };

    const handleRemoveName = (index) => {
        dispatch(removeName(index));
    };

    const handleNameChange = (index, value) => {
        dispatch(updateField({ field: 'names', value, index }));
    };

    const handleFieldChange = (field, value) => {
        dispatch(updateField({ field, value }));
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.names = names.every(name => name.trim() !== '') ? "" : "All name fields are required.";
        tempErrors.email = email ? "" : "This field is required.";
        tempErrors.attending = attending ? "" : "This field is required.";
        // Notes are optional, no validation needed
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                await dispatch(submitRSVP()).unwrap();
                setShowAlert(true);
            } catch (error) {
                console.error('Failed to submit response:', error);
            }
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
                <Typography variant="h5" component="h2" gutterBottom 
                    style={{ 
                        color: '#B22222', 
                        marginBottom: '30px', 
                        fontFamily: 'DecomangHold, serif',
                        fontSize: '1.8rem',
                        letterSpacing: '2px',
                        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                    }}>
                    Dearest Guest
                </Typography>
                <Typography variant="body1" 
                    style={{ 
                        color: '#FFFFFF', 
                        marginBottom: '25px', 
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        letterSpacing: '1px'
                    }}>
                    You are cordially invited to an enchanting night of opulence and wonder.
                    Step into a world where jazz meets elegance, and every moment becomes a memory.
                </Typography>
                <Typography variant="body1" 
                    style={{ 
                        color: '#FFFFFF', 
                        marginBottom: '20px', 
                        textAlign: 'center',
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        letterSpacing: '1px',
                        padding: '15px',
                        border: '1px solid rgba(178, 34, 34, 0.3)',
                        borderRadius: '5px',
                        backgroundColor: 'rgba(178, 34, 34, 0.1)'
                    }}>
                    NOTE: PLEASE REFER TO YOUR INVITATION OR FACEBOOK MESSAGE FOR THE NUMBER OF SEATS RESERVED FOR YOU. SEATS ARE LIMITED.
                </Typography>
                <Typography variant="body1" 
                    style={{ 
                        color: '#FFFFFF', 
                        marginBottom: '40px', 
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        letterSpacing: '1px',
                        padding: '15px',
                        border: '1px solid rgba(178, 34, 34, 0.3)',
                        borderRadius: '5px',
                        backgroundColor: 'rgba(178, 34, 34, 0.1)'
                    }}>
                    Please Confirm your RSVP on or before August 23, 2025
                </Typography>
                <form onSubmit={handleSubmit}>
                    {names.map((name, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <GatsbyTextField
                                label={`Guest ${index + 1} Name`}
                                type="text"
                        value={name}
                        onChange={(e) => handleNameChange(index, e.target.value)}
                        disabled={submitting}
                                fullWidth
                                margin="normal"
                                error={!!errors.names}
                                helperText={index === 0 ? errors.names : ''}
                            />
                            {index > 0 && (
                                <GatsbyButton
                                    onClick={() => handleRemoveName(index)}
                                    variant="outlined"
                                    sx={{ minWidth: 'auto', mt: 2 }}
                                >
                                    ✕
                                </GatsbyButton>
                            )}
                        </Box>
                    ))}
                    <GatsbyButton
                        onClick={handleAddName}
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        type="button" // Explicitly set type to button
                    >
                        Add Another Guest
                    </GatsbyButton>
                    <GatsbyTextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        disabled={submitting}
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
                        onChange={(e) => handleFieldChange('attending', e.target.value)}
                        disabled={submitting}
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
                    <GatsbyTextField
                        label="Allergies"
                        value={allergies}
                        onChange={(e) => handleFieldChange('allergies', e.target.value)}
                        disabled={submitting}
                        fullWidth
                        margin="normal"
                        placeholder="Please list any food allergies or dietary restrictions"
                    />
                    <GatsbyTextField
                        label="Message"
                        multiline
                        rows={4}
                        value={message}
                        onChange={(e) => handleFieldChange('message', e.target.value)}
                        disabled={submitting}
                        fullWidth
                        margin="normal"
                        placeholder="Any special message or requests?"
                    />
                    <Box sx={{ 
                        display: 'flex', 
                        gap: 2,
                        marginTop: 2
                    }}>
                        <GatsbyButton type="submit" variant="contained" fullWidth disabled={submitting}>
                            {submitting ? 'Submitting...' : 'Confirm My Attendance'}
                        </GatsbyButton>
                    </Box>
                </form>
                {error && <Typography color="error" style={{ marginTop: '10px' }}>{error}</Typography>}
            </GatsbyCard>
            <Dialog
                open={showAlert}
                onClose={handleCloseAlert}
                PaperProps={{
                    style: {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        border: '2px solid #B22222',
                        borderRadius: '10px',
                        color: '#FFFFFF',
                        minWidth: '300px'
                    }
                }}
            >
                <DialogTitle sx={{ 
                    textAlign: 'center',
                    color: '#B22222',
                    fontFamily: 'DecomangHold, serif'
                }}>
                    RSVP Confirmation
                </DialogTitle>
                <DialogContent>
                    <Typography sx={{ textAlign: 'center', my: 2 }}>
                        {attending === 'Yes' 
                            ? 'Thank you for accepting! A calendar invite has been sent to your email.'
                            : 'Thank you for submitting your response!'}
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <GatsbyButton 
                        onClick={() => {
                            handleCloseAlert();
                            dispatch(resetForm());
                        }}
                        variant="contained"
                        style={{ minWidth: '120px' }}
                    >
                        Close
                    </GatsbyButton>
                </DialogActions>
            </Dialog>
        </RSVPContainer>
    );
};

export default RSVPSection;
