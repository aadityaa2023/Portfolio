import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaPaintBrush, FaMobileAlt, FaRobot, FaBookOpen } from 'react-icons/fa';

const Services = () => {
  const servicesList = [
    {
      title: 'Custom Web Development',
      description: 'Building responsive, fast, and scalable web applications from scratch using modern frameworks like React and Next.js. I focus on creating seamless user experiences that drive engagement and convert visitors into customers.',
      icon: <FaLaptopCode size={40} />,
      color: '#00e676'
    },
    {
      title: 'Backend & API Development',
      description: 'Designing robust and secure backend architectures using Node.js and Django. I build scalable RESTful APIs, manage databases (SQL/NoSQL), and ensure your application logic runs flawlessly under heavy loads.',
      icon: <FaServer size={40} />,
      color: '#b388ff'
    },
    {
      title: 'UI/UX & Frontend Polish',
      description: 'Transforming complex interfaces into intuitive, accessible, and pixel-perfect designs. I leverage tools like Material-UI and Framer Motion to bring dynamic, high-performance visual experiences to life.',
      icon: <FaPaintBrush size={40} />,
      color: '#ff4081'
    },
    {
      title: 'Mobile App Development',
      description: 'Building native and cross-platform mobile applications that provide smooth, engaging user experiences. From initial concept to App Store deployment, I ensure your mobile presence is fast and reliable.',
      icon: <FaMobileAlt size={40} />,
      color: '#29b6f6'
    },
    {
      title: 'AI SaaS Solutions',
      description: 'Developing AI-powered Software as a Service platforms. I integrate large language models (LLMs) and custom machine learning pipelines to automate workflows and create intelligent, scalable products.',
      icon: <FaRobot size={40} />,
      color: '#ffb300'
    },
    {
      title: 'Research Paper Writing',
      description: 'Crafting high-quality, technically sound research papers and technical documentation. I assist with literature reviews, methodology design, data analysis, and preparing manuscripts for publication.',
      icon: <FaBookOpen size={40} />,
      color: '#f06292'
    }
  ];

  return (
    <Box id="services" sx={{ py: 10 }}>
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
          As a freelance developer, I partner with clients to deliver high-quality technical solutions tailored to their specific business needs.
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
