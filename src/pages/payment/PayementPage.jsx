import { Box } from '@mui/material';
import React, { useState } from 'react';
import PaymentNavbar from './PaymentNavbar'
import SelectTabs from './Tabs';
import DepositForm from './DepositForm';
const PayementPage = () => {
    const [reveal,setReveal] =useState(false)

    return (
        <Box sx={{backgroundColor:'white'}}>
        <PaymentNavbar/>       
        <Box  component={'h1'} >Crypto Top-up</Box>
        <Box textAlign={'center'} onClick={() => setReveal(!reveal)}  sx={{cursor:'pointer',textDecoration:'underline'}} component={'h5'} color='blue'  >Click To Reveal Wallets</Box>
        {reveal?<SelectTabs/>:<DepositForm/>}
        
        </Box>
    );
};

export default PayementPage;