import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { type FC, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { label: 'My Rooms', icon: <MeetingRoomIcon />, path: '/rooms' },
  { label: 'History', icon: <HistoryIcon />, path: '/history' },
  { label: 'Stories', icon: <MenuBookIcon />, path: '/stories' },
];

const DashboardSidebar: FC<{ children?: ReactNode }> = () => {
  return (
    <List>
      {navItems.map(({ label, icon, path }) => (
        <ListItem
          key={label}
          button
          component={Link as React.ElementType}
          to={path}
          selected={location.pathname === path}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  );
};

export default DashboardSidebar;
