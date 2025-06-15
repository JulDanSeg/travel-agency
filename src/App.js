import logo from './logo.svg';
import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Trips from "./components/Trips";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      textAlign: "center",
      color: "#ffffff",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 300,
      textAlign: "center",
      color: "#ffffff",
    },
  },
});

function App() {
  const [showTrips, setShowTrips] = useState(false);

  const handleButtonClick = () => {
    setShowTrips(true);
    setTimeout(() => {
      document.getElementById("trips-section").scrollIntoView({ behavior: "smooth" });
    }, 100);
  };



  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <video autoPlay loop muted className="video-background">
          <source 
          src="https://videos.pexels.com/video-files/857268/857268-sd_960_506_24fps.mp4" 
          type="video/mp4" 
          />
        </video>
        <div className={`overlay ${showTrips ? "hidden" : ""}`}>
          <Container maxWidth="md">
            <Typography variant="h1">Discover Your Next Adventure</Typography>
            <Typography variant="h5">Explore the world with our exclusive travel packages.</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
              size="large"
              sx={{ mt: 3 }}
            >
              View Trips
            </Button>
          </Container>
        </div>
        {showTrips && (
        <div id="trips-section">
          <Trips />
        </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
