import React from "react";
import Image from "next/image";
export const Navbar = ({ toggleSidebar }) => {
  return (
    // <div className=" Navbar flex  flex-shrink justify-between  absolute top-20 z-20 border border-white   w-[1920px] px-20 md:px-10 gap-x-6 sm:gap-x-16 md:gap-x-20 "> {/*w-[1920px] h-[1424px]*/}
    <div className="Navbar flex  justify-between px-10 absolute top-20 z-20 border border-white w-[340px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[w-1280px] 3xl:w-[1920px] h-[1424px] gap-x-8 sm:gap-x-10 md:gap-x-20  ">
     <div className="navCom-1 flex flex-row gap-x-2 sm:gap-x-4 md:gap-x-8">
     
          <div className="img-1 cursor-pointer w-[45px] h-auto  sm:w-[55px] h-auto md:w-[65.96px] h-[50px]" onClick={toggleSidebar} >
      <Image
      src={"/HeroSection/Group 3055.png"}
      alt=""
      width={65.96}
      height={50}
      className="w-[65.96px] h-[50px]"
      />

          </div>

          <div className="img-2 w-[100px] h-auto  sm:w-[150px] h-auto md:w-[184.9px] h-[50px]">
        <Image
        src={"/HeroSection/Group 3385.png"}
        alt=""
        width={184.9}
        height={50}
        className="w-[184.9px] h-[50px]"
        />
        
          </div>

     </div>

     <div className="img-center  w-[100px] h-auto md:w-[204.38px] h-[50px]">
        <Image
        src={"/HeroSection/Group 3005.png"}
        alt=""
        width={204.38}
        height={50}
        className="w-[204.38px] h-[50px]"
        />
        
 
     </div>

     <div className="navCom-3 flex flex-row gap-x-4">
       <div className="flex flex-row gap-x-6">
        <p className="text-white  hidden xl:block ">Just for you</p>

        <div className="img-4 hidden xl:block ">
        <Image
        src={"/HeroSection/Group 3035.png"}
         alt=""
        width={37.31}
        height={25}
        className="w-[37.31px] h-[25px]"
        />
        
 
         </div>
</div>
         <div className="links flex flex-row gap-x-2 md:gap-x-10">

            <div className="Globe">
                <Image 
                src={"/HeroSection/Path 7680.png"}
                width={25}
                height={25}
                alt=""
                className="w-[25px] h-[25px]"
                />
            </div>

            <div className="Bag">
            <Image 
                src={"/HeroSection/Path 7582.png"}
                width={20.89}
                height={25}
                alt=""
                className="w-[20.89px] h-[25px"
                />
            </div>

            <div className="User">
            <Image 
                src={"/HeroSection/Group 2867.png"}
                width={20.59}
                height={25}
                alt=""
                className="w-[20.59px] h-[25px"
                />
            </div>
         </div>

      </div>
      
</div>
   
  );
};
