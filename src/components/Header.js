import  React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
// import logo from '../assets/logo.png'

export default function Header() {
const [leftMenu,setLeftMenu] = useState(false);
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" style={{ background:'linear-gradient(to right, #2dcacf,#77b957'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>{ setLeftMenu(!leftMenu)}}
          >
           {leftMenu?<Close/>:
           <MenuIcon />
           } 
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button component="div" sx={{color:'#000'}}>Startup</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}