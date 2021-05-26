import { Button, Grid } from '@material-ui/core';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const MobileNav = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <nav className='nav'>
            <Grid container alignItems='center' justify='flex-end' spacing={1}>
                <Grid item>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <span class="material-icons-outlined">menu</span>
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        </nav>
    );
}

export default MobileNav;