"use client";
import { useRef, useState } from "react";

const musicData = [
  {
    title: "Reputation",
    artist: "Taylor Swift",
    cover: "/covers/reputation.jpg",
    file: "/music/reputation.mp3",
  },
  {
    title: "1989",
    artist: "Taylor Swift",
    cover: "/covers/1989.jpg",
    file: "/music/1989.mp3",
  },
  {
    title: "Lover",
    artist: "Taylor Swift",
    cover: "/covers/lover.jpg",
    file: "/music/lover.mp3",
  },
  {
    title: "Red",
    artist: "Taylor Swift",
    cover: "/covers/red.jpg",
    file: "/music/red.mp3",
  },
  {
    title: "Midnights",
    artist: "Taylor Swift",
    cover: "/covers/midnights.jpg",
    file: "/music/midnights.mp3",
  },
  {
    title: "Folklore",
    artist: "Taylor Swift",
    cover: "/covers/folklore.jpg",
    file: "/music/folklore.mp3",
  },
  {
    title: "Evermore",
    artist: "Taylor Swift",
    cover: "/covers/evermore.jpg",
    file: "/music/evermore.mp3",
  },
  {
    title: "Fearless",
    artist: "Taylor Swift",
    cover: "/covers/fearless.jpg",
    file: "/music/fearless.mp3",
  },
];

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(musicData[0]);
  const audioRef = useRef(null);

  const playSong = (song) => {
    setCurrentSong(song);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load();
        audioRef.current.play();
      }
    }, 100);
  };

  return (
    <div className="w-[300px] bg-gray-900 text-white rounded-xl p-4 space-y-3 shadow-lg overflow-hidden">
      {/* Current Playing */}
      <div className="flex items-center gap-3">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-12 h-12 rounded-md object-cover"
        />
        <div>
          <div className="font-semibold text-sm">{currentSong.title}</div>
          <div className="text-xs text-gray-400">{currentSong.artist}</div>
        </div>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} className="hidden">
        <source src={currentSong.file} type="audio/mp3" />
      </audio>

      {/* Scrolling Marquee */}
      <div className="relative h-14 overflow-hidden">
        <div className="absolute flex gap-4 animate-marquee">
          {[...musicData, ...musicData].map((song, index) => (
            <img
              key={index}
              src={song.cover}
              alt={song.title}
              title={song.title}
              className="w-12 h-12 rounded-md object-cover cursor-pointer hover:scale-110 transition-transform"
              onClick={() => playSong(song)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
