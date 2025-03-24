import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBar = () => {
    return (
        <AppBar position="sticky" style={{ backgroundColor: 'white' }}>
            <Toolbar> {/* Center the content */}
                <Typography variant="h6" style={{ flexGrow: 1, color: 'black', fontSize: '1.5', letterSpacing: '0.2em' }}>
                    September 23, 2025 - 6:00 PM
                </Typography>
                <Typography variant="h6" style={{ color: 'black', fontSize: '1.5rem',  }}>
                    
                </Typography>
                <Button color="inherit" style={{ color: 'black', fontSize: '1.5rem',  }}>RSVP</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;