import React from 'react';
import { Box, Grid, Stack } from '@mui/material';
import './App.css'
import Card from './Card.jsx';
import YoutubeLivestream from './components/YoutubeLiveStream.jsx';

function App() {

  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // YouTube livestream links for the cards
  const _UWLakeWashingtonLiveStream = "https://www.youtube.com/embed/x-Adyqr58NE?si=ne_CfIwp7LwJPxlL";
  const _UWContinuumCollegeCam = "https://www.youtube.com/embed/4cgSE12k9Sc?si=Vx05CrvskjUd9sB5";
  const _SeaTacAirPortMtRainierCam = "https://www.youtube.com/embed/RGP247XSw78?si=2wyvnXui4x2gPNX4";
  const _WenatcheeValley = "https://www.youtube.com/embed/H2Z8qMobF_w?si=KPXiqZlyi-HS2m_6";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <header>
        <h1>Datom</h1>
        <div>
          <p>{currentTime.toLocaleTimeString()}</p>
          <p>{currentTime.toLocaleDateString()}</p>
        </div>
      </header>

      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Card>
              <YoutubeLivestream url={_UWLakeWashingtonLiveStream} />
            </Card>
            <Card>
              <YoutubeLivestream url={_UWContinuumCollegeCam} />
            </Card>
            <Card>
              <YoutubeLivestream url={_SeaTacAirPortMtRainierCam} />
            </Card>
            <Card>
              <YoutubeLivestream url={_WenatcheeValley} />
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            circle radius around your location with the plans in the area
          </Grid>
          <div>
            <strong>nearest aircraft information </strong>
            <></>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div>
            <div>
              weekly forecast
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App
