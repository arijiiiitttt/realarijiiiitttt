
import { playMusic } from './playMusic';
// ------------------------Download PDF---------------------
const downloadPDF = () => {
  const confirmed = window.confirm("Do you want to download the PDF?");
  if (confirmed) {
    const link = document.createElement('a');
    link.href = './path/to/your/file.pdf';  // Ensure to set the correct path
    link.download = 'Arijit Roy-s Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};


const Nav = () => {
  return (
    <>
      <div className="w-[] h-[40px] bg-gray-400 flex flex-row rounded-xl justify-center items-center shadow-lg p-2">
        {/* Taskbar icons */}
        <img
          src="./icons/home.png"
          className="w-12 h-12 mx-0 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('', '_blank');
          }}
        />
        <img
          src="./icons/support.png"
          className="w-15 h-15 mx-0 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('', '_blank');
          }}
        />
        <img
          src="./icons/camera.png"
          className="w-11 h-11 mx-0 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('', '_blank');
          }}
        />

        <img
          src="./icons/person.png"
          className="w-11 h-11 mx-0 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('', '_blank');
          }}
        />

        <img
          src="./icons/internet.png"
          className="w-11 h-11 mx-0 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('https://www.google.co.in/', '_blank');
          }}
        />
        

        <img
          src="./icons/calculator.png"
          className="w-12 h-12 mx-0 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('', '_blank');
          }}
        />
<img
          src="./icons/music.png"
          className="w-12 h-12 mx-0 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('', '_blank');
          }}
        />

        <img
          src="./icons/email.png"
          alt="Icon 3"
          className="w-12 h-12 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('/', '_blank');
          }}
        />

        <img
          src="./icons/resume.png"
          alt="Icon 2"
          className="w-13 h-13 mx-0 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            downloadPDF();
          }}
        />

        <img
          src="./icons/facebook.png"
          alt="Icon 4"
          className="w-12 h-12 mx-0 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('https://www.facebook.com/profile.php?id=61565851260816', '_blank');
          }}
        />


        <img
          src="./icons/linkedin.png"
          alt="Icon 4"
          className="w-12 h-12 mx-0 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('https://www.linkedin.com/in/realarijiiiitttt/', '_blank');
          }}
        />

        <img
          src="./icons/github.png"
          alt="Icon 4"
          className="w-10 h-10 mx-0 bg-white rounded-full transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('https://github.com/arijiiiitttt', '_blank');
          }}
        />

        <img
          src="./icons/instagram.png"
          alt="Icon 4"
          className="w-12 h-12 mx-1 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('https://www.instagram.com/thearijiiiitttt_/', '_blank');
          }}
        />
        <img
          src="./icons/note.png"
          alt="Icon 4"
          className="w-11 h-11 mx-0 transition-transform transform hover:scale-125 hover:translate-y-[-5px]"
          onClick={() => {
            playMusic();
            window.open('/', '_blank');
          }}
        />

      </div>
    </>
  );
};

export default Nav;
