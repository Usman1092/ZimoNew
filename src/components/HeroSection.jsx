

//  //2nd final
import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";








export const HeroSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const backgroundImages = [
    {
      bg:"/HeroSection/building-1.png",
      
      price:"5000,000,000 GBP", 
     street: "SHELTON STREET  COVENT GARDEN ",
      city: "LONDON ",
     zip_code: "WC2H 9JQ",
     country: "UNITED KINGDOM",
    },
    {
      bg:"/img-2.png",
      price:"15000 GBP",
      street: "2, 64 BROADWAY EALING",
      city: "LONDON ",
     zip_code: "W13 0SU ",
     country: "UNITED KINGDOM",
    },
    {
      bg:"/Img-3.png",
      
      price:"55000 GBP",
      street: "152 KING'S RD KENSINGTON",
      city: "LONDON ",
     zip_code: "	SW3 3NR  ",
     country: "UNITED KINGDOM",
    },
    
  ];

  return (
    <div className="HeroSection w-[1920px] h-[1424px] relative">{/*w-[340px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[w-1280px] 3xl:w-[1920px] h-[1424px]*/}
      {/* Background Swiper */}
   
      <Swiper
        spaceBetween={0}
      

        style={{

          "--swiper-pagination-color": "#BE9F56",
          "--swiper-pagination-bullet-inactive-color": "#ffffff",
       
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          
        }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
        modules={[Pagination]}
        className="BACKGROUND absolute top-0  z-30 w-full h-full"
      >
        {backgroundImages.map((image, index) => (
          <SwiperSlide key={index} className="h-full w-full">
            <Image
              src={image.bg}
              alt={`Background ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              className="w-full h-full"
            />
            <div className="GRADIENT ">
              <Image
                src="/HeroSection/Gradient-1.png"
                alt="Hero Image"
                width={1920}
                height={712}
                className="absolute top-0 z-10 w-[1920px] h-[712px]"
              />
            </div>
            <div className="GRADIENT2  w-full">
              <Image
                src="/HeroSection/Gradient-2.png"
                alt="Hero Image"
                width={1920}
                height={712}
                className="absolute top-[712px] z-10 w-[1920px] h-[712px]"
              />
            </div>
      {/* Footer  */}
        <div className="Footer flex justify-between border border-white absolute bottom-20 z-20 w-[340px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 3xl:w-full px-10">
        {/* Footer content */}
        <div className=" ">
          <Image
            src={"/HeroSection/g12.png"}
            alt=""
            width={250}
            height={87.39}
            className="w-full h-auto 3xl:w-[250px] h-[87.39px] xl:w-[200px] h-[70px] lg:w-[180px] lg:h-[60px] md:w-[150px] md:h-[50px] sm:w-[120px] sm:h-[40px] xs:w-[100px] xs:h-[30px] "
          />
        </div>

        <div className="FooterCenter  relative ">
          <div className="Content  flex flex-col w-[333px] h-auto md:w-[444px] h-auto lg:w-[555px] h-auto  xl:w-[666px] h-auto 3xl:w-[888px] h-[67px] ">
            <p className="Price font-lato font-bold text-[20px] text-white text-center">
              &pound; {image.price}
            </p>bottom-0
            <div className="Address  flex  flex flex-row gap-x-12 px-10  absolute bottom-0  font-Lato text-[20px] text-white">{/*</div>absolute bottom-0 flex flex-row gap-x-12 px-4*/}
             
              <p className="font-Lato text-[20px] text-white">{image.street}</p>
              <p className="font-Lato text-[20px] text-white">{image.city}</p>
              <p className="font-Lato text-[20px] text-white">{image.zip_code}</p>
              <p className="font-Lato text-[20px] text-white">{image.country}</p>
              {/* {image.address.replace(/\u00A0/g, ' ')} */}
             
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="flex flex-row gap-x-4">
            <Image
              src={"/HeroSection/Civica.png"}
              alt=""
              width={185.15}
              height={39.64}
              className=" w-[135.15px] h-auto md:w-[145.15px] h-auto lg:w-[155.15px] h-auto xl:w-[165.15px] h-auto 3xl:w-[185.15px] h-[39.64px]"
            />
            <Image
              src={"/HeroSection/CES.png"}
              alt=""
              width={82.67}
              height={39.65}
              className=" w-[50px] h-auto md:w-[60.67px] h-auto lg:w-[65.67px] h-auto xl:w-[72.67px] h-auto 3xl:w-[82.67px] h-[39.65px]"
            />
          </div>

          <div className=" w-[220px] h-auto md:w-[250px] h-auto lg:w-[280px] h-auto xl:w-[300px] h-auto 3xl:w-[320px] h-[27px]  flex flex-row gap-x-4">
            <p className="font-Lato text-[#BE9F56]  text-[22px]">&pound; 25.00 GBP</p>
            <p className="font-Lato text-[#BE9F56]  text-[22px]">
              BUY ENTRY NOW
            </p>
          </div>
        </div>
      </div> 
       </SwiperSlide>

       
        ))} 
             <div className="custom-pagination absolute bottom-0 right-0 "></div>
       </Swiper>
   
    
     

      {/* Extra Links for Large Devices */}
      <div className="LINKS   3xl:w-[1920px] h-[1424px] hidden lg:block">
        <div className="flex flex-row absolute top-10 z-20 w-[340px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 3xl:w-full md:px-[10px] py-40  lg:px-[18px] py-40 xl:px-10 py-40 3xl:px-14 py-40  lg:gap-x-12  xl:gap-x-24 3xl:gap-x-32">
          <p className="text-white hover:text-[#BE9F56] font-Lato  text-[18px] 3xl:text-[22px]">
            REAL ESTATE
          </p>
          <p className="text-white hover:text-[#BE9F56] font-Lato  text-[18px] 3xl:text-[22px]">
            PRIVATE ISLANDS
          </p>
          <p className="text-white hover:text-[#BE9F56] font-Lato  text-[18px] 3xl:text-[22px]">
            YACHTS
          </p>
          <p className="text-white hover:text-[#BE9F56] font-Lato  text-[18px] 3xl:text-[22px]">
            JETS
          </p>
          <p className="text-white hover:text-[#BE9F56] font-Lato  text-[18px] 3xl:text-[22px]">
            CARS
          </p>
          <p className="text-white hover:text-[#BE9F56] font-Lato  text-[18px] 3xl:text-[22px]">
            WATCHES
          </p>
          <p className="text-white hover:text-[#BE9F56] font-Lato  text-[18px] 3xl:text-[22px]">
            DIAMONDS
          </p>
          <p className="text-white hover:text-[#BE9F56] font-Lato  text-[18px] 3xl:text-[22px]">
            TRAVEL THE WORLD
          </p>
        </div>
      </div>

      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <div
        className={`SIDEBAR absolute top-0 left-0 z-30 w-[544px] h-full transform transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image
          src={"/HeroSection/bg-Sidebar.png"}
          alt="Sidebar Background"
          width={544}
          height={1932}
          className="absolute top-0 left-0 w-[544px] h-[1424px]"
        />
        <div className="img-container absolute top-0 left-0 z-40">
          <div className="flex flex-row gap-x-8">
            <Image
              src={"/HeroSection/sidebarLogo.png"}
              alt="Sidebar Logo"
              width={65.96}
              height={50}
              className="mt-10 ml-10 w-[65.96px] h-[50px]"
            />
            <p className="font-Lato text-[30px] text-white mt-10 ml-10">
              WELCOME
            </p>
            {/* Close Button */}
            <button
              className="text-white font-bold text-5xl focus:outline-none absolute right-[20px]  top-[30px]"
              onClick={toggleSidebar}
            >
              &times;
            </button>
           
          </div>
          <Image
                src={"/HeroSection/Line 92.png"}
                alt=""
                width={358}
                height={0}
                className="mt-10 ml-20   w-[358px] h-[1px]"
              />
          {/* sidebar links  */}
          <div className="Links ">
             <div className="flex flex-col  w-full px-10 py-10 gap-y-10">
               <p
                href="#section1"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                REAL ESTATE
              </p>
              <p
                href="#section2"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                PRIVATE ISLANDS
              </p>
              <p
                href="#section3"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                YACHTS
              </p>
              <p
                href="#section4"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                JETS
              </p>
              <p
                href="#section4"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                CARS
              </p>
              <p
                href="#section4"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                WATCHES
              </p>
              <p
                href="#section4"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                DIAMONDS
              </p>
              <p
                href="#section4"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                TRAVEL THE WORLD
              </p>
              <Image
                src={"/HeroSection/Line 92.png"}
                alt=""
                width={358}
                height={0}
                className="mt-0 ml-20  w-[358px] h-[1px]"
              />
              <p
                href="#section4"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                ACCOUNT
              </p>
              <p
                href="#section4"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                SHOPPING BAG
              </p>
              <p
                href="#section4"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                HELP & FAQ
              </p>
              <p
                href="#section4"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                ABOUT{" "}
              </p>
              <p
                href="#section4"
                className="text-white hover:text-[#BE9F56] font-lato text-[22px]"
              >
                CONTACT
              </p>
              <p
                href="#section4"
                className="text-white flex flex-row gap-x-4 hover:text-[#BE9F56] font-lato text-[22px]"
              >
                <span>
                  <Image
                    src={"/HeroSection/Path 7680.png"}
                    width={25}
                    height={25}
                    alt=""
                    className=" mt-[3px] w-[25px] h-[25px]"
                  />
                </span>
                ENGLISH / GBP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
