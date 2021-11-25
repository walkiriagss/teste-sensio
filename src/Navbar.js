import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Logo from './logo.png';
import './Navbar.css';

export default function NavTabs() {

  return (
    <Box sx={{ width: '100%' }} className="navBar">
      <Tabs aria-label="nav tabs example">
        <img src={Logo} className="imgLogo"></img>
        <Tab label="Clientes"href="/"></Tab>
        <Tab label="Cadastrar" href="/new"></Tab>
      </Tabs>
    </Box>
  );
}
