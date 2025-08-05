import React from 'react';
import './VideoSection.css';
import serviceVideo from '../assets/video/video-soft-solutions.mp4'; // Change to your actual video filename

const VideoSection = () => (
  <section className="video-section">
    <video
      className="video-section-video"
      src={serviceVideo}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
    />
  </section>
);

export default VideoSection;
