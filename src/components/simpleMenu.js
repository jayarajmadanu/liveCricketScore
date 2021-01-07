import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Redirect} from 'react-router-dom'


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenT20 = () => {
    setAnchorEl(null);
  };
  const handleOpenODI = () => {
    setAnchorEl(null);
    <Redirect to='./'></Redirect>
    
  };
  const handleOpenTest = () => {
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton color='inherit'  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon />
        </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenT20}>Twenty20</MenuItem>
        <MenuItem onClick={handleOpenODI}>ODI</MenuItem>
        <MenuItem onClick={handleOpenTest}>First class</MenuItem>
      </Menu>
    </div>
  );
}
