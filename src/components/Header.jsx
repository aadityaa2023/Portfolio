import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-scroll';

const Header = () => {
  const navItems = [
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Education', href: 'education' },
    { label: 'Achievements', href: 'achievements' },
  ];

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'rgba(10, 25, 41, 0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 1, color: 'primary.main', cursor: 'pointer' }}
          >
            <Link to="about" smooth={true} duration={500} offset={-100}>AM.</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                to={item.href} 
                smooth={true} 
                duration={500} 
                offset={-100}
                spy={true}
                activeClass="active"
              >
                <Button 
                  sx={{ 
                    color: 'text.primary', 
                    ml: 2,
                    '&.active': { color: 'primary.main' },
                    '&:hover': { color: 'primary.main', backgroundColor: 'rgba(0, 230, 118, 0.08)' }
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
