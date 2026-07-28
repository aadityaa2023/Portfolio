import React, { useState, useRef } from 'react';
import { Box, Typography, Grid, Paper, TextField, Button, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Replace these with your actual EmailJS keys from https://dashboard.emailjs.com/
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      alert('Please configure your EmailJS keys in Contact.jsx to send emails.');
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setOpenSnackbar(true);
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box component="section" id="contact" sx={{ py: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          Get In Touch
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 8, fontWeight: 400, maxWidth: '800px' }}>
          Have a project in mind or looking for a full-time team member? Let's build something great together.
        </Typography>
      </motion.div>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Paper
              component="form"
              ref={form}
              onSubmit={handleSubmit}
              sx={{
                p: { xs: 3, md: 5 },
                background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: 3
              }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                  }
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                  }
                }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                  }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                sx={{
                  mt: 2,
                  py: 1.5,
                  fontWeight: 600,
                  letterSpacing: '0.5px'
                }}
              >
                Send Message
              </Button>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%', background: 'linear-gradient(135deg, #00e676 0%, #00b248 100%)', color: '#fff' }} variant="filled">
          Thanks for reaching out! I will get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
