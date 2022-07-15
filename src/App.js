import {Route, Routes, Navigate} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FlashcardsPage from "./pages/FlashcardsPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import Error from "./components/Error";

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
      {error && 
        <Error 
            error={error} 
            open={!!error} 
            updateOpen={() => updateError(null)} />}

      {window.location.pathname != '/login' && !appUser && <Navigate to="/login" />}
      <Routes>
        {appUser && 
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/flashcards" element={<FlashcardsPage />} />
          </>
        }
        <Route path="/login" element={
          <LoginPage 
            updateError={updateError} 
            updateAppUser={updateAppUser} />
        } />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
