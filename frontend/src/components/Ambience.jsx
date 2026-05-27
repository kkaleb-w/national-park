import { useEffect, useRef } from "react";

export default function Ambience() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.8;
    audio.loop = true;

    const startAudio = async () => {
      try {
        await audio.play();
        console.log("Audio started");
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    };

    // Start audio after first click anywhere
    window.addEventListener("click", startAudio, { once: true });

    return () => {
      window.removeEventListener("click", startAudio);
    };
  }, []);

  return (
    <audio ref={audioRef}>
      <source src="/audio/birds.mp3" type="audio/mpeg" />
    </audio>
  );
}