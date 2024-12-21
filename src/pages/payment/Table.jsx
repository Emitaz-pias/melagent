import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const SimpleTable = () => {
  const [copied, setCopied] = useState({}); // Store which row and field was copied

  const rows = [
    { name: 'USDT (TRC-20)', address: 'TEqK7v4NHogX6efRPkZNEqBGiQP8iuACK1' },
    { name: 'USDT (BEP-20)', address: '0x92428ace12c166bf3f48d423760632dca610aa0b' },
    { name: 'BTC', address: '121NzRLUiSw6xPBP6ug2Fh2nJJb7zLbFx9' },
    { name: 'ETH', address: '0x92428ace12c166bf3f48d423760632dca610aa0b' },
  ];

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ text, field }); // Set copied field and text
      setTimeout(() => setCopied({}), 2000); // Clear "Copied!" after 2 seconds
    });
  };

  return (
    <Box sx={{ maxWidth: '100vw', overflowX: 'auto' }}> {/* Wrapper to allow horizontal scroll on small screens */}
      <TableContainer component={Paper}>
        <Table aria-label="simple table" sx={{ minWidth: 300 }}> {/* Adjust minWidth */}
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell style={{ wordBreak: 'break-all' }}>
                  {row.address}
                  <Tooltip title={copied.field === `address-${index}` ? "Copied!" : "Copy"} arrow>
                    <IconButton
                      onClick={() => handleCopy(row.address, `address-${index}`)}
                      aria-label="copy address"
                      sx={{ ml: 1 }}
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SimpleTable;
