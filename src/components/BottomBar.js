import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import NotificationsNone from '@mui/icons-material/NotificationsNone';

export default function BottomBar() {

  return (
    <Box sx={{ width: '100%'}} >
      <BottomNavigation
        style={{ background:'linear-gradient(to right, #23888b,#77b957'}}
      >
        <BottomNavigationAction  icon={<FavoriteBorder sx={{color:'white'}}/>} />
        <BottomNavigationAction  icon={<InfoOutlined sx={{color:'white'}}/>} />        
        <BottomNavigationAction  icon={<NotificationsNone sx={{color:'white'}}/>} />
      </BottomNavigation>
    </Box>
  );
}
