import React from 'react';
import { Box, Typography, Grid, Paper, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      period: '2024 - Present',
      highlights: [
        'Partnered with clients to design, build, and deploy custom full-stack web applications tailored to specific business needs.',
        'Managed end-to-end project lifecycles including requirement gathering, UI/UX prototyping, database modeling, and scalable deployment.',
        'Delivered highly responsive and performant user interfaces, focusing on conversion rates and seamless user experiences.'
      ],
      projects: [
        { name: 'LeQ Audio', link: 'https://leqaudio.com', playstore: 'https://play.google.com/store/apps/details?id=com.leq.audio' },
        { name: 'Learn E-Quick Intern', link: 'https://intern.learnequick.com/' }
      ]
    }
  ];

  return (
    <Box id="experience" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" sx={{ mb: 8, display: 'flex', alignItems: 'center' }}>
          Experience
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {experiences.map((exp, index) => (
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
                  borderColor: 'primary.main',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 2 }}>
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 600, color: 'text.primary', maxWidth: '80%' }}>
                    {exp.role}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 600, mt: { xs: 1, sm: 0 }, backgroundColor: 'rgba(179,136,255,0.1)', px: 1.5, py: 0.5, borderRadius: 1 }}>
                    {exp.period}
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2, fontWeight: 400 }}>
                  {exp.company}
                </Typography>
                <Box component="ul" sx={{ color: 'text.secondary', pl: 2, mb: 3, '& li': { mb: 1, lineHeight: 1.7 } }}>
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>
                      <Typography variant="body1">{highlight}</Typography>
                    </li>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {exp.projects.map((project, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.03)', px: 2, py: 1, borderRadius: 1, border: '1px solid rgba(255,255,255,0.05)' }}>
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, mr: 1 }}>
                        {project.name}
                      </Typography>
                      <IconButton href={project.link} target="_blank" size="small" sx={{ color: 'primary.main', p: 0.5 }}>
                        <OpenInNewIcon fontSize="small" />
                      </IconButton>
                      {project.playstore && (
                        <IconButton href={project.playstore} target="_blank" size="small" sx={{ color: 'primary.main', p: 0.5 }}>
                          <FaGooglePlay size={14} />
                        </IconButton>
                      )}
                    </Box>
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

export default Experience;
