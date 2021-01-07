import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import SimpleMenu from './simpleMenu';

const NavBar=()=>{
    return(
        <AppBar position='fixed'>
            <Toolbar>
                <SimpleMenu></SimpleMenu>
                <Typography>live score</Typography>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;