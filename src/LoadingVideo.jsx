// eslint-disable-next-line no-unused-vars
import React from 'react';
import videoSrc from './assets/loadingVideo2.mp4';
import './LoadingVideo.css';

const LoadingVideo = () => {
  return (
    <div className="loading-video">
      <video autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="spinner-overlay">
        <div className="spinner"></div>
        <div className="loading-text">Carregando Safari do Dom...</div> {/* Texto adicional */}
      </div>
    </div>
  );
};

export default LoadingVideo;
