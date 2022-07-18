import './App.css';
import Navbar from './components/Navbar'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, {useEffect, useState} from "react";
import Error from "./components/Error";
import Routes from './security/Routes';
import { Paper } from "@mui/material";
import DesktopImage from './images/desktop-background.jpg'
import MobileImage from './images/mobile-background.jpg'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

function App() {
  const [appUser, updateAppUser] = useState();
  const [error, updateError] = useState(null);
  const [windowWidth, updateWindowWidth] = useState(window.innerWidth);
  const [windowHeight, updateWindowHeight] = useState(window.innerHeight);
  const imageUrl = windowWidth >= 650 ? DesktopImage : MobileImage;

  useEffect(() => {
      function handleWindowResize(){
          updateWindowWidth(window.innerWidth)
          updateWindowHeight(window.innerHeight)
      }

      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize)
      }
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
        <Paper style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
            height: windowHeight
        }}>
            <Navbar user={appUser} />
            <Routes appUser={appUser} updateAppUser={updateAppUser} updateError={updateError} />

            {error &&
                <Error
                    error={error}
                    open={!!error}
                    updateOpen={() => updateError(null)} />}
        </Paper>
    </ThemeProvider>
  );
}


export default App;
