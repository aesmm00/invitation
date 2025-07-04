import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@emotion/react';

const shimmer = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 0.8; }
  100% { opacity: 0.4; }
`;

const StyledPaper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'rgba(26, 26, 26, 0.7)',
  border: '1px solid #CF0A0A',
  borderRadius: theme.shape.borderRadius,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"DechoraZone", sans-serif',
  color: '#CF0A0A',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  position: 'relative',
  marginBottom: theme.spacing(2),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '0',
    width: '40px',
    height: '2px',
    background: '#CF0A0A',
    animation: `${shimmer} 3s infinite`,
  }
}));

const SaveTheDateVideo = ({ 
  videoId, 
  title = "Save the Date Video", 
  aspectRatio = "16:9" 
}) => {
  const paddingTop = aspectRatio === "16:9" ? "56.25%" : 
                     aspectRatio === "4:3" ? "75%" : 
                     "56.25%"; // default to 16:9

  return (
    <StyledPaper>
      <StyledTypography variant="h5" sx={{ m: 0, mb: 2 }}>
        {title}
      </StyledTypography>
      <Box sx={{
        width: '100%',
        position: 'relative',
        paddingTop: paddingTop,
        backgroundColor: 'rgba(0,0,0,0.1)',
        border: '1px solid #CF0A0A',
        borderRadius: 1,
        overflow: 'hidden'
      }}>
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}`} 
          title={title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
    </StyledPaper>
  );
};

export default SaveTheDateVideo;
