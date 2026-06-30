"use client";

import { useRef, useState } from "react";

export default function WhatWeDoVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="whatwedo-media">
      <video
        ref={videoRef}
        className="whatwedo-video"
        src="/maintenance-video.mp4"
        poster="/maintenance.jpg"
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />
      <button
        type="button"
        className="whatwedo-play"
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
      >
        <span>{playing ? "Pause Video" : "Play Video"}</span>
        <span className="whatwedo-play-icon" aria-hidden="true">
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}
