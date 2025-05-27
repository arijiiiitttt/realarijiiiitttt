// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
           marquee: 'marquee 20s linear infinite',
          scroll: "scroll 60s linear infinite",
        },
        keyframes: {
           marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
        },
      },
    },
    plugins: [],
  };
  