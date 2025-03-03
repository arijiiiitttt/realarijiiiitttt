// playMusic.js
export const playMusic = () => {
    const audio = new Audio("./music/buttonsound.wav");
    // Adding an error handler
    audio.onerror = (e) => {
      console.error("Error loading audio:", e);
      alert("Error playing audio. Please check the console for details.");
    };
    // Adding a check to ensure audio is loaded before playing
    audio.oncanplaythrough = () => {
      audio.play().catch(error => {
        console.error("Error playing audio:", error);
        alert("Error playing audio. Please check the console for details.");
      });
    };
    // Log to confirm loading
    console.log("Loading audio...");
    audio.load();
  };
  