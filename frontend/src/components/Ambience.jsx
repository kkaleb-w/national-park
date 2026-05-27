import { useRef, useState } from "react";

export default function Ambience() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (!isPlaying) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.log("Audio error:", err);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source
          src={`${process.env.PUBLIC_URL}/audio/birds.mp3`}
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={toggleAudio}
        className="fixed bottom-5 right-5 z-50 bg-[#1a1f1a] text-[#e6e0d4] px-4 py-2 rounded-lg border border-[#333] hover:bg-[#222]"
      >
        {isPlaying ? "Pause Ambience" : "Start Ambience"}
      </button>
    </>
  );
}