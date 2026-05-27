import { useEffect, useRef } from "react";

export default function Ambience() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Lower volume so it's subtle
    audio.volume = 0.8;

    // Some browsers block autoplay until interaction
    const enableAudio = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", enableAudio);
    };

    window.addEventListener("click", enableAudio);

    return () => {
      window.removeEventListener("click", enableAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/birds.mp3"
      loop
      preload="auto"
    />
  );
}