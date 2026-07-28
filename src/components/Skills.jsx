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
  SiOpencv,
  SiElectron
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'SQL', icon: <FaDatabase /> },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'React Native', icon: <TbBrandReactNative /> },
        { name: 'Electron', icon: <SiElectron /> },
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ]
    },
    {
      title: 'Tools & Machine Learning',
      skills: [
        { name: 'Git', icon: <SiGit /> },
        { name: 'Linux', icon: <SiLinux /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'OpenCV', icon: <SiOpencv /> },
      ]
    }
  ];

  return (
    <Box component="section" id="skills" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" sx={{ mb: 8, display: 'flex', alignItems: 'center' }}>
          Technical Skills
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {skillCategories.map((category, catIndex) => (
          <Grid item xs={12} md={6} key={catIndex}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * catIndex }}
              style={{ height: '100%' }}
            >
              <Paper sx={{ p: { xs: 3, md: 4 }, height: '100%', background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}>
                <Typography variant="h5" sx={{ mb: 4, color: 'text.primary', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 2 }}>
                  {category.title}
                </Typography>
                <Grid container spacing={2}>
                  {category.skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          p: 1.5,
                          backgroundColor: 'rgba(255,255,255,0.02)',
                          border: '1px solid rgba(255,255,255,0.05)',
                          transition: 'all 0.2s ease-in-out',
                          borderRadius: 2,
                          '&:hover': {
                            backgroundColor: 'rgba(179,136,255,0.1)',
                            borderColor: 'rgba(179,136,255,0.3)',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        <Box sx={{ color: 'secondary.main', fontSize: '1.2rem', display: 'flex', mr: 2 }}>
                          {skill.icon}
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary' }}>
                          {skill.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
