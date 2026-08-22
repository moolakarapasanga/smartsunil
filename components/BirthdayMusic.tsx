"use client";

import { useRef, useState } from "react";

export default function BirthdayMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  async function toggleMusic() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch (error) {
      console.error("Unable to play birthday music:", error);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/happy-fixed.mp3"
        loop
        preload="auto"
      />

      <button
        type="button"
        onClick={toggleMusic}
        className="music-button"
      >
        {playing ? "🔊 Birthday Music" : "🎵 Play Birthday Music"}
      </button>

      <style>{`
        .music-button {
          position: fixed;
          left: 24px;
          bottom: 24px;
          z-index: 50;

          padding: 10px 16px;
          border-radius: 999px;

          border: 1px solid rgba(255, 255, 255, 0.7);

          background: rgba(255, 255, 255, 0.65);

          color: #a74f78;

          font-size: 13px;
          font-weight: 600;

          box-shadow:
            0 10px 30px rgba(174, 87, 125, 0.15);

          backdrop-filter: blur(10px);

          cursor: pointer;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .music-button:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.9);
        }

        @media (max-width: 640px) {
          .music-button {
            left: 16px;
            bottom: 16px;
          }
        }
      `}</style>
    </>
  );
}