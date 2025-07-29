import "../App.css";

function Livestream ({url}) {

  function AddPropertiesToUrl() {
    updatedUrl = url + "?controls=0&autoplay=1&mute=1";
    return updatedUrl;
  }

  return (
    <div className="grid-item">
      <h2>Livestream</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4cgSE12k9Sc?si=YAgOUJm0tCM3vgyu&amp;controls=0&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Livestream;
