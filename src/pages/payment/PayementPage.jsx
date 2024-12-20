// import { Box } from '@mui/material';
// import React, { useState } from 'react';
// import PaymentNavbar from './PaymentNavbar'

// const PayementPage = () => {

//     return (
//         <Box sx={{backgroundColor:'white'}}>
//         <PaymentNavbar/>       

        
//         </Box>
//     );
// };

// export default PayementPage;

import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Card,
 Grid,
  CardContent,
  Modal,
  IconButton,
  Alert,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PaymentNavbar from "./PaymentNavbar";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { FaEthereum } from "react-icons/fa";
import SelectTabs from './Tabs';
import DepositForm from './DepositForm';
const PaymentPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [reveal,setReveal] =useState(false)
  const [playerId, setPlayerId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  // Dummy user data for login
  const users = [
    { playerId: "player123", password: "password123" },
    { playerId: "player456", password: "password456" },
  ];

  // Dummy payment addresses
  const paymentOptions = [
    { name: "Bitcoin", icon:CurrencyBitcoinIcon,address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa" },
    { name: "Ethereum",icon:FaEthereum, address: "0x3f4e0663f1dd4af5b82817bc40c7d21a59f9ba6c" },
  ];

  // Handle login validation
  const handleLogin = () => {
    const user = users.find(
      (u) => u.playerId === playerId && u.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid Player ID or Password");
    }
  };

  const handlePaymentClick = (address) => {
    setSelectedAddress(address);
    setOpenModal(true);
  };

  const handleCopyAddress = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(selectedAddress)
        .then(() => {
          alert("Address copied to clipboard!");
        })
        .catch((err) => {
          alert("Failed to copy address. Please copy it manually.");
          console.error("Clipboard error:", err);
        });
    } else {
      // Fallback for browsers where clipboard API is not available
      const textarea = document.createElement("textarea");
      textarea.value = selectedAddress;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        alert("Address copied to clipboard!");
      } catch (err) {
        alert("Failed to copy address. Please copy it manually.");
        console.error("Fallback clipboard error:", err);
      }
      document.body.removeChild(textarea);
    }
  };
  
  return (
    <Container height="80vh">
      <PaymentNavbar />
      {!isLoggedIn ? (
        <Box maxWidth="sm" sx={{ mt: 5, mb: 2 }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <TextField
            fullWidth
            label="Player ID"
            variant="outlined"
            margin="normal"
            value={playerId}
            onChange={(e) => setPlayerId(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"            
            fullWidth
            onClick={handleLogin}
            sx={{ mt: 2,backgroundColor:'#FEBD02' }}
          >
            Log In
          </Button>
        </Box>
      ) : (
        <Box sx={{backgroundColor:'gray',padding:'0.5em',borderRadius:'0.3em'}}>
          {/* <Box  component={'h1'} >Crypto Top-up</Box> */}
         <Box textAlign={'center'} onClick={() => setReveal(!reveal)}  sx={{cursor:'pointer',textDecoration:'underline'}} component={'h5'} color='blue'  >Click To Reveal Wallets</Box>
        {reveal?<SelectTabs/>:<DepositForm/>}

        </Box>
       
      )}

      {/* Modal for QR Code and Address */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="payment-modal-title"
        aria-describedby="payment-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width:'80vw',
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            id="payment-modal-title"
            variant="h6"
            component="h5"
            gutterBottom
          >
            Payment Address
          </Typography>
          <Typography id="payment-modal-description" sx={{}}>
            {selectedAddress}
            <IconButton onClick={handleCopyAddress}>
              <ContentCopyIcon />
            </IconButton>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
            }}
          >
            {/* QR Code Placeholder */}
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${selectedAddress}`}
              alt="QR Code"
            />
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default PaymentPage;
