"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/inthandham.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-rose-500 hover:bg-rose-600 text-white px-5 py-3 rounded-full shadow-xl"
      >
        {playing ? "⏸ Pause Music" : "🎵 Inthandham"}
      </button>
    </>
  );
}
