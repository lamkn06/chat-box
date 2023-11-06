import SendIcon from '@mui/icons-material/Send';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useRef, useState } from 'react';

import { MessageLeft } from '../Message/MessageLeft';
import { MessageRight } from '../Message/MessageRight';

interface Props {
  uuid: string;
  name: string;
}

export const Conversation = (props: Props) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    const messages = localStorage.getItem('messages');
    if (!messages) {
      return;
    }
    setMessages(JSON.parse(messages as string));
  }, []);

  const ws = useRef(null) as any;

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080');

    ws.current.onopen = () => {
      console.log('WebSocket connection established.');
    };

    ws.current.onmessage = (event: { data: string }) => {
      const receivedMessage = JSON.parse(event.data);
      const newMessages = messages.concat(receivedMessage);
      setMessages(newMessages);
      localStorage.setItem('messages', JSON.stringify(newMessages));
    };

    return () => {
      ws.current.close();
    };
  }, [messages]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ws.current.send(
      JSON.stringify({
        message: messageInput,
        uuid: props.uuid,
        name: props.name,
      }),
    );
    setMessageInput('');
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
        {messages.length > 0 && (
          <>
            {messages.map((message: any) => {
              if (message.uuid === props.uuid) {
                return (
                  <MessageRight
                    message={message.message}
                    name={message.name}
                    key={message.timestamp}
                  />
                );
              } else {
                return (
                  <MessageLeft
                    message={message.message}
                    name={message.name}
                    key={message.timestamp}
                  />
                );
              }
            })}
          </>
        )}
      </Paper>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Input"
          value={messageInput}
          onChange={(event) => setMessageInput(event.target.value)}
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: '10px' }}
          aria-label="directions"
          type="submit"
        >
          <SendIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};
