import React from 'react';
import { Box, Stack, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{ py: 4, textAlign: 'center', backgroundColor: 'background.default' }}>
      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <Tooltip title="GitHub" arrow>
          <IconButton aria-label="GitHub Profile" href="https://github.com/aadityaa2023" target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" arrow>
          <IconButton aria-label="LinkedIn Profile" href="https://www.linkedin.com/in/aditya-mishra-9bb53827b/" target="_blank" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email Me" arrow>
          <IconButton aria-label="Email Me" href="mailto:adityamishraniet2023@gmail.com" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
            <EmailIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default Footer;
