import React from 'react';
import { Box, Typography, Button, Stack, IconButton, Grid, Avatar, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import profileImg from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <Box component="section" id="about" sx={{ pt: { xs: 2, md: 4 }, pb: { xs: 8, md: 12 } }}>
      <Grid container spacing={6} alignItems="center" component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>

          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(0, 230, 118, 0.1)', px: 2, py: 1, borderRadius: '50px', mb: 3, border: '1px solid rgba(0, 230, 118, 0.3)' }}>
              <motion.div
                animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#00e676', marginRight: 12, boxShadow: '0 0 10px #00e676' }}
              />
              <Typography variant="body2" sx={{ color: '#00e676', fontWeight: 600, letterSpacing: '0.5px' }}>
                Available for Freelance & Full-time role
              </Typography>
            </Box>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.1, mb: 2, color: 'text.primary' }}>
              Hi, I'm <br />
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #b388ff 0%, #805acb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Aditya Mishra
              </Box>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 500, color: 'text.secondary', mb: 2, minHeight: { xs: '70px', md: '48px' } }}>
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'AI SaaS Developer',
                  2000,
                  'Freelance Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: '#b388ff', fontWeight: 600 }}
              />
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', mb: 5, mx: { xs: 'auto', md: 0 }, fontSize: '1.1rem', lineHeight: 1.7 }}>
              I specialize in end-to-end full-stack web development. I am passionate about transforming complex business requirements into elegant, high-performance software solutions that drive real-world impact for my clients.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent={{ xs: 'center', md: 'flex-start' }} mb={5}>
              <Button variant="contained" color="primary" href="mailto:adityamishraniet2023@gmail.com" size="large">
                Let's Work Together
              </Button>
              <Button
                variant="outlined"
                href="/resume.pdf"
                target="_blank"
                size="large"
                startIcon={<DownloadIcon />}
                sx={{
                  color: 'text.primary',
                  border: '2px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(179,136,255,0.1)',
                    boxShadow: '0 8px 25px -5px rgba(179,136,255,0.3)',
                    transform: 'translateY(-3px)'
                  }
                }}
              >
                View Resume
              </Button>
            </Stack>
          </motion.div>


        </Grid>

        <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <Box sx={{ position: 'relative' }}>

              <Avatar
                src={profileImg}
                alt="Aditya Mishra"
                imgProps={{ fetchpriority: 'high', loading: 'eager' }}
                sx={{
                  width: { xs: 260, md: 340 },
                  height: { xs: 260, md: 340 },
                  borderRadius: '32px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
