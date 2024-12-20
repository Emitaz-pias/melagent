import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import NotificationsIcon from '@mui/icons-material/Notifications';

const PayementNavbar = () => {
    const appBarStyles = {
        backgroundColor: 'black',        
    };

    return (
        <Box>
            <CssBaseline />
            <AppBar style={appBarStyles}>
                <Toolbar>
                    {/* Logo */}
                    <Typography sx={{ order: { xs: 1, lg: 1 } }} variant="h3" component="div">
                        {/* <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                            <Box
                                component={'img'}
                                sx={{
                                    width: { xs: '2em', lg: '2.8em' },
                                    paddingBottom: { lg: '0.1em', xs: '0.2em' }
                                }}
                                src={logo}
                                alt="logo"
                            />
                        </Link> */}
                    </Typography>

                    {/* Navigation Links */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'end',
                            color: 'white',
                            order: { xs: 2, lg: 2 },
                            flexGrow: 1
                        }}
                    >                        
                        <MenuItem>
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                    fontStyle: 'italic',
                                    fontSize: '1em',
                                    fontWeight: 'bold'
                                }}
                                to="#"
                            >
                                <NotificationsIcon />
                            </Link>
                        </MenuItem>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
};

export default PayementNavbar;
