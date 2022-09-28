import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NextPage } from 'next';
import AnchorLink from "react-anchor-link-smooth-scroll";

const drawerWidth = 240;
const navzao = [
  { title: 'Comprar produtos', route: '#products' },
  { title: 'Sobre o Négocio', route: '#about' },
  { title: 'Cadastrar', route: '#register' },
  { title: 'Contato', route: '#contact' },
]

const NavBar: NextPage = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
      <Typography variant="h6" sx={{ my: 2 }} style={{ color: '#fff' }}>
        Omnilife
      </Typography>
      <Divider style={{ background: '#fff' }} />
      <List style={{ display: 'flex', flexDirection: 'column' }}>
        {navzao.map((item, index) => (
          <Button key={index} >
            <AnchorLink style={{ textDecoration: "none", color: '#fff' }}
              offset="120"
              href={item.route}>
              {item.title}
            </AnchorLink>
          </Button>
        ))}
      </List>
    </Box>
  );

  return (
    <Box id="navBar" sx={{ display: 'flex' }}>
      <AppBar id='burgernavBar' component="nav" style={{ background: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            OL
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Omnilife<br />Distribuidor Independente
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            {navzao.map((item, index) => (
              <Button key={index} >
                <AnchorLink style={{ textDecoration: "none", color: '#fff' }}
                  offset="120"
                  href={item.route}>
                  {item.title}
                </AnchorLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'black' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}


export default NavBar;