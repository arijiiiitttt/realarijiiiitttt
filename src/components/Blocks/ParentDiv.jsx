import { useState } from 'react';
import Calendar from '../otherElements/Calendar';
import Clock from '../otherElements/Clock';
import MoodTracker from '../otherElements/MoodTracker';
import { FaImage } from 'react-icons/fa';
import BatteryAndImage from '../otherElements/BatteryAndImage';
import MusicPlayer from '../otherElements/MusicPlayer';


const ParentDiv = ({ onBackgroundChange }) => {
  const [showBgOptions, setShowBgOptions] = useState(false);
  
  const backgroundOptions = [
    { name: 'Default', path: './bg/bgfrontpg.jpg' },
    { name: 'Mountain', path: './bg/mountain.jpg' },
    { name: 'Beach', path: './bg/beach.jpg' },
    { name: 'Forest', path: './bg/forest.jpg' },
    { name: 'City', path: './bg/city.jpg' },
  ];

  return (
    <div className="h-135 flex flex-row justify-center items-center w-4/5">
      <div className='h-135 gap-y-3 flex flex-col justify-center items-center w-1/3'>
        <Clock/>
        <Calendar/>
       <BatteryAndImage/>
        <div></div>
      </div>
      <div className='h-135 flex flex-col justify-center items-center w-2/5 bg-pink-500'>
      <img src="./logos/a.png" alt="icon" className="w-23 h-23" />
      
      </div>







      <div className='h-135 flex flex-col justify-center items-center w-1/3 bg-gray-500'>
        <MoodTracker/>
        <MusicPlayer/>
      
        {/* Background Changer Button */}
        {/* <div className="relative mt-4">
          <button 
            onClick={() => setShowBgOptions(!showBgOptions)}
            className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 transition-all"
            aria-label="Change background"
          >
            <FaImage className="text-blue-600 text-xl" />
          </button>
          
          {showBgOptions && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 border border-gray-200 dark:border-gray-700">
              <div className="py-1">
                <p className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                  Backgrounds
                </p>
                {backgroundOptions.map((bg) => (
                  <button
                    key={bg.name}
                    onClick={() => {
                      onBackgroundChange(bg.path);
                      setShowBgOptions(false);
                    }}
                    className="flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {bg.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div> */}




      </div>
    </div>
  );
};

export default ParentDiv;