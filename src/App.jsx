import './App.css'
import Card from './Card.jsx';
import YoutubeLivestream from './components/YoutubeLiveStream.jsx';

function App() {

  // YouTube livestream links for the cards
  const _UWLakeWashingtonLiveStream = "https://www.youtube.com/embed/x-Adyqr58NE?si=_voSNpPlcUM7xXxv";
  const _UWContinuumCollegeCam = "https://www.youtube.com/embed/4cgSE12k9Sc?si=Vx05CrvskjUd9sB5";
  const _SeaTacAirPortMtRainierCam = "https://www.youtube.com/embed/RGP247XSw78?si=2wyvnXui4x2gPNX4";
  const _WenatcheeValley = "https://www.youtube.com/embed/H2Z8qMobF_w?si=KPXiqZlyi-HS2m_6";

  return (
    <div>
      <header className="grid grid-cols-6 bg-amber-800"> 
        <h1 className="bg-red-400 col-span-2 col-start-3 ">Datom</h1>
        <div className="bg-amber-400 col-span-1 col-start-6">
          <p>11:25PM</p>
          <p>10/22/2025</p>
        </div>
      </header>
      <div>
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
      </div>
    </div>
  );
}

export default App
