import React from 'react';
import { Box, Typography, Button, Stack, IconButton, Grid, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import profileImg from '../assets/profile.jpg';
import { motion } from 'framer-motion';

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
    <Box id="about" sx={{ py: { xs: 8, md: 12 } }}>
      <Grid container spacing={6} alignItems="center" component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'inline-block', mb: 2, px: 2, py: 0.5, borderRadius: 4, backgroundColor: 'rgba(179,136,255,0.1)', border: '1px solid rgba(179,136,255,0.2)' }}>
              <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Software Engineer
              </Typography>
            </Box>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.1, mb: 2, color: 'text.primary' }}>
              Hi, I'm <br />
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #b388ff 0%, #805acb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Aditya Mishra
              </Box>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 500, color: 'text.secondary', mb: 4 }}>
              I build smart, interconnected systems and craft clean, user-centric interfaces.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', mb: 5, mx: { xs: 'auto', md: 0 }, fontSize: '1.1rem', lineHeight: 1.7 }}>
              I specialize in full-stack web development and IoT solutions. I am passionate about transforming complex problems into elegant, scalable software that drives real-world impact.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent={{ xs: 'center', md: 'flex-start' }} mb={5}>
              <Button variant="contained" color="primary" href="mailto:adityamishraniet2023@gmail.com" size="large">
                Let's Work Together
              </Button>
              <Button variant="outlined" color="primary" href="/resume.pdf" target="_blank" size="large" startIcon={<DownloadIcon />}>
                View Resume
              </Button>
            </Stack>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack direction="row" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <IconButton href="https://github.com/aadityaa2023" target="_blank" sx={{ color: 'text.secondary', backgroundColor: 'rgba(255,255,255,0.03)', '&:hover': { color: '#fff', backgroundColor: 'rgba(255,255,255,0.1)', transform: 'translateY(-3px)' }, transition: 'all 0.2s' }}>
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/aditya-mishra-9bb53827b/" target="_blank" sx={{ color: 'text.secondary', backgroundColor: 'rgba(255,255,255,0.03)', '&:hover': { color: '#fff', backgroundColor: 'rgba(255,255,255,0.1)', transform: 'translateY(-3px)' }, transition: 'all 0.2s' }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="mailto:adityamishraniet2023@gmail.com" sx={{ color: 'text.secondary', backgroundColor: 'rgba(255,255,255,0.03)', '&:hover': { color: '#fff', backgroundColor: 'rgba(255,255,255,0.1)', transform: 'translateY(-3px)' }, transition: 'all 0.2s' }}>
                <EmailIcon />
              </IconButton>
            </Stack>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <Box sx={{ position: 'relative' }}>
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: -20, right: -20, bottom: -20, left: -20, 
                  background: 'linear-gradient(135deg, rgba(179,136,255,0.4) 0%, rgba(0,230,118,0.4) 100%)', 
                  filter: 'blur(40px)', 
                  borderRadius: '50%', 
                  zIndex: -1 
                }} 
              />
              <Avatar
                src={profileImg}
                alt="Aditya Mishra"
                sx={{
                  width: { xs: 260, md: 340 },
                  height: { xs: 260, md: 340 },
                  borderRadius: '30px', // Squircle shape instead of perfect circle
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
