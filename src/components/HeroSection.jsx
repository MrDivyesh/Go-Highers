import React from 'react';
import { Box, Typography } from '@mui/material';
// import rocketImg from '../assets/hero/rocket2.png';
import bgVideo from '../assets/video/hero2.mp4'; // ⬅️ Add your background video file

const HeroSection = () => {
  return (
    <Box sx={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
      {/* Background Video */}
      <Box
        component="video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Overlay Content */}
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          flexDirection: 'row',
        }}
      >
        {/* <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '3rem', sm: '3rem', md: '8vw', lg: '12vw' },
            fontWeight: 700,
            color: '#fff',
            textAlign: 'center',
            // pr: { xs: 0.5, sm: 1, md: 2, lg: 4 },
            zIndex: 3,
            minWidth: { xs: '80px', sm: '100px' },
          }}
        >
          Pure Vision
        </Typography> */}

        <Box sx={{ 
          position: 'relative', 
          width: { xs: '25vw', sm: '20vw', md: '18vw', lg: '15vw' }, 
          height: { xs: '25vw', sm: '20vw', md: '18vw', lg: '15vw' }, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          zIndex: 1, 
          mx: { xs: 1, sm: 2, md: 3 },
        }}>
          {/* <Box
            component="img"
            src={rocketImg}
            alt="Rocket"
            sx={{
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 8px 32px #00aaff88)',
              animation: 'rocketFloat 3s ease-in-out infinite',
              '@keyframes rocketFloat': {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-8px)' },
              },
            }}
          /> */}
        </Box>

        /
      </Box>

      <Box
        className="hero-description"
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          maxWidth: 400,
          zIndex: 4,
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 400 }}>
          We build stunning digital experiences that blend creativity with cutting-edge technology.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
