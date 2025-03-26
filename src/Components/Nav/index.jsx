import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const NavBar = ({ onNavClick }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Home', onClick: () => onNavClick('home') },
        { text: 'About', onClick: () => onNavClick('about') },
        { text: '18 Roses', onClick: () => onNavClick('roses') },
        { text: '18 Candles', onClick: () => onNavClick('candles') },
        { text: '18 Blue Bills', onClick: () => onNavClick('blueBills') },
        { text: 'RSVP', onClick: () => onNavClick('rsvp') },
    ];

    return (
        <AppBar style={{ backgroundColor: 'white' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1, color: 'black', fontSize: '1.5rem', letterSpacing: '0.2em' }}>
                    A Night of Glitz & Glamour                
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon style={{ color: 'black' }} />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <List>
                                {menuItems.map((item, index) => (
                                    <ListItem button key={index} onClick={() => { item.onClick(); setDrawerOpen(false); }}>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <>
                        <Button color="inherit" style={{ color: 'black', fontSize: '1.5rem' }} onClick={() => onNavClick('home')}>Home</Button>
                        <Button color="inherit" style={{ color: 'black', fontSize: '1.5rem' }} onClick={() => onNavClick('about')}>About the Debutant</Button>
                        <Button
                            color="inherit"
                            style={{ color: 'black', fontSize: '1.5rem' }}
                            onClick={handleClick}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            Program
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => { onNavClick('roses'); handleClose(); }}>18 ROSES</MenuItem>
                            <MenuItem onClick={() => { onNavClick('candles'); handleClose(); }}>18 CANDLES</MenuItem>
                            <MenuItem onClick={() => { onNavClick('blueBills'); handleClose(); }}>18 BLUE BILLS</MenuItem>
                        </Menu>
                        <Button color="inherit" style={{ color: 'black', fontSize: '1.5rem' }} onClick={() => onNavClick('rsvp')}>RSVP</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;