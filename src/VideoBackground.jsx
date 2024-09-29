// VideoBackground.js

import './VideoBackground.css';
import videoBack from './assets/backvideo2.mp4';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <div className="video-wrap">
        {/* Video */}
        <video id="vid" autoPlay muted loop playsInline>
          <source src={videoBack} type="video/mp4" />          
        </video>
      </div>
    </div>
  );
};

export default VideoBackground;
