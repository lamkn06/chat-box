import { Avatar, Grid } from '@mui/material';
import Box from '@mui/material/Box';

interface Props {
  message: string;
  name: string;
}

export const MessageRight = (props: Props) => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={11}>
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
            {props.message}
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Avatar alt={props.name}>{props.name.charAt(0)}</Avatar>
        </Grid>
      </Grid>
    </Box>
  );
};
