import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import logo from '../assets/header/logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/service' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  return (
    // <AppBar
    //   position="static"
    //   sx={{
    //     background: '#000',
    //     boxShadow: 'none',
    //     p: 2,
    //     zIndex: 1201,
    //     minHeight: '90px',
    //     borderBottom: '1px solid rgba(255,255,255,0.05)',
    //   }}
    // >
    <AppBar
  position="fixed"
  sx={{
    background: 'rgba(0, 0, 0, 0.3)', // Transparent dark tint
    backdropFilter: 'blur(10px)',     // Optional: soft blur behind header
    boxShadow: 'none',
    p: 2,
    zIndex: 1201,
    minHeight: '90px',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
  }}
>

      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ 
                height: 70, 
                marginRight: 8, 
                cursor: 'pointer'
              }} 
            />
          </Link>
        </Box>

        {/* Mobile Hamburger */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setDrawerOpen(true)}
            sx={{ ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: isActive(link.to) ? '#ff914d' : '#fff',
                fontWeight: 500,
                fontSize: 16,
                textDecoration: 'none',
                margin: '0 12px',
                cursor: 'pointer',
              }}
            >
              {link.label}
            </Link>
          ))}
        </Box>

        {/* Desktop Button */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button
            variant="contained"
            component="a"
            href="https://wa.link/cmzzvq"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: '#ff914d',
              color: '#fff',
              borderRadius: 999,
              px: 3,
              ml: 2,
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': { background: '#ff914d', opacity: 0.9 },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { background: 'rgba(20,20,20,0.98)', color: '#fff' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            p: 2,
            minHeight: 64,
          }}
        >
          <IconButton
            onClick={() => setDrawerOpen(false)}
            color="inherit"
            sx={{ ml: 'auto' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ width: 220 }}>
          {navLinks.map(({ label, to }) => (
            <ListItem key={label} disablePadding>
              <Link
                to={to}
                style={{
                  textDecoration: 'none',
                  width: '100%',
                }}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemButton
                  sx={{
                    color: isActive(to) ? '#ff914d' : '#fff',
                    fontWeight: isActive(to) ? 600 : 400,
                  }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}

          <ListItem>
            <Button
              variant="contained"
              fullWidth
              component="a"
              href="https://wa.link/cmzzvq"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: '#ff914d',
                color: '#fff',
                borderRadius: 999,
                px: 3,
                mt: 2,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': { background: '#ff914d', opacity: 0.9 },
              }}
              onClick={() => setDrawerOpen(false)}
            >
              Get in Touch
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
