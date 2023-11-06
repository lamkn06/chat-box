import SendIcon from '@mui/icons-material/Send';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import Container from '@mui/material/Container';

import { MessageLeft } from '../Message/MessageLeft';
import { MessageRight } from '../Message/MessageRight';

export const Conversation = () => {
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
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          <SendIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};
