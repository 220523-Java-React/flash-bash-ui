import './App.css';
import Navbar from './components/Navbar'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import Error from "./components/Error";
import Routes from './security/Routes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

function App() {

  const [appUser, updateAppUser] = useState();
  const [error, updateError] = useState(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar user={appUser} />
      <Routes appUser={appUser} updateAppUser={updateAppUser} updateError={updateError} />

      {error && 
        <Error 
            error={error} 
            open={!!error} 
            updateOpen={() => updateError(null)} />}
    </ThemeProvider>
  );
}


export default App;
