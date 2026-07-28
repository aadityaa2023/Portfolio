import React from 'react';
import { Box, Typography, Chip, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux,
  SiNodedotjs,
  SiTensorflow,
  SiOpencv
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';

const Skills = () => {
  const allSkills = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Django', icon: <SiDjango /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Linux', icon: <SiLinux /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'React Native', icon: <TbBrandReactNative /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'OpenCV', icon: <SiOpencv /> },
  ];

  return (
    <Box id="skills" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" sx={{ mb: 8, display: 'flex', alignItems: 'center' }}>
          Technical Skills
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: 0, background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
          <Grid container spacing={2}>
            {allSkills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    p: 2,
                    borderRadius: 0,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'rgba(179,136,255,0.1)',
                      borderColor: 'rgba(179,136,255,0.3)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Box sx={{ color: 'secondary.main', fontSize: '1.5rem', display: 'flex', mr: 2 }}>
                    {skill.icon}
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary' }}>
                    {skill.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Skills;
