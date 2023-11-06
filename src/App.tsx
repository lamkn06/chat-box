import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Conversation } from './components/Conversation/Conversation';
import { SignIn } from './components/SignIn/SignIn';

function App() {
  return (
    <>
      <ThemeProvider theme={createTheme()}>
        <SignIn />
        <Conversation />
      </ThemeProvider>
    </>
  );
}

export default App;
