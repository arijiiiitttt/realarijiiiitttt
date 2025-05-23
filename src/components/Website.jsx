
import ParentDiv from "./Blocks/ParentDiv";
import Calendar from "./otherElements/Calendar";
import Nav from "./otherElements/Nav";

const Website = () => {
  return (
    <>
      <div 
        className="fixed flex w-full min-h-screen flex-col justify-center items-center gap-y-12" 
        style={{
          backgroundImage: "url('./bg/bgfrontpg.jpg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center"
        }}
      >
        <ParentDiv/>
        <Nav />
      </div>
    </>
  );
};

export default Website;
