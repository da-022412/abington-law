import { Button, Container, Grid, Hidden } from '@material-ui/core';
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Image from 'next/image';


const content = {
    logo: 'Abington Cole + Ellery'
}

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <header className='header is-white'>
            <Container maxWidth='lg'>
                <Grid container alignItems='center' justify='space-between'>
                    <Grid item xs={4}>
                        <div className='logo-wrap'>
                            <h3 className='logo'>
                                { content.logo }
                            </h3>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <Hidden smDown>
                            <nav className='nav'>
                                <Grid container alignItems='center' justify='flex-end' spacing={1}>
                                    <Grid item>
                                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                            Class Actions<span class="material-icons-outlined">arrow_drop_down</span>
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
                                    <Grid item>
                                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                            Intellectual Property<span class="material-icons-outlined">arrow_drop_down</span>
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
                                    <Grid item>
                                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                            Contact<span class="material-icons-outlined">arrow_drop_down</span>
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
                                    <Grid item>
                                        <span class="material-icons-outlined">facebook</span>
                                    </Grid>
                                    <Grid item>
                                        <Image
                                            src='/images/twitter-brands.svg'
                                            width={24}
                                            height={24}
                                        />
                                    </Grid>
                                </Grid>
                            </nav>
                        </Hidden>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
}

export default Header;