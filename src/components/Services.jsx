import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaPaintBrush, FaMobileAlt, FaRobot, FaBookOpen } from 'react-icons/fa';

const Services = () => {
  const servicesList = [
    {
      title: 'Custom Web Development',
      description: 'Building responsive and scalable web apps using React and Next.js, focused on seamless user experiences.',
      icon: <FaLaptopCode size={40} />,
      color: '#00e676'
    },
    {
      title: 'Backend & API Development',
      description: 'Designing secure backend architectures and scalable RESTful APIs using Node.js and Django for flawless performance.',
      icon: <FaServer size={40} />,
      color: '#b388ff'
    },
    {
      title: 'UI/UX & Frontend Polish',
      description: 'Transforming complex interfaces into intuitive, pixel-perfect designs with dynamic animations and high performance.',
      icon: <FaPaintBrush size={40} />,
      color: '#ff4081'
    },
    {
      title: 'Mobile App Development',
      description: 'Building smooth, engaging native and cross-platform mobile apps, from initial concept to App Store deployment.',
      icon: <FaMobileAlt size={40} />,
      color: '#29b6f6'
    },
    {
      title: 'AI SaaS Solutions',
      description: 'Developing AI-powered SaaS platforms by integrating LLMs and custom ML pipelines to automate workflows.',
      icon: <FaRobot size={40} />,
      color: '#ffb300'
    },
    {
      title: 'Research Paper Writing',
      description: 'Crafting high-quality research papers and technical documentation, from methodology design to manuscript publication.',
      icon: <FaBookOpen size={40} />,
      color: '#f06292'
    }
  ];

  return (
    <Box component="section" id="services" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          Services
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 8, fontWeight: 400, maxWidth: '800px' }}>
          Delivering high-quality, tailored technical solutions for your business.
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {servicesList.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.05)',
                  '&:hover': {
                    borderColor: service.color,
                    boxShadow: `0 10px 40px -10px ${service.color}33`,
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box sx={{ color: service.color, mb: 3 }}>
                  {service.icon}
                </Box>
                
                <Typography variant="h4" component="h3" sx={{ mb: 2, color: 'text.primary', fontWeight: 600, fontSize: '1.5rem' }}>
                  {service.title}
                </Typography>
                
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {service.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
