import React from 'react';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { TextField, Radio, RadioGroup, Button, FormControlLabel, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import rsvpSectionBG from '../../assets/photos/rsvpSection/rsvpSectionBG.jpg';
import { submitResponse } from '../../redux/rsvp/actions';
import { selectLoading as selectRSVPLoading, selectError as selectRSVPError } from '../../redux/rsvp/selectors';
import { selectInitialData} from '../../redux/user/selectors';
import { useAppDispatch } from '../../redux/hooks.ts';

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

const RSVPSection = ({ onSubmit }) => {
    const dispatch = useAppDispatch();
    const loading = useSelector(selectRSVPLoading) ;
    const error = useSelector(selectRSVPError) ;
    const initialData = useSelector(selectInitialData);

    const [email, setEmail] = React.useState('');
    const [attending, setAttending] = React.useState('');
    const [errors, setErrors] = React.useState({});
    const [isEditing, setIsEditing] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');

    const handleCloseAlert = () => {
        setShowAlert(false);
        setIsEditing(false);
        const currentHash = window.location.hash;
        window.location.href = window.location.origin + window.location.pathname + currentHash;
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.email = email ? "" : "This field is required.";
        tempErrors.attending = attending ? "" : "This field is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                await dispatch(submitResponse({ 
                    code: initialData.Code,
                    email, 
                    attending 
                })).unwrap();
                setIsEditing(false);
                setAlertMessage(attending === 'Accepted' ? 
                    'Thank you for accepting! A calendar invite has been sent to your email.' :
                    'Thank you for submitting your response!'
                );
                setShowAlert(true);

            } catch (error) {
                console.error('Failed to submit response:', error);
            }
        }
    };

    React.useEffect(() => {
        if (initialData) {
            if (initialData.Email) {
                setEmail(initialData.Email);
            }
            if (initialData["RSVP Status"]) {
                setAttending(initialData["RSVP Status"]);
            }
        }
    }, [initialData]);

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
                    Dearest <strong>{initialData?.Name}</strong>
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
                {initialData?.["RSVP Status"] && !isEditing ? (
                    <>
                        <Typography variant="h6" 
                            style={{ 
                                color: '#FFFFFF', 
                                marginBottom: '20px', 
                                textAlign: 'center',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                maxWidth: '90%',
                                padding: '20px',
                                border: '1px solid rgba(178, 34, 34, 0.3)',
                                borderRadius: '5px',
                                backgroundColor: 'rgba(178, 34, 34, 0.1)'
                            }}>
                            Thank you for your Response! You have {initialData["RSVP Status"]} the Invitation.
                            {initialData["RSVP Status"] === "Accepted" ? (
                                <Typography variant="body1" style={{ marginTop: '10px', color: '#B22222' }}>
                                    We look forward to Celebrating with you on this Special Night!
                                </Typography>
                            ) : (
                                <Typography variant="body1" style={{ marginTop: '10px', color: '#B22222' }}>
                                    We will miss your Presence, but thank you for letting us know.
                                </Typography>
                            )}
                        </Typography>
                        {/* <GatsbyButton 
                            onClick={() => setIsEditing(true)} 
                            variant="outlined" 
                            fullWidth 
                            style={{ 
                                marginTop: '20px',
                                borderColor: '#B22222',
                                color: '#FFFFFF'
                            }}>
                            Wish to Edit Your Response?
                        </GatsbyButton> */}
                    </>
                ) : (
                    <form onSubmit={handleSubmit}>
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
                    <Box sx={{ 
                        display: 'flex', 
                        gap: 2,
                        marginTop: 2
                    }}>
                        {initialData?.["RSVP Status"] && (
                            <GatsbyButton 
                                onClick={() => setIsEditing(false)} 
                                variant="outlined" 
                                fullWidth
                                style={{ 
                                    borderColor: '#B22222',
                                    color: '#FFFFFF'
                                }}>
                                Cancel
                            </GatsbyButton>
                        )}
                        <GatsbyButton type="submit" variant="contained" fullWidth disabled={loading}>
                            {loading ? 'Submitting...' : 'Confirm My Attendance'}
                        </GatsbyButton>
                    </Box>
                    </form>
                )}
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
                        {alertMessage}
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <GatsbyButton 
                        onClick={handleCloseAlert}
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
