"use client";
import React, { useEffect, useRef, useState } from "react";

const Camera = () => {
  const videoRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        setHasPermission(true);
      } catch (err) {
        setError("Camera access denied or unavailable.");
        console.error(err);
      }
    };

    startCamera();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <h2 className="text-xl font-semibold">Camera Preview</h2>

      {error && <p className="text-red-500">{error}</p>}

      <div className="w-full max-w-sm aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
        {hasPermission ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Waiting for camera permission...
          </div>
        )}
      </div>
    </div>
  );
};

export default Camera;
