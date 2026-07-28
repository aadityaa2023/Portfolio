import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Education', href: 'education' },
    { label: 'Achievements', href: 'achievements' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#050505', height: '100%', pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ mt: 4 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ display: 'block', mb: 2 }}>
            <Link
              to={item.href}
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass="active"
              style={{ display: 'block', width: '100%', textDecoration: 'none' }}
            >
              <Button sx={{ width: '100%', color: 'text.primary', py: 1.5, fontSize: '1.1rem' }}>
                {item.label}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'rgba(5, 5, 5, 0.85)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 1, color: 'primary.main', cursor: 'pointer' }}
            >
              <Link to="about" smooth={true} duration={500} offset={-100}>AM</Link>
            </Typography>
            
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Box
                  key={item.label}
                  sx={{
                    display: 'inline-block',
                    ml: 2,
                    '& .active button': { color: 'primary.main', fontWeight: 600 }
                  }}
                >
                  <Link
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
                        '&:hover': { color: 'primary.main', backgroundColor: 'rgba(0, 230, 118, 0.08)' }
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: '#050505' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
