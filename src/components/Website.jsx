import { useState } from 'react';
import ParentDiv from "./Blocks/ParentDiv";
import Nav from "./otherElements/Nav";

const Website = () => {
  const [backgroundImage, setBackgroundImage] = useState('./bg/bgfrontpg.jpg');

  return (
    <div 
      className="fixed flex w-full min-h-screen flex-col justify-center items-center gap-y-7" 
      style={{
        backgroundImage: `url('${backgroundImage}')`, 
        backgroundSize: "cover", 
        backgroundPosition: "center"
      }}
    >
      <ParentDiv onBackgroundChange={setBackgroundImage} />
      <Nav />
    </div>
  );
};

export default Website;