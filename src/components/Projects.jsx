import React from 'react';
import { Box, Typography, Chip, Grid, IconButton, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      title: 'Fitforge',
      date: '2026',
      description: 'AI-powered workout tracking, real-time pose analysis, and gamified fitness coaching. Built as a unified application to help users maintain proper form and stay motivated.',
      tech: ['Next.js', 'AI', 'Web AI'],
      github: 'https://github.com/aadityaa2023',
      live: 'https://fitforge-ruddy.vercel.app/',
    },
    {
      title: 'Sanil Express',
      date: '2026',
      description: 'A modern, responsive porter and logistics website built to streamline delivery services and connect customers with reliable transport solutions.',
      tech: ['React', 'Web Technologies'],
      github: 'https://github.com/aadityaa2023',
      live: 'https://sanilexpress.netlify.app/',
    },
    {
      title: 'LeQ Audio',
      date: 'Sept. 2024',
      description: 'An audio-based learning platform designed and built for smooth, focused, and distraction-free learning. Implemented backend logic for audio content management, user handling, and seamless playback integration.',
      tech: ['Django', 'Python'],
      github: 'https://github.com/aadityaa2023',
      playstore: 'https://play.google.com/store/apps/details?id=com.leq.audio',
    },
    {
      title: 'IntelliHub',
      date: 'Nov. 2025',
      description: 'A unified platform for doing all the AI work. Built using Django framework and MySQL. Implemented with the help of open source LLM APIs like Gemini, Perplexity, Qwen etc.',
      tech: ['Django', 'MySQL', 'LLM APIs'],
      github: 'https://github.com/aadityaa2023',
    },
  ];

  return (
    <Box id="projects" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" sx={{ mb: 8, display: 'flex', alignItems: 'center' }}>
          Featured Work
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {projectList.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ height: '100%' }}
            >
              <Paper 
                sx={{ 
                  p: { xs: 3, md: 4 }, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  '&:hover': {
                    borderColor: 'rgba(179,136,255,0.3)',
                    boxShadow: '0 10px 40px -10px rgba(179,136,255,0.1)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Featured Project
                  </Typography>
                  <Box>
                    {project.github && (
                      <IconButton href={project.github} target="_blank" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', backgroundColor: 'rgba(179,136,255,0.1)' } }}>
                        <GitHubIcon />
                      </IconButton>
                    )}
                    {project.live && (
                      <IconButton href={project.live} target="_blank" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', backgroundColor: 'rgba(179,136,255,0.1)' }, ml: 1 }}>
                        <OpenInNewIcon />
                      </IconButton>
                    )}
                    {project.playstore && (
                      <IconButton href={project.playstore} target="_blank" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', backgroundColor: 'rgba(179,136,255,0.1)' }, ml: 1 }}>
                        <FaGooglePlay size={18} />
                      </IconButton>
                    )}
                  </Box>
                </Box>
                
                <Typography variant="h4" component="h3" sx={{ mb: 2, color: 'text.primary', fontWeight: 600 }}>
                  {project.title}
                </Typography>
                
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1rem', lineHeight: 1.6, maxWidth: '800px' }}>
                  {project.description}
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 'auto' }}>
                  {project.tech.map((tech, idx) => (
                    <Typography key={idx} variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, fontFamily: 'monospace', fontSize: '0.9rem' }}>
                      {tech}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
