import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Education = () => {
  const educationList = [
    {
      degree: 'B.Tech in Computer Science and Engineering (IoT)',
      institution: 'Noida Institute of Engineering and Technology (NIET), Greater Noida, U.P.',
      year: '2023 - Pursuing',
      score: 'CGPA: 7.5 / 10.0',
    },
  ];

  return (
    <Box component="section" id="education" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" sx={{ mb: 8, display: 'flex', alignItems: 'center' }}>
          Education
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {educationList.map((edu, index) => (
          <Grid item xs={12} key={index}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  p: { xs: 3, md: 4 },
                  borderLeft: '4px solid',
                  borderColor: index === 0 ? 'primary.main' : 'rgba(255,255,255,0.1)',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 2 }}>
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 600, color: 'text.primary', maxWidth: '80%' }}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: index === 0 ? 'primary.main' : 'text.secondary', fontWeight: 600, mt: { xs: 1, sm: 0 }, backgroundColor: index === 0 ? 'rgba(179,136,255,0.1)' : 'transparent', px: 1.5, py: 0.5, borderRadius: 1 }}>
                    {edu.year}
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1, fontWeight: 400 }}>
                  {edu.institution}
                </Typography>
                <Typography variant="body1" sx={{ color: 'secondary.main', fontFamily: 'monospace' }}>
                  {edu.score}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Education;
