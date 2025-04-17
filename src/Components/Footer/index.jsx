import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#000000',
  color: '#FFFFFF',
  padding: theme.spacing(3, 0),
  borderTop: '1px solid #CF0A0A',
}));

const FooterContent = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const FooterText = styled(Typography)({
  fontFamily: '"Decoment", sans-serif',
  fontSize: '0.9rem',
});

const FooterLink = styled(Link)({
  color: '#CF0A0A',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <FooterContent>
          <FooterText>
            © {new Date().getFullYear()} Adelpha Ellouise's 18th Birthday Celebration
          </FooterText>
          <Box>
            <FooterLink href="#" sx={{ mr: 2 }}>Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Use</FooterLink>
          </Box>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
