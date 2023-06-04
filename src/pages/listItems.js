import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderIcon from '@mui/icons-material/Folder';
import LockIcon from '@mui/icons-material/Lock';
import StarIcon from '@mui/icons-material/Star';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StorageIcon from '@mui/icons-material/Storage';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    <ListItemButton component={Link} to="/allfiles">
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="All Files" />
    </ListItemButton>

    <ListItemButton component={Link} to="/locked">
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      <ListItemText primary="Locked" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon component={Link} to="/starred">
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon component={Link} to="/upload">
        <CloudUploadIcon />
      </ListItemIcon>
      <ListItemText primary="Upload" />
    </ListItemButton>
    
    <ListItemButton>
      <ListItemIcon component={Link} to="/storage">
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="Storage" />
    </ListItemButton>
    
  </React.Fragment>
);
