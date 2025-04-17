import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, IconButton, useMediaQuery, useTheme, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 0.8; }
  100% { opacity: 0.4; }
`;

const sparkle = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const GatsbyNavBar = styled(AppBar)`
  background-color: #1a1a1a;
  position: sticky;
  margin: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right,
      transparent 0%,
      #CF0A0A 2%,
      #CF0A0A 98%,
      transparent 100%
    );
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right,
      transparent 0%,
      #CF0A0A 2%,
      #CF0A0A 98%,
      transparent 100%
    );
    animation: ${shimmer} 3s infinite;
  }
`;

const GatsbyToolbar = styled(Toolbar)`
  justify-content: center;
  gap: 0;
  padding: 0;
  margin: 0;
  min-height: 48px !important;
  width: 100%;
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background: radial-gradient(circle, #CF0A0A 10%, transparent 60%);
    opacity: 0.3;
    animation: ${sparkle} 4s infinite;
  }

  &::before {
    left: 20px;
  }

  &::after {
    right: 20px;
  }
`;

const decorativeBorder = keyframes`
  0% { width: 6px; height: 6px; opacity: 0.6; }
  50% { width: 10px; height: 10px; opacity: 1; }
  100% { width: 6px; height: 6px; opacity: 0.6; }
`;

const GatsbyButton = styled(Button)`
  color: #CF0A0A;
  font-family: 'DechoraZone', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 8px 16px;
  position: relative;
  min-width: 120px;
  margin: 0;
  height: 48px;
  border-radius: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  &:hover {
    color: #FF1E1E;
    background: rgba(207, 10, 10, 0.1);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  &::before, &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border: 1px solid #CF0A0A;
    opacity: 0.6;
    animation: ${decorativeBorder} 3s infinite;
  }

  &::before {
    top: 8px;
    left: 8px;
    border-right: none;
    border-bottom: none;
  }

  &::after {
    bottom: 8px;
    right: 8px;
    border-left: none;
    border-top: none;
  }

  &.active {
    color: #FF1E1E;
    &::before, &::after {
      animation: ${decorativeBorder} 2s infinite;
    }
  }
`;

const GatsbyMenu = styled(Menu)`
  .MuiPaper-root {
    background-color: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(5px);
    border: 1px solid #CF0A0A;
    margin-top: 0;
    border-radius: 0;
    box-shadow: 0 4px 20px rgba(207, 10, 10, 0.2);
  }
`;

const GatsbyMenuItem = styled(MenuItem)`
  font-family: 'DechoraZone', sans-serif;
  color: #CF0A0A;
  letter-spacing: 3px;
  justify-content: center;
  padding: 12px 24px;
  margin: 0;
  min-height: 48px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: rgba(207, 10, 10, 0.1);
    color: #FF1E1E;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 1px;
    background: linear-gradient(to right, transparent, #CF0A0A, transparent);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const MobileMenuButton = styled(IconButton)`
  color: #CF0A0A;
  margin: 0;
  padding: 12px;
  height: 48px;
  width: 48px;
  border-radius: 0;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, #CF0A0A 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 0.2;
  }
`;

const NavBar = ({ onNavClick }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        { text: 'Home', onClick: () => onNavClick('home') },
        { text: 'About', onClick: () => onNavClick('about') },
        { text: 'Event', onClick: () => onNavClick('eventDetails') },
        { text: '18 Roses', onClick: () => onNavClick('roses') },
        { text: '18 Candles', onClick: () => onNavClick('candles') },
        { text: '18 Blue Bills', onClick: () => onNavClick('blueBills') },
        { text: '18 Treasure', onClick: () => onNavClick('treasure') },
        { text: 'RSVP', onClick: () => onNavClick('rsvp') },
    ];

    return (
        <GatsbyNavBar position="fixed" elevation={0}>
            <GatsbyToolbar disableGutters>
                {isMobile ? (
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: 0, padding: 0 }}>
                        <MobileMenuButton
                            aria-label="menu"
                            onClick={handleClick}
                            size="large"
                        >
                            <MenuIcon fontSize="large" />
                        </MobileMenuButton>
                        <GatsbyMenu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            {menuItems.map((item, index) => (
                                <GatsbyMenuItem key={index} onClick={() => { item.onClick(); handleClose(); }}>
                                    {item.text}
                                </GatsbyMenuItem>
                            ))}
                        </GatsbyMenu>
                    </Box>
                ) : (
                    menuItems.map((item, index) => (
                        <GatsbyButton key={index} onClick={item.onClick} disableRipple>
                            {item.text}
                        </GatsbyButton>
                    ))
                )}
            </GatsbyToolbar>
        </GatsbyNavBar>
    );
};

export default NavBar;
