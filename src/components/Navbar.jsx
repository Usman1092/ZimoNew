import React from "react";
import Image from "next/image";
export const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="Navbar flex justify-between absolute top-20 z-20 w-full px-10 gap-x-20 "> {/*w-[1920px] h-[1424px]*/}
     
     <div className="navCom-1 flex flex-row gap-x-8">
     
          <div className="img-1 cursor-pointer" onClick={toggleSidebar}>
      <Image
      src={"/HeroSection/Group 3055.png"}
      width={65.96}
      height={50}
      className="w-[65.96px] h-[50px]"
      />

          </div>

          <div className="img-2">
        <Image
        src={"/HeroSection/Group 3385.png"}
        width={184.9}
        height={50}
        className="w-[184.9px] h-[50px]"
        />
        
          </div>

     </div>

     <div className="img-center">
        <Image
        src={"/HeroSection/Group 3005.png"}
        width={204.38}
        height={50}
        className="w-[204.38px] h-[50px]"
        />
        
 
     </div>

     <div className="navCom-3 flex flex-row gap-x-4">
       <div><p className="text-white ">Just for you</p></div>

        <div className="img-4">
        <Image
        src={"/HeroSection/Group 3035.png"}
        width={37.31}
        height={25}
        className="w-[37.31px] h-[25px]"
        />
        
 
         </div>

         <div className="links flex flex-row gap-x-20">

            <div className="Globe">
                <Image 
                src={"/HeroSection/Path 7680.png"}
                width={25}
                height={25}
                alt=""
                className="w-[25px] h-[25px"
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
