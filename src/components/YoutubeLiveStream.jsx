import "../App.css";

function YoutubeLivestream ({url}) {

  const baseUrl = url.split('?')[0];
  const videoId = baseUrl.split('/').pop();
  const embedUrl = `${baseUrl}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

  return (
      <iframe
        width="100%"
        height="100%"
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ border: "none" }}
      ></iframe>
  );
}

export default YoutubeLivestream;
