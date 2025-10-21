import React from 'react';
import { Box, Grid, Stack } from '@mui/material';
import './App.css'
import Card from './Card.jsx';
import YoutubeLivestream from './components/YoutubeLiveStream.jsx';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

function App() {

  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // YouTube livestream links for the cards
  const _UWLakeWashingtonLiveStream = "https://www.youtube.com/embed/xVqbVmZw8qk?si=9TbSFlysyCBF7LTU";
  const _UWContinuumCollegeCam = "https://www.youtube.com/embed/4cgSE12k9Sc?si=Vx05CrvskjUd9sB5";
  const _SeaTacAirPortMtRainierCam = "https://www.youtube.com/embed/RGP247XSw78?si=2wyvnXui4x2gPNX4";
  const _WenatcheeValley = "https://www.youtube.com/embed/H2Z8qMobF_w?si=KPXiqZlyi-HS2m_6";
  const _RedSquareCam = "https://www.youtube.com/embed/tcExTFC3Jdo?si=IZI1SjlqaSA95VDy";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Datom
          </Typography>
          <div>
            <Typography variant="body1">{currentTime.toLocaleTimeString()}</Typography>
            <Typography variant="body2">{currentTime.toLocaleDateString()}</Typography>
          </div>
        </Toolbar>
      </AppBar>

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
              <YoutubeLivestream url={_RedSquareCam} />
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
