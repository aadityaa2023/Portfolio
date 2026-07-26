import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Glows */}
      <Box 
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(179,136,255,0.08) 0%, rgba(0,0,0,0) 70%)',
          zIndex: -1,
          borderRadius: '50%',
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(0,230,118,0.05) 0%, rgba(0,0,0,0) 70%)',
          zIndex: -1,
          borderRadius: '50%',
        }}
      />

      <Header />
      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 10, md: 12 }, pb: 6 }}>
        <Container maxWidth="lg">
          <HeroSection />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
