import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Box } from '@mui/material';

const Layout = ({children}) => {
    return (
        <div>
            <header><Navbar/> </header>
            <Box component='main' sx={{padding:{lg:'0 5.5em',md:'0 2em',sm:"2em",xs:'1em'}}}>{children}</Box>
            <footer></footer>
        </div>
    );
};

export default Layout;