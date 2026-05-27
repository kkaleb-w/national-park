import { useEffect, useRef } from "react";

export default function Ambience() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.15;

    const startAudio = async () => {
      try {
        await audio.play();
        console.log("Audio playing");
      } catch (err) {
        console.log("Autoplay blocked until interaction");
      }
    };

    // multiple interaction types = more reliable
    const events = ["click", "scroll", "keydown", "touchstart"];

    events.forEach((event) => {
      window.addEventListener(event, startAudio, { once: true });
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, startAudio);
      });
    };
  }, []);

  return (
    <audio ref={audioRef} preload="auto">
      <source src="/audio/birds.mp3" type="audio/mpeg" />
    </audio>
  );
}