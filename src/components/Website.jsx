import Box from "./otherElements/Box";
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
        <Box />
        <Nav />
      </div>
    </>
  );
};

export default Website;
