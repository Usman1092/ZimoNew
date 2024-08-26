// import React from 'react'
// import Image from 'next/image'
// import { Navbar } from './Navbar'
// export const HeroSection = () => {
//   return (
//     <div className='HeroSection relative  w-[1920px] h-[1424px] '>
//       <div className='GRADIENT relative '>
//       <Image
//           src="/HeroSection/Gradient-1.png"
//           alt="Hero Image"
//           width={1920}
//           height={712}
//           className='absolute top-0 z-10 w-[1920px] h-[712px]'
//         />
//       </div>
//  <div className='GRADIENT2 relative w-full '>
//       <Image
//           src="/HeroSection/Gradient-2.png"
//           alt="Hero Image"
//           width={1920}
//           height={712}
//           className='absolute top-[712px] z-10 w-[1920px] h-[712px]'
//         />
//       </div>
//       <div className="BACKGROUND absolute top-0 z-0 w-[1920px] h-[1424px] pointer-events-none select-none bg-scroll">
//         <Image
//           src="/HeroSection/building-1.png"
//           alt="Hero Image"
//           fill
//           style={{ objectFit: "cover" }}
//           quality={100}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
//         />
//       </div>

//        <Navbar />

//    <div className="Links ">
//     <div className='flex flex-row absolute top-10 z-20 w-full px-14 py-40 gap-x-32'>
//         <p href='#section1' className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>REAL ESTATE</p>
//         <p href='#section2'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>PRIVATE ISLANDS</p>
//         <p href='#section3'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>YACHTS</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>JETS</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>CARS</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>WATCHES</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>DIAMONDS</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>TRAVEL THE WORLD</p>
//     </div>
//    </div>

//        {/* <div className="Navbar flex justify-between absolute top-20 z-20 w-full px-10 gap-x-20 "> */}
//    <div className="Footer flex justify-between absolute bottom-20 z-20 w-full px-10">
//     <div className=' '>
//         <Image src={"/HeroSection/g12.png"} alt="" width={250} height={87.39} className=' w-[250px] h-[87.39px]'/>
//     </div>

//     <div>
//     <Image src={"/HeroSection/g12.png"} alt="" width={250} height={87.39} className=' w-[250px] h-[87.39px]'/>
//    </div>

//   <div className='flex flex-col space-y-8'>
//    <div className='flex flex-row gap-x-4'>
//     <Image src={"/HeroSection/Civica.png"} alt="" width={185.15} height={39.64} className=' w-[185.15px] h-[39.64px]'/>
//     <Image src={"/HeroSection/CES.png"} alt="" width={82.67} height={39.65} className=' w-[82.67px] h-[39.65px]'/>
//    </div>
//    <div className='w-[320px] h-[27px]  flex flex-row gap-x-4'>
//    <p className='font-Lato text-[#BE9F56]  text-[22px]'>
//     25.00 GBP</p>
//     <p className='font-Lato text-[#BE9F56]  text-[22px]'>BUY ENTRY NOW</p>
//    </div>
//    </div>

//    </div>

// <div className="SIDEBAR absolute  z-10  w-[544px] h-[1932px] bg-[#] relative overflow-y-hidden ">{/*left-40 top-60*/}
//     <Image src={"/HeroSection/bg-Sidebar.png"} alt="" width={544} height={1932} className=' absolute top-0 left-0  w-[544px] h-[1424px] '/>
// <div className='img-container '>

//    <div className='flex flex-row gap-x-8'> <Image src={"/HeroSection/sidebarLogo.png"} alt="" width={65.96} height={50} className='mt-10 ml-10 w-[65.96px] h-[50px]'/>
//         <p className='font-Lato text-[30px] text-white mt-10 ml-10'>WELCOME</p>
//     </div>

//     <Image src={"/HeroSection/Line 92.png"} alt="" width={358} height={0} className='mt-8 ml-auto mr-auto  w-[358px] h-[1px]'/>
// <div className="Links ">
//     <div className='flex flex-col  w-full px-10 py-10 gap-y-10'>
//         <p href='#section1' className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>REAL ESTATE</p>
//         <p href='#section2'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>PRIVATE ISLANDS</p>
//         <p href='#section3'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>YACHTS</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>JETS</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>CARS</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>WATCHES</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>DIAMONDS</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>TRAVEL THE WORLD</p>
//         <Image src={"/HeroSection/Line 92.png"} alt="" width={358} height={0} className='mt-0 ml-auto mr-auto  w-[358px] h-[1px]'/>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>ACCOUNT</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>SHOPPING BAG</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>HELP & FAQ</p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>ABOUT </p>
//         <p href='#section4'  className='text-white hover:text-[#BE9F56] font-lato text-[22px]'>CONTACT</p>
//         <p href='#section4'  className='text-white flex flex-row gap-x-4 hover:text-[#BE9F56] font-lato text-[22px]'><span><Image src={"/HeroSection/Path 7680.png"} width={25} height={25} alt="" className=' mt-[3px] w-[25px] h-[25px]'/></span>
//         ENGLISH / GBP</p>

//     </div>

//    </div>

// </div>

// </div>
//     </div>
//   )
// }






import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "./Navbar";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const imagesArray = [
  {
    img: { src: "/HeroSection/building-1.png", alt: "image-1" },
    price: "25000 GBP",
    address: "SHAEED-E-MILLAT TOWN PINDIGHEB PAKISTAN",
  },
  {
    img: { src: "/HeroSection/img-2.png", alt: "image-2" },
    price: "45000 GBP",
    address: "USMAN TOWN PINDIGHEB PAKISTAN",
  },
  {
    img: { src: "/HeroSection/Img-3.png", alt: " image-3 " },
    price: "45000 GBP",
    address: "USMAN TOWN PINDIGHEB PAKISTAN",
  },
];

export const HeroSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  console.log("Sidebar is open", isSidebarOpen);

  // React Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 0,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };

  return (
    <div className="HeroSection relative w-[1920px] h-[1424px]">
           {/* <Swiper
            // spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
         <SwiperSlide> */}
      <div className="GRADIENT relative">
        <Image
          src="/HeroSection/Gradient-1.png"
          alt="Hero Image"
          width={1920}
          height={712}
          className="absolute top-0 z-10 w-[1920px] h-[712px]"
        />
      </div>
      <div className="GRADIENT2 relative w-full">
        <Image
          src="/HeroSection/Gradient-2.png"
          alt="Hero Image"
          width={1920}
          height={712}
          className="absolute top-[712px] z-10 w-[1920px] h-[712px]"
        />
      </div>
  
   
          <div className="BACKGROUND absolute top-0 z-0 w-[1920px] h-[1424px] pointer-events-none select-none bg-scroll">
            <Image
                src="/HeroSection/building-1.png"
                alt="Hero Image"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
         

      {/* Footer */}
      <div className="Footer flex justify-between absolute bottom-20 z-20 w-full px-10 ">
        <div className=" ">
          <Image
            src={"/HeroSection/g12.png"}
            alt=""
            width={250}
            height={87.39}
            className=" w-[250px] h-[87.39px]"
          />
        </div>

        <div className="FooterCenter border border-white">
          <div className="Content relative flex flex-col w-[888px] h-[67px] ">
            <p className="Price font-Lato text-[20px] text-white text-center">
            &pound; 5,000,000 GBP
            </p>
            <div className="Address absolute bottom-0 flex flex-row gap-x-12 px-4">
              <p className="font-Lato text-[20px] text-white">SHELTON STREET</p>
              <p className="font-Lato text-[20px] text-white">COVENT GARDEN</p>
              <p className="font-Lato text-[20px] text-white">LONDON</p>
              <p className="font-Lato text-[20px] text-white">WC2H 9JQ</p>
              <p className="font-Lato text-[20px] text-white">UNITED KINGDOM</p>
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
              className=" w-[185.15px] h-[39.64px]"
            />
            <Image
              src={"/HeroSection/CES.png"}
              alt=""
              width={82.67}
              height={39.65}
              className=" w-[82.67px] h-[39.65px]"
            />
          </div>

          <div className="w-[320px] h-[27px]  flex flex-row gap-x-4">
            <p className="font-Lato text-[#BE9F56]  text-[22px]">25.00 GBP</p>
            <p className="font-Lato text-[#BE9F56]  text-[22px]">
              BUY ENTRY NOW
            </p>
          </div>
        </div>
      </div>

      {/* Extra Links for Large Devices */}
      <div className="LINKS hidden md:block">
        <div className="flex flex-row absolute top-10 z-20 w-full px-14 py-40 gap-x-32">
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
        </div>
      </div>

      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <div
        className={`SIDEBAR relative top-0 left-0 z-30 w-[544px] h-full transform transition-transform duration-500 ${
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
              className="text-white font-bold text-5xl focus:outline-none absolute right-[-55px]  top-[30px]"
              onClick={toggleSidebar}
            >
              &times;
            </button>
          </div>

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
                className="mt-0 ml-auto mr-auto  w-[358px] h-[1px]"
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
      {/* </SwiperSlide>
      </Swiper> */}
    </div>
  );
};
