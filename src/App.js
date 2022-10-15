import React from 'react';
import { Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import VerExtra from './Componentes/VerExtra';
import VerJugador from './Componentes/VerJugador';
import Jugador from './Componentes/Jugador';
import Extras from './Componentes/Extras';
import Titulo_Mundial from './Imagenes/Titulo_Mundial.png';
import Mascota from './Imagenes/Mascota.png';
import './App.css';
import './Estilos/EstiloBotones.css';

const drawerWidth = 220;

export default  function App() {

  const drawer = (
    <div>
      <Toolbar sx={{marginTop:-8}}  />
      <img
          className='Mascota'
          src={Mascota} alt='Mascota mundial' />
      < Divider color={'bisque'} />
      <List>
        {[{ text: 'Ingresar Jugador', href: '/', icono: PersonAddAlt1Icon }, 
        { text: 'Ingresar Extras', href: '/extras/agregar', icono: ShieldOutlinedIcon }, 
        { text: 'Ver Jugadores', href: '/jugadores', icono: VisibilityOutlinedIcon },
        { text: 'Ver Extras', href: '/extras', icono: VisibilityOutlinedIcon }].map((e) => (
          <ListItem key={e.text} disablePadding>
            <ListItemButton href={e.href} >
              <ListItemIcon>
                <e.icono sx={{ color: 'gold' }} fontSize='large' />
              </ListItemIcon>
              <ListItemText primary={e.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      < Divider color='bisque' />
    </div>
  );

  return (
    <div className='App' sx={{ width: { xs: 'fit-content', md: 'unset' } }} >
      <Box sx={{ marginTop: 0, background: 'rgb(80, 8, 8)', maxHeight: 131 }} display='flex'
          justifyContent='space-around' alignItems='center' alignContent='space-around' flexDirection='row' >
        <img className='Titulo'
          src={Titulo_Mundial} alt='Mundial' />
      </Box>
      < Divider color='bisque' />
      <Routes>
        <Route path='/' element={<Jugador />} />
        <Route path='/extras' element={<VerExtra />} />
        <Route path='/jugadores' element={<VerJugador />} />
        <Route path='/extras/agregar' element={<Extras />} />
      </Routes>
      <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='Ingresar Jugadores' >
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, color: 'bisque', background: 'rgb(80, 8, 8)', borderColor: 'bisque' },
          }}
          open >
          {drawer}
        </Drawer>
      </Box>
    </div>
  );
}
