"use client";

import { useRef, useState } from "react";

const VIDEOS = [
  "/videos/candidate hero.mp4",
  "/videos/candidate hero2.mp4",
];

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState(0);

  const handleEnded = () => {
    const next = (index + 1) % VIDEOS.length;
    setIndex(next);
  };

  return (
    <video
      ref={videoRef}
      key={index}
      src={VIDEOS[index]}
      autoPlay
      muted
      playsInline
      onEnded={handleEnded}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}
