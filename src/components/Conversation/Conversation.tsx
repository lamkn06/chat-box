import SendIcon from '@mui/icons-material/Send';
import { Button, Divider, IconButton, InputBase, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';

import { MessageLeft } from '../Message/MessageLeft';
import { MessageRight } from '../Message/MessageRight';

export const Conversation = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const socket = new WebSocket('ws://localhost:3001');

  useEffect(() => {
    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    socket.onmessage = (event) => {
      console.log(event.data);
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => { 
    socket.send(JSON.stringify('hjh'));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        sx={{
          padding: 3,
          borderRadius: 2,
          marginBottom: 2,
        }}
      >
        <MessageLeft />
        <MessageRight />
      </Paper>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Input"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions"  onClick={() => sendMessage()}>
          <SendIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};
