import React from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { motion } from 'framer-motion';

const Achievements = () => {
  const certificates = [
    'Infosys - React.js web framework',
    'Infosys - Programming in Python',
    'Infosys - Java Programming',
  ];

  return (
    <Box id="achievements" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" sx={{ mb: 8, display: 'flex', alignItems: 'center' }}>
          Achievements
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ height: '100%' }}
          >
            <Paper sx={{ height: '100%', p: { xs: 4, md: 5 }, background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: 'rgba(0,230,118,0.1)', color: 'secondary.main', mr: 2 }}>
                  <EmojiEventsIcon fontSize="medium" />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  Award Winner
                </Typography>
              </Box>

              <Typography variant="h5" sx={{ fontWeight: 500, color: 'text.primary', mb: 1 }}>
                IOT and ECE Project Exhibition
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 3, fontWeight: 500 }}>
                Project: Self Driving Autonomous Vehicle
              </Typography>
              <Box component="ul" sx={{ color: 'text.secondary', pl: 2, '& li': { mb: 2 } }}>
                <li>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    Developed an autonomous vehicle prototype using computer vision for real-time lane detection, obstacle avoidance, and path planning.
                  </Typography>
                </li>
              </Box>
            </Paper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ height: '100%' }}
          >
            <Paper sx={{ height: '100%', p: { xs: 4, md: 5 }, background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Box sx={{ p: 1.5, borderRadius: 2, backgroundColor: 'rgba(179,136,255,0.1)', color: 'primary.main', mr: 2 }}>
                  <WorkspacePremiumIcon fontSize="medium" />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 600, color: 'text.primary' }}>
                  Certifications
                </Typography>
              </Box>
              <List sx={{ mt: 2 }}>
                {certificates.map((cert, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 3 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Box sx={{ color: 'primary.main', fontWeight: 'bold' }}>▹</Box>
                    </ListItemIcon>
                    <ListItemText primary={cert} primaryTypographyProps={{ color: 'text.secondary', fontWeight: 500, fontSize: '1.1rem' }} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Achievements;
