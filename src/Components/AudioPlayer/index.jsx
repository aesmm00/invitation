import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, Slider } from '@mui/material';
import { PlayArrow, Pause, VolumeUp, VolumeDown, VolumeOff } from '@mui/icons-material';
import backgroundMusic from '../../assets/music/Lana Del Rey - Young and Beautiful (from The Great Gatsby Soundtrack).mp3';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume / 100;
      
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.warn('Autoplay was prevented:', error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const muteToggle = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
    }
  };

  return (
    <Box 
      sx={{ 
        position: 'fixed', 
        bottom: 20, 
        right: 20, 
        zIndex: 1000, 
        backgroundColor: 'rgba(0,0,0,0.7)', 
        borderRadius: 2, 
        p: 2 
      }}
    >
      <audio 
        ref={audioRef} 
        src={backgroundMusic} 
        loop 
        autoPlay
      />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={togglePlay} color="primary">
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <IconButton onClick={muteToggle} color="primary">
          {volume === 0 ? <VolumeOff /> : volume < 50 ? <VolumeDown /> : <VolumeUp />}
        </IconButton>
        <Slider
          value={volume}
          onChange={handleVolumeChange}
          aria-labelledby="continuous-slider"
          sx={{ width: 100, ml: 2, color: '#CF0A0A' }}
        />
      </Box>
    </Box>
  );
};

export default AudioPlayer;
