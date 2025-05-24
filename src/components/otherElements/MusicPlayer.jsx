"use client"
import { useState, useRef } from "react";

const MusicPlayer = () => {
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

  const [currentSong, setCurrentSong] = useState(musicData[0]);
  const audioRef = useRef(null);

  const handleDoubleClick = (song) => {
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <div className="w-[250px] rounded-xl bg-gray-800 bg-opacity-80 text-white p-3 shadow-lg space-y-2 text-center">
      {/* Current Playing */}
      <div className="flex items-center space-x-2">
        <img
          src={currentSong.cover}
          alt={currentSong.title}
          className="w-10 h-10 rounded-md object-cover"
        />
        <div className="text-left text-sm">
          <div className="font-semibold leading-tight">{currentSong.title}</div>
          <div className="text-gray-300 text-xs">{currentSong.artist}</div>
        </div>
        <audio ref={audioRef} controls className="hidden">
          <source src={currentSong.file} type="audio/mp3" />
        </audio>
      </div>

      {/* Song Covers List */}
      <div className="flex overflow-x-auto space-x-2 scrollbar-hide pt-1">
        {musicData.map((song, index) => (
          <img
            key={index}
            src={song.cover}
            alt={song.title}
            title={song.title}
            className="w-10 h-10 rounded-md cursor-pointer hover:scale-105 transition"
            onDoubleClick={() => handleDoubleClick(song)}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicPlayer;
