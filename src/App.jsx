import './App.css'
import Card from './Card.jsx';
import YoutubeLivestream from './components/YoutubeLiveStream.jsx';

function App() {

  // YouTube livestream links for the cards
  const _UWLakeWashingtonLiveStream = "https://www.youtube.com/embed/x-Adyqr58NE?si=_voSNpPlcUM7xXxv";
  const _UWContinuumCollegeCam = "https://www.youtube.com/embed/4cgSE12k9Sc?si=Vx05CrvskjUd9sB5";
  const _SeaTacAirPortMtRainierCam = "https://www.youtube.com/embed/iMmxir9L2AM?si=duJKKd0CtmiTxfmH";
  const _WenatcheeValley = "https://www.youtube.com/embed/H2Z8qMobF_w?si=KPXiqZlyi-HS2m_6";

  return (
    <div className="grid-container">
      <Card> 
        <YoutubeLivestream url={_UWLakeWashingtonLiveStream}/>
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
  );
}

export default App
