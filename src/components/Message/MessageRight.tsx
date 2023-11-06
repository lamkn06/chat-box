import { Avatar, Grid } from '@mui/material';
import Box from '@mui/material/Box';

export const MessageRight = () => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              color: '#000',
              padding: 2,
              boxShadow:
                '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            }}
          >
            A good example of a paragraph contains a topic sentence, details and
            a conclusion. 'There are many different kinds of animals that live
            in China. Tigers and leopards are animals that live in China's
            forests in the north. In the jungles, monkeys swing in the trees and
            elephants walk through the brush.
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Avatar alt="Remy Sharp"></Avatar>
        </Grid>
      </Grid>
    </Box>
  );
};
