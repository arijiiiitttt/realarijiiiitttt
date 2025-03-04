import { IoIosPlayCircle } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { playMusic } from './playMusic';

const Box = () => {
  const router = useRouter();

  const navigateToPortfolio = () => {
    playMusic(); // Play the music when the icon is clicked
    router.push('/portfolio');
  };

  return (
    <>
      <div className="border-4 border-white w-1/2 h-96 bg-white rounded-md flex flex-col shadow-lg">
        <div className="w-full border-[0.006px] border-gray-400 h-[20px] bg-gray-300 flex justify-start items-center px-2 rounded-t-md">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="border-[0.006px] border-gray-400 w-full h-full flex flex-col justify-center items-center text-black">
          <div className="w-full h-9/10 flex justify-center items-center ">
            hello world
          </div>
          <div className="w-full h-1/10 flex justify-center items-center">
            <IoIosPlayCircle 
              onClick={navigateToPortfolio} 
              style={{ fontSize: "1.9rem", color: "red" }} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
