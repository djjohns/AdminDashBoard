import React from 'react';

function LiveStream() {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const streamUrl = 'http://localhost:3001/video_feed';
    // const streamUrl = '/video_feed'; // No need for full URL, thanks to the proxy
  
    if (videoRef.current) {
      videoRef.current.src = streamUrl;
    }
  }, []);
  

  return (
    <div>
      <h2>Host's Webcam Stream</h2>
      <video ref={videoRef} autoPlay controls width={640} height={480}/>
    </div>
  );
}

export default LiveStream;
