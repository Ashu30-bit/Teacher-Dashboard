import React from 'react';

import { Drawer, List, ListItem, ListItemIcon, ListItemButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  return (
   
      <List className="flex flex-col bg-blue-100
 justify-between w-20 border-r border-transparent shadow-2xl">

        <div className=''>

          <ListItem >
            <ListItemButton><ListItemIcon className="text-white "><DashboardIcon /></ListItemIcon></ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton><ListItemIcon className="text-white"><CalendarTodayIcon /></ListItemIcon></ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton><ListItemIcon className="text-white"><AssignmentIcon /></ListItemIcon></ListItemButton>
          </ListItem>

        </div>

        <div>

          <ListItem>
            <ListItemButton><ListItemIcon className="text-white"><LogoutIcon /></ListItemIcon></ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton><ListItemIcon className="text-white"><SettingsIcon /></ListItemIcon></ListItemButton>
          </ListItem>

        </div>

      </List>
    
  );

}