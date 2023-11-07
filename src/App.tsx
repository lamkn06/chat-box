import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Conversation } from './components/Conversation/Conversation';
import { SignIn } from './components/SignIn/SignIn';
function App() {
  const [name, setName] = useState('');
  const uuid = uuidv4();

  const handleOnChange = (name: string) => {
    setName(name);
  };

  return (
    <>
      <ThemeProvider theme={createTheme()}>
        <SignIn name={name} onNameChanged={handleOnChange} />
        {name && <Conversation uuid={uuid} name={name} />}
      </ThemeProvider>
    </>
  );
}

export default App;
