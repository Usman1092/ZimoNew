// import React from 'react'
// import Slider from "react-slick";
// import Card from "./Card";
// // import NextArrow from "./NextArrow";
// // import PreviousArrow from "./PreviousArrow";

//     const imagesArray = [
//         { src: "/HeroSection/building-1.png", alt: "image-1" },

//         {src: "/HeroSection/img-2.png", alt: "image-2" },

//        { src: "/HeroSection/Img-3.png", alt: " image-3 " },

//       ];

// export const FirstSection = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         // nextArrow: <NextArrow />,
//         // prevArrow: <PreviousArrow />,
//         swipeToSlide: true,
//         // responsive: [
//         //   {
//         //     breakpoint: 1024,
//         //     settings: {
//         //       slidesToShow: 3,
//         //     },
//         //   },
//         //   {
//         //     breakpoint: 768,
//         //     settings: {
//         //       slidesToShow: 2,
//         //       dots: true,
//         //     },
//         //   },
//         //   {
//         //     breakpoint: 480,
//         //     settings: {
//         //       slidesToShow: 1,
//         //       dots: true,
//         //     },
//         //   },
//         // ],
//       };
//   return (
//     <div className='FirstSection w-[1920px] h-auto bg-[#]'>
// <p className='text-xl text-center text-white'>First Section</p>

// <div className=""> {/*relative px-4 md:px-[40px] 2xl:px-[60px]*/}
//       <Slider {...settings}>
//         {imagesArray.map((img, index) => (
//           <div key={index} className="px-6 max-w-[466px]">
//             <Card key={index} img={img} />
//           </div>
//         ))}
//       </Slider>
//     </div>
//     </div>
//   )
// }

// import React from 'react';
// import Slider from "react-slick";
// import Image from 'next/image';
// // import Card from "./Card";

// const imagesArray = [
//   { src: "/HeroSection/building-1.png", alt: "Building 1" },
//   { src: "/HeroSection/img-2.png", alt: "Image 2" },
//   { src: "/HeroSection/Img-3.png", alt: "Image 3" },
// ];

// export const FirstSection = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     swipeToSlide: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           dots: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div className='FirstSection w-full h-auto bg-[#]'>
//       <p className='text-xl text-center text-white'>First Section</p>

//       <div className="px-4 md:px-[40px] 2xl:px-[60px]">
//         {/* <Slider {...settings}>
//           {imagesArray.map((img, index) => ( */}
//             <div  className="px-6 ">
//               {/* <Card key={index} img={img} /> */}
//               <div className='flex flex-row w-full gap-x-2 '>
//               <div className='Card-1 w-[454px] h-[547px] bg-[#333] rounded-lg '>
//                <Image
//             //    src={img.src}

//             //    alt={img.alt}
//             src={"/HeroSection/building-1.png"}
//             alt="Building"
//                width={100}
//                height={100}
//                className="  w-[454px] h-[547px]"
//                />
//               </div>

//               <div className='Card-2 w-[454px] h-[547px] bg-[#333] '>
//                <Image
//             //    src={img.src}

//             //    alt={img.alt}
//             src={"/HeroSection/img-2.png"}
//             alt="Building"
//                width={100}
//                height={100}
//                className="  w-[454px] h-[547px]"
//                />

//               </div>

//               <div className='Card-3 w-[454px] h-[547px] bg-[#333] '>
//                <Image
//             //    src={img.src}

//             //    alt={img.alt}
//             src={"/HeroSection/Img-3.png"}
//             alt="Building"
//                width={100}
//                height={100}
//                className="  w-[454px] h-[547px]"
//                />
//               </div>
//               </div>
//             </div>
//            {/* ))}
//          </Slider> */}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import Slider from "react-slick";
// import Image from 'next/image';

// const imagesArray = [
//   { src: "/building-1.png", alt: "Building 1" },
//   { src: "/img-2.png", alt: "Image 2" },
//   { src: "/img-3.png", alt: "Image 3" },
// ];

// export const FirstSection = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     swipeToSlide: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           dots: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div className='FirstSection w-full h-auto '> {/* Ensure background color is visible */}
//       <p className='text-xl text-center text-white mb-8'>First Section</p>

//       <div className="px-4 md:px-[40px] 2xl:px-[60px]">
//         <Slider {...settings}>
//           {imagesArray.map((img, index) => (
//             <div key={index} className="px-6">
//               <div className='flex justify-center'>
//                 <div className='Card w-[454px] h-[547px] bg-[#333] rounded-lg overflow-hidden'> {/* overflow-hidden to ensure proper clipping */}
//                   <Image
//                     src={img.src}
//                     alt={img.alt}
//                     width={454}
//                     height={547}
//                     className="w-full h-full object-cover" // Ensure the image covers the card properly
//                     priority // Loads this image with higher priority
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Navigation } from "swiper/modules";

// function FirstSection() {
//   return (
//     <>
//       <div className="FirstSection bg-[#ffffff] mt-0">
//         <div className="top flex flex-row justify-between  w-auto h-auto pt-10">
//           <div className="w-[159px] h-[40px] ">
//             <p className="font-Lato text-[30px]">FEATURED</p>
//           </div>

//           <div className="w-[275px] h-[40px] ">
//             <p className="font-Lato text-[30px]">VIEW ALL HOMES</p>
//           </div>

//           <div className="Navigation w-[187.31px] h-[80px] flex flex-row  justify-between ">
//             <Image
//               src={"/New Folder/back.png"}
//               width={78.31}
//               height={80}
//               alt="backArrow"
//               className=" backArrow w-[78.31px] h-[80px]"
//             />
//             <Image
//               src={"/New Folder/next.png"}
//               width={78.31}
//               height={80}
//               alt="nextArrow"
//               className="nextArrow w-[78.31px] h-[80px]"
//             />
//           </div>
//         </div>

//         <div className="Swiper px-10 gap-x-2 flex justify-center pt-20">
//           <Swiper
//             spaceBetween={30}
//             slidesPerView={4}
//             navigation={{
//               nextEl: ".nextArrow",
//               prevEl: ".backArrow",
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Pagination, Navigation]}
//             className="mySwiper"
//           >
//             <SwiperSlide >
//               {/* <Image
//                 src={"/card-1.png"}
//                 alt="Building 1"
//                 width={100}
//                 height={100}
//                 className=""
//               /> */}
//               <div className=" card-1 border border-black w-[454px] h-[574px] ">

//                {/* Inner swiper */}
//                <Swiper
//                   spaceBetween={10}
//                   slidesPerView={1}
//                   pagination={true}
//                   style={{
//                     '--swiper-navigation-color': '#fff',
//                     '--swiper-pagination-color': '#fff',

//                   }}
//                   navigation={true}
//                   slideToClickedSlide={true}
//                   modules={[Navigation,Pagination]}
//                   className="inner-swiper"
//                 >

//                  <Image
//                 src={"/New Folder/topGrad.png"}
//                 alt="gradient 1"
//                 width={100}
//                 height={100}
//                 className="w-[454px] h-[159px] absolute top-0 z-20"
//               />

//                 <Image
//                 src={"/New Folder/bottomGrad.png"}
//                 alt="gradient 1"
//                 width={100}
//                 height={100}
//                 className="w-[454px] h-[159px] absolute bottom-0 z-20"
//               />

//               <div className="w-[374px] h-[42px] border border-white absolute bottom-14 left-9 z-20">
//                <div className="absolute top-0 z-20 text-white font-Lato text-[13px] tracking-widest ">SHELTON{" "}STREET {""} COVENT GARDEN {""} LONDON {""} WC2H
//                 <div className="text-white font-Lato text-[13px]  tracking-widest absolute top-6 z-20 ">UNITED KINGDOM</div>
//                </div>
//               </div>
//               <div className="flex flex-row justify-between w-full h-auto border border white absolute bottom-10 z-20">
//                 {/* <div className=""> */}
//              <Image src={"/navlinks/Group 3005.png"} width={59.82} height={14.63} className="w-[59.82px] h-[14.63px]"/>
//                 {/* </div> */}
//                 <div className="flex flex-col w-full relative border border-white">
//                 <div className="w-[114px] h-[19px] border border-white text-white font-Lato text-[14px] absolute top-4 z-20"> 5,000,000 GBP</div>
//                 <div className="w-[114px] h-[19px] border border-white text-white font-Lato text-[14px] absolute top-4 z-20"> #ZM7861234567</div>
//                   </div>
//                 <div className="w-[114px] h-[19px] border border-white text-white font-Lato text-[14px] absolute top-2 right-0  z-20"> <Image src={"/New Folder/g12.png"} width={69.28} height={24.22} alt="" className="w-[69.28px] h-[24.22px]"/></div>
//               </div>

//                   <SwiperSlide>
//                      <Image  src={"/card-1.png"}   alt="Building 1"   width={100}   height={100}
//                               className="w-[454px] h-[574px]"
//                          />
//                 </SwiperSlide>

//                   <SwiperSlide>
//                      <Image  src={"/img-2.png"}   alt="Building 1"   width={100}   height={100}
//                               className="w-[454px] h-[574px]"
//                          />
//                     </SwiperSlide>

//                   <SwiperSlide>
//                        <Image  src={"/Img-3.png"}   alt="Building 1"   width={100}   height={100}
//                               className="w-[454px] h-[574px]"
//                          />
//                   </SwiperSlide>
//                 </Swiper>

//                 {/* nested swiper */}
//                   {/* <div className="inner-swiper-container mt-4">
//                   <Swiper
//                     spaceBetween={10}
//                     slidesPerView={1}
//                     navigation={false}
//                     pagination={{
//                       clickable: true,
//                     }}
//                     modules={[Pagination]}
//                     className="inner-swiper"
//                   >
//                     <SwiperSlide>
//                       <Image
//                         src={"/card-1.png"}
//                         alt="Building 1"
//                         width={454}
//                         height={574}
//                         className="w-[454px] h-[574px]"
//                       />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                       <Image
//                         src={"/img-2.png"}
//                         alt="Building 2"
//                         width={454}
//                         height={574}
//                         className="w-[454px] h-[574px]"
//                       />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                       <Image
//                         src={"/Img-3.png"}
//                         alt="Building 3"
//                         width={454}
//                         height={574}
//                         className="w-[454px] h-[574px]"
//                       />
//                     </SwiperSlide>
//                   </Swiper>
//                 </div> */}

//               </div>

//             </SwiperSlide>

//             <SwiperSlide>
//               {/* <Image
//                 src={"/img-2.png"}
//                 alt="Building 1"
//                 width={100}
//                 height={100}
//                 className=""
//               /> */}
//               <div className=" card-2 border border-black w-[454px] h-[574px]">
//                 {/* <p className="card-1 text-center text-lg text-black">Card 1</p> */}
//                 <Image
//                   src={"/img-2.png"}
//                   alt="Building 2"
//                   width={100}
//                   height={100}
//                   className="w-[454px] h-[574px]"
//                 />

//                  {/* Inner swiper */}
//                <Swiper
//                   spaceBetween={10}
//                   slidesPerView={1}
//                   pagination={true}
//                   style={{
//                     '--swiper-navigation-color': '#fff',
//                     '--swiper-pagination-color': '#fff',

//                   }}
//                   navigation={true}
//                   slideToClickedSlide={true}
//                   modules={[Navigation,Pagination]}
//                   className="inner-swiper-2"
//                 >

//                  <Image
//                 src={"/New Folder/topGrad.png"}
//                 alt="gradient 1"
//                 width={100}
//                 height={100}
//                 className="w-[454px] h-[159px] absolute top-0 z-20"
//               />

//                 <Image
//                 src={"/New Folder/bottomGrad.png"}
//                 alt="gradient 1"
//                 width={100}
//                 height={100}
//                 className="w-[454px] h-[159px] absolute bottom-0 z-20"
//               />

//               <div className="w-[374px] h-[42px] border border-white absolute bottom-14 left-9 z-20">
//                <div className="absolute top-0 z-20 text-white font-Lato text-[13px] tracking-widest ">SHELTON{" "}STREET {""} COVENT GARDEN {""} LONDON {""} WC2H
//                 <div className="text-white font-Lato text-[13px]  tracking-widest absolute top-6 z-20 ">UNITED KINGDOM</div>
//                </div>
//               </div>
//               <div className="flex flex-row justify-between w-full h-auto border border white absolute bottom-10 z-20">
//                 {/* <div className=""> */}
//              <Image src={"/navlinks/Group 3005.png"} width={59.82} height={14.63} className="w-[59.82px] h-[14.63px]"/>
//                 {/* </div> */}
//                 <div className="flex flex-col w-full relative border border-white">
//                 <div className="w-[114px] h-[19px] border border-white text-white font-Lato text-[14px] absolute top-4 z-20"> 5,000,000 GBP</div>
//                 <div className="w-[114px] h-[19px] border border-white text-white font-Lato text-[14px] absolute top-4 z-20"> #ZM7861234567</div>
//                   </div>
//                 <div className="w-[114px] h-[19px] border border-white text-white font-Lato text-[14px] absolute top-2 right-0  z-20"> <Image src={"/New Folder/g12.png"} width={69.28} height={24.22} alt="" className="w-[69.28px] h-[24.22px]"/></div>
//               </div>

//                   <SwiperSlide>
//                      <Image  src={"/card-1.png"}   alt="Building 1"   width={100}   height={100}
//                               className="w-[454px] h-[574px]"
//                          />
//                 </SwiperSlide>

//                   <SwiperSlide>
//                      <Image  src={"/img-2.png"}   alt="Building 1"   width={100}   height={100}
//                               className="w-[454px] h-[574px]"
//                          />
//                     </SwiperSlide>

//                   <SwiperSlide>
//                        <Image  src={"/Img-3.png"}   alt="Building 1"   width={100}   height={100}
//                               className="w-[454px] h-[574px]"
//                          />
//                   </SwiperSlide>
//                 </Swiper>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               {/* <Image
//                 src={"/Img-3.png"}
//                 alt="Building 1"
//                 width={100}
//                 height={100}
//                 className=""
//               /> */}
//               <div className=" card-3 border border-black w-[454px] h-[574px]">
//                 {/* <p className="card-1 text-center text-lg text-black">Card 1</p> */}
//                 <Image
//                   src={"/Img-3.png"}
//                   alt="img 3"
//                   width={100}
//                   height={100}
//                   className="w-[454px] h-[574px]"
//                 />
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               {/* <Image
//                 src={"/card-4.png"}
//                 alt="Building 1"
//                 width={100}
//                 height={100}
//                 className=""
//               /> */}
//               <div className="  card-4 border border-black w-[454px] h-[574px]">
//                 {/* <p className="card-1 text-center text-lg text-black">Card 1</p> */}
//                 <Image
//                   src={"/card-4.png"}
//                   alt="img 4"
//                   width={100}
//                   height={100}
//                   className="w-[454px] h-[574px]"
//                 />
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>Slide 5</SwiperSlide>
//             <SwiperSlide>Slide 6</SwiperSlide>
//             <SwiperSlide>Slide 7</SwiperSlide>
//             <SwiperSlide>Slide 8</SwiperSlide>
//             <SwiperSlide>Slide 9</SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FirstSection;


import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Countdown from "react-countdown";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//progress bar
import {
  CircularProgressbar,
  buildStyles,
  linearGradient,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const percentage = 23;
function FirstSection() {
  const zeroPad = (value, length) => String(value).padStart(length, "0");
  return (
    <>
      <div className="FirstSection bg-[#ffffff] mt-0 w-[1920px] h-auto">
        <div className="top flex flex-row justify-between w-auto h-auto pt-10">
          <div className="w-[159px] h-[40px]">
            <p className="font-Lato text-[30px]">FEATURED</p>
          </div>

          <div className="w-[275px] h-[40px]">
            <p className="font-Lato text-[30px]">VIEW ALL HOMES</p>
          </div>

          <div className="Navigation w-[187.31px] h-[80px] flex flex-row justify-between">
            <Image
              src={"/New Folder/back.png"}
              width={78.31}
              height={80}
              alt="backArrow"
              className="backArrow w-[78.31px] h-[80px]"
            />
            <Image
              src={"/New Folder/next.png"}
              width={78.31}
              height={80}
              alt="nextArrow"
              className="nextArrow w-[78.31px] h-[80px]"
            />
          </div>
        </div>

        <div className="Swiper px-10 gap-x-2 flex justify-center pt-20">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            navigation={{
              nextEl: ".nextArrow",
              prevEl: ".backArrow",
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper "
          >
            {/* Card 1 with Nested Swiper */}

            <SwiperSlide>
              <div className="card-1 border border-black w-[454px] h-[574px] ">
                <div className="inner-swiper-container mt-0 relative ">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    navigation={true} // Disable navigation for nested Swiper
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="inner-swiper"
                  >
                    <Image
                      src={"/New Folder/topGrad.png"}
                      alt="gradient 1"
                      width={100}
                      height={100}
                      className="w-[454px] h-[159px] absolute top-0 z-10"
                    />
                    <div className="content">
                      <div className="w-[374px] h-[42px]  absolute bottom-14 left-9 z-20">
                        <div className="absolute top-0 left-4 z-20 text-white font-Lato text-[13px] tracking-widest ">
                          SHELTON STREET {""} COVENT GARDEN {""} LONDON {""}{" "}
                          WC2H
                          <div className="text-white font-Lato text-[13px]  tracking-widest absolute top-6 left-[120px] z-20 ">
                            UNITED KINGDOM
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-row justify-between w-full h-auto  absolute bottom-8 z-20 px-10">
                        <div className="">
                          <Image
                            src={"/navlinks/Group 3005.png"}
                            alt=""
                            width={59.82}
                            height={14.63}
                            className="w-[59.82px] h-[14.63px]"
                          />
                        </div>

                        <div className="Center flex flex-col w-full   ">
                          <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-40 z-20">
                            {" "}
                            5,000,000 GBP
                          </div>
                          <div className="w-[114px] h-[19px]  text-white font-Lato text-[9px] absolute top-6 left-[185px]  z-20">
                            {" "}
                            #ZM7861234567
                          </div>
                        </div>

                        <div className="w-[114px] h-[19px]   text-white font-Lato text-[14px] absolute top-0 right-0  z-20">
                          {" "}
                          <div className=" absolute bottom-[-10px] right-[110px] w-[35.95px] h-[35.95px] mr-4">
                            <CircularProgressbar
                              value={percentage}
                              text={`${percentage}%`}
                              styles={buildStyles({
                                textColor: "white",
                                pathColor: "turquoise",
                                trailColor: "black",
                              })}
                            />
                          </div>
                          <Image
                            src={"/New Folder/g12.png"}
                            width={69.28}
                            height={24.22}
                            alt=""
                            className="w-[69.28px] h-[24.22px]"
                          />
                        </div>
                      </div>
                    </div>
                    <SwiperSlide className="relative">
                      <Image
                        src={"/card-1.png"}
                        alt="Building 1"
                        width={454}
                        height={574}
                        className="w-[454px] h-[574px]"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={"/img-2.png"}
                        alt="Building 2"
                        width={454}
                        height={574}
                        className="w-[454px] h-[574px]"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src={"/Img-3.png"}
                        alt="Building 3"
                        width={454}
                        height={574}
                        className="w-[454px] h-[574px]"
                      />
                    </SwiperSlide>
                    <Image
                      src={"/New Folder/bottomGrad.png"}
                      alt="gradient 1"
                      width={100}
                      height={100}
                      className="w-[454px] h-[159px] absolute bottom-0 z-10"
                    />
                  </Swiper>
                </div>
                <div className="countdown-container absolute top-0 left-0 w-full h-auto bg-transparent text-white flex justify-center items-center z-20 py-2">
                  <Countdown
                    date={new Date(Date.now() + 999993784)} // Example countdown time
                    renderer={({ days, hours, minutes, seconds }) => (
                      <div className="flex justify-between w-[390.41px] h-[59.77px] ">
                        <div className="flex flex-col  items-center w-[57.85px] h-[59.76px]   relative">
                          <span className="text-4xl w-[57px] h-[37px] font-Lato absolute top-0 left-2">
                            {zeroPad(days, 2)}
                          </span>
                          <span className="text-sm mt-1  mr-[21px] w-[9px] h-[32px] font-Lato absolute bottom-[-15px]">
                            DAYS
                          </span>
                        </div>

                        <div className="flex flex-col  items-center relative">
                          <span className="text-4xl  w-[60px] h-[37px] font-Lato ml-3">
                            {zeroPad(hours, 2)}
                          </span>
                          <span className="text-sm mt-1 H-[9px] W-[46px] font-Lato absolute bottom-0 ">
                            HOURS
                          </span>
                        </div>

                        <div className="flex flex-col items-center  ">
                          <span className="text-4xl h-[37px] w-[60px] font-Lato text-center">
                            {zeroPad(minutes, 2)}
                          </span>
                          <span className="text-sm h-[9px] mt-1 w-[61px] font-Lato text-center">
                            MINS
                          </span>
                        </div>

                        <div className="flex flex-col items-center ">
                          <span className="text-4xl h-[37px] w-[56px] font-Lato text-center">
                            {zeroPad(seconds, 2)}
                          </span>
                          <span className="text-sm h-[10px] w-[64px] font-Lato text-center mt-1">
                            SECONDS
                          </span>
                        </div>
                      </div>
                    )}
                  />
                </div>
              </div>
            </SwiperSlide>
            {/* Card 2 with Nested Swiper */}
            <SwiperSlide>
              <div className="card-2 border border-black w-[454px] h-[574px]">
                {/* Nested Swiper inside Card 2 */}
                <div className="inner-swiper-container mt-0">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="inner-swiper"
                  >
                    {/* <Image
                      src={"/New Folder/topGrad.png"}
                      alt="gradient 1"
                      width={100}
                      height={100}
                      className="w-[454px] h-[159px] absolute top-0 z-20"
                    />

                    <Image
                      src={"/New Folder/bottomGrad.png"}
                      alt="gradient 2"
                      width={100}
                      height={100}
                      className="w-[454px] h-[159px] absolute bottom-0 z-20"
                    /> */}
                    <SwiperSlide>
                      <Image
                        src={"/img-2.png"}
                        alt="Building 2"
                        width={454}
                        height={574}
                        className="w-[454px] h-[574px]"
                      />
                      <Image
                        src={"/New Folder/topGrad.png"}
                        alt="gradient 1"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute top-0 z-20"
                      />

                      <Image
                        src={"/New Folder/bottomGrad.png"}
                        alt="gradient 2"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute bottom-0 z-20"
                      />
                      <div className="content">
                        <div className="w-[374px] h-[42px]  absolute bottom-14 left-9 z-20">
                          <div className="absolute top-0 left-4 z-20 text-white font-Lato text-[13px] tracking-widest ">
                            SHELTON STREET {""} COVENT GARDEN {""} LONDON {""}{" "}
                            WC2H
                            <div className="text-white font-Lato text-[13px]  tracking-widest absolute top-6 left-[120px] z-20 ">
                              UNITED KINGDOM
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row justify-between w-full h-auto  absolute bottom-8 z-20 px-10">
                          <div className="">
                            <Image
                              src={"/navlinks/Group 3005.png"}
                              alt=""
                              width={59.82}
                              height={14.63}
                              className="w-[59.82px] h-[14.63px]"
                            />
                          </div>

                          <div className="flex flex-col w-full   ">
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-40 z-20">
                              {" "}
                              5,000,000 GBP
                            </div>
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[9px] absolute top-6 left-[185px]  z-20">
                              {" "}
                              #ZM7861234567
                            </div>
                          </div>

                          <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-0  z-20">
                            {" "}
                            <div className=" absolute bottom-[-12px] right-[80px] w-[35.95px] h-[35.95px] mr-4">
                              <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                  textColor: "white",
                                  pathColor: "turquoise",
                                  trailColor: "black",
                                })}
                              />
                            </div>
                            <Image
                              src={"/New Folder/Yellow.png"}
                              width={40.36}
                              height={40.36}
                              alt=""
                              className="w-[40.36px] h-[40.36px] ml-10"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={"/Img-3.png"}
                        alt="Building 3"
                        width={454}
                        height={574}
                        className="w-[454px] h-[574px]"
                      />
                      <Image
                        src={"/New Folder/topGrad.png"}
                        alt="gradient 1"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute top-0 z-20"
                      />

                      <Image
                        src={"/New Folder/bottomGrad.png"}
                        alt="gradient 2"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute bottom-0 z-20"
                      />
                      <div className="content">
                        <div className="w-[374px] h-[42px]  absolute bottom-14 left-9 z-20">
                          <div className="absolute top-0 left-4 z-20 text-white font-Lato text-[13px] tracking-widest ">
                            SHELTON STREET {""} COVENT GARDEN {""} LONDON {""}{" "}
                            WC2H
                            <div className="text-white font-Lato text-[13px]  tracking-widest absolute top-6 left-[120px] z-20 ">
                              UNITED KINGDOM
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row justify-between w-full h-auto  absolute bottom-8 z-20 px-10">
                          <div className="">
                            <Image
                              src={"/navlinks/Group 3005.png"}
                              alt=""
                              width={59.82}
                              height={14.63}
                              className="w-[59.82px] h-[14.63px]"
                            />
                          </div>

                          <div className="flex flex-col w-full   ">
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-40 z-20">
                              {" "}
                              5,000,000 GBP
                            </div>
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[9px] absolute top-6 left-[185px]  z-20">
                              {" "}
                              #ZM7861234567
                            </div>
                          </div>

                          <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-0  z-20">
                            {" "}
                            <div className=" absolute bottom-[-10px] right-[110px] w-[35.95px] h-[35.95px] mr-4">
                              <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                  textColor: "white",
                                  pathColor: "turquoise",
                                  trailColor: "black",
                                })}
                              />
                            </div>
                            <Image
                              src={"/New Folder/g12.png"}
                              width={69.28}
                              height={24.22}
                              alt=""
                              className="w-[69.28px] h-[24.22px]"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="countdown-container absolute top-0 left-0 w-full h-auto bg-transparent text-white flex justify-center items-center z-20 py-2">
                  <Countdown
                    date={new Date(Date.now() + 3029993784)} // Example countdown time
                    renderer={({ days, hours, minutes, seconds }) => (
                      <div className="flex justify-between w-[390.41px] h-[59.77px] ">
                        <div className="flex flex-col  items-center w-[57.85px] h-[59.76px]   relative">
                          <span className="text-4xl w-[57px] h-[37px] font-Lato absolute top-0 left-2">
                            {zeroPad(days, 2)}
                          </span>
                          <span className="text-sm mt-1  mr-[21px] w-[9px] h-[32px] font-Lato absolute bottom-[-15px]">
                            DAYS
                          </span>
                        </div>

                        <div className="flex flex-col  items-center relative">
                          <span className="text-4xl  w-[60px] h-[37px] font-Lato ml-3">
                            {zeroPad(hours, 2)}
                          </span>
                          <span className="text-sm mt-1 H-[9px] W-[46px] font-Lato absolute bottom-0 ">
                            HOURS
                          </span>
                        </div>

                        <div className="flex flex-col items-center  ">
                          <span className="text-4xl h-[37px] w-[60px] font-Lato text-center">
                            {zeroPad(minutes, 2)}
                          </span>
                          <span className="text-sm h-[9px] mt-1 w-[61px] font-Lato text-center">
                            MINS
                          </span>
                        </div>

                        <div className="flex flex-col items-center ">
                          <span className="text-4xl h-[37px] w-[56px] font-Lato text-center">
                            {zeroPad(seconds, 2)}
                          </span>
                          <span className="text-sm h-[10px] w-[64px] font-Lato text-center mt-1">
                            SECONDS
                          </span>
                        </div>
                      </div>
                    )}
                  />

                  <div className="SHARE absolute top-20 right-6 w-[73.41pxpx] h-[23px] ">
                    <div className="flex flex-row gap-x-6">
                      <Image
                        src={"/New Folder/share.png"}
                        width={20.44}
                        height={23}
                        alt=""
                        className="w-[25.88px] h-[23px] "
                      />
                      <Image
                        src={"/New Folder/heart.png"}
                        width={25.88}
                        height={23}
                        alt=""
                        className="w-[25.88px] h-[23px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Card 3 with Nested Swiper */}
            <SwiperSlide>
              <div className="card-3 border border-black w-[454px] h-[574px]">
                {/* Nested Swiper inside Card 3 */}
                <div className="inner-swiper-container mt-0">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="inner-swiper"
                  >
                    <SwiperSlide>
                      <Image
                        src={"/card-1.png"}
                        alt="Building 1"
                        width={454}
                        height={574}
                        className="w-[454px] h-[574px]"
                      />
                      <Image
                        src={"/New Folder/topGrad.png"}
                        alt="gradient 1"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute top-0 z-20"
                      />

                      <Image
                        src={"/New Folder/bottomGrad.png"}
                        alt="gradient 2"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute bottom-0 z-20"
                      />
                      <div className="content">
                        <div className="w-[374px] h-[42px]  absolute bottom-14 left-9 z-20">
                          <div className="absolute top-0 left-4 z-20 text-white font-Lato text-[13px] tracking-widest ">
                            SHELTON STREET {""} COVENT GARDEN {""} LONDON {""}{" "}
                            WC2H
                            <div className="text-white font-Lato text-[13px]  tracking-widest absolute top-6 left-[120px] z-20 ">
                              UNITED KINGDOM
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row justify-between w-full h-auto  absolute bottom-8 z-20 px-10">
                          <div className="">
                            <Image
                              src={"/navlinks/Group 3005.png"}
                              alt=""
                              width={59.82}
                              height={14.63}
                              className="w-[59.82px] h-[14.63px]"
                            />
                          </div>

                          <div className="flex flex-col w-full   ">
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-40 z-20">
                              {" "}
                              5,000,000 GBP
                            </div>
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[9px] absolute top-6 left-[185px]  z-20">
                              {" "}
                              #ZM7861234567
                            </div>
                          </div>

                          <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-0  z-20">
                            {" "}
                            <div className=" absolute bottom-[-12px] right-[110px] w-[35.95px] h-[35.95px] mr-4">
                              <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                  textColor: "white",
                                  pathColor: "turquoise",
                                  trailColor: "black",
                                })}
                              />
                            </div>
                            <Image
                              src={"/New Folder/g12.png"}
                              width={69.28}
                              height={24.22}
                              alt=""
                              className="w-[69.28px] h-[24.22px]"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={"/img-2.png"}
                        alt="Building 2"
                        width={454}
                        height={574}
                        className="w-[454px] h-[574px]"
                      />
                      <Image
                        src={"/New Folder/topGrad.png"}
                        alt="gradient 1"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute top-0 z-20"
                      />

                      <Image
                        src={"/New Folder/bottomGrad.png"}
                        alt="gradient 2"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute bottom-0 z-20"
                      />

                      <div className="content">
                        <div className="w-[374px] h-[42px]  absolute bottom-14 left-9 z-20">
                          <div className="absolute top-0 left-4 z-20 text-white font-Lato text-[13px] tracking-widest ">
                            SHELTON STREET {""} COVENT GARDEN {""} LONDON {""}{" "}
                            WC2H
                            <div className="text-white font-Lato text-[13px]  tracking-widest absolute top-6 left-[120px] z-20 ">
                              UNITED KINGDOM
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row justify-between w-full h-auto  absolute bottom-8 z-20 px-10">
                          <div className="">
                            <Image
                              src={"/navlinks/Group 3005.png"}
                              alt=""
                              width={59.82}
                              height={14.63}
                              className="w-[59.82px] h-[14.63px]"
                            />
                          </div>

                          <div className="flex flex-col w-full   ">
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-40 z-20">
                              {" "}
                              5,000,000 GBP
                            </div>
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[9px] absolute top-6 left-[185px]  z-20">
                              {" "}
                              #ZM7861234567
                            </div>
                          </div>

                          <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-0  z-20">
                            {" "}
                            <div className=" absolute bottom-[-12px] right-[80px] w-[35.95px] h-[35.95px] mr-4">
                              <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                  textColor: "white",
                                  pathColor: "turquoise",
                                  trailColor: "black",
                                })}
                              />
                            </div>
                            <Image
                              src={"/New Folder/Yellow.png"}
                              width={40.36}
                              height={40.36}
                              alt=""
                              className="w-[40.36px] h-[40.36px] ml-10"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="countdown-container absolute top-0 left-0 w-full h-auto bg-transparent text-white flex justify-center items-center z-20 py-2">
                  <Countdown
                    date={new Date(Date.now() + 4029993784)} // Example countdown time
                    renderer={({ days, hours, minutes, seconds }) => (
                      <div className="flex justify-between w-[390.41px] h-[59.77px] ">
                        <div className="flex flex-col  items-center w-[57.85px] h-[59.76px]   relative">
                          <span className="text-4xl w-[57px] h-[37px] font-Lato absolute top-0 left-2">
                            {zeroPad(days, 2)}
                          </span>
                          <span className="text-sm mt-1  mr-[21px] w-[9px] h-[32px] font-Lato absolute bottom-[-15px]">
                            DAYS
                          </span>
                        </div>

                        <div className="flex flex-col  items-center relative">
                          <span className="text-4xl  w-[60px] h-[37px] font-Lato ml-3">
                            {zeroPad(hours, 2)}
                          </span>
                          <span className="text-sm mt-1 H-[9px] W-[46px] font-Lato absolute bottom-0 ">
                            HOURS
                          </span>
                        </div>

                        <div className="flex flex-col items-center  ">
                          <span className="text-4xl h-[37px] w-[60px] font-Lato text-center">
                            {zeroPad(minutes, 2)}
                          </span>
                          <span className="text-sm h-[9px] mt-1 w-[61px] font-Lato text-center">
                            MINS
                          </span>
                        </div>

                        <div className="flex flex-col items-center ">
                          <span className="text-4xl h-[37px] w-[56px] font-Lato text-center">
                            {zeroPad(seconds, 2)}
                          </span>
                          <span className="text-sm h-[10px] w-[64px] font-Lato text-center mt-1">
                            SECONDS
                          </span>
                        </div>
                      </div>
                    )}
                  />

                  <div className="SHARE absolute top-20 right-6 w-[73.41pxpx] h-[23px] ">
                    <div className="flex flex-row gap-x-6">
                      <Image
                        src={"/New Folder/share.png"}
                        width={20.44}
                        height={23}
                        alt=""
                        className="w-[25.88px] h-[23px] "
                      />
                      <Image
                        src={"/New Folder/heart.png"}
                        width={25.88}
                        height={23}
                        alt=""
                        className="w-[25.88px] h-[23px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Card 4 with Nested Swiper */}
            <SwiperSlide>
              <div className="card-4 border border-black w-[454px] h-[574px]">
                {/* Nested Swiper inside Card 4 */}
                <div className="inner-swiper-container mt-0">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="inner-swiper"
                  >
                    <SwiperSlide>
                      <Image
                        src={"/card-4.png"}
                        alt="Building 4"
                        width={454}
                        height={574}
                        className="w-[454px] h-[574px]"
                      />
                      <Image
                        src={"/New Folder/topGrad.png"}
                        alt="gradient 1"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute top-0 z-20"
                      />

                      <Image
                        src={"/New Folder/bottomGrad.png"}
                        alt="gradient 1"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute bottom-0 z-20"
                      />
                      <div className="content">
                        <div className="w-[374px] h-[42px]  absolute bottom-14 left-9 z-20">
                          <div className="absolute top-0 left-4 z-20 text-white font-Lato text-[13px] tracking-widest ">
                            SHELTON STREET {""} COVENT GARDEN {""} LONDON {""}{" "}
                            WC2H
                            <div className="text-white font-Lato text-[13px]  tracking-widest absolute top-6 left-[120px] z-20 ">
                              UNITED KINGDOM
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row justify-between w-full h-auto  absolute bottom-8 z-20 px-10">
                          <div className="">
                            <Image
                              src={"/navlinks/Group 3005.png"}
                              alt=""
                              width={59.82}
                              height={14.63}
                              className="w-[59.82px] h-[14.63px]"
                            />
                          </div>

                          <div className="flex flex-col w-full   ">
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-40 z-20">
                              {" "}
                              5,000,000 GBP
                            </div>
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[9px] absolute top-6 left-[185px]  z-20">
                              {" "}
                              #ZM7861234567
                            </div>
                          </div>

                          <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-0  z-20">
                            {" "}
                            <div className=" absolute bottom-[-12px] right-[80px] w-[35.95px] h-[35.95px] mr-4">
                              <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                  textColor: "white",
                                  pathColor: "turquoise",
                                  trailColor: "black",
                                })}
                              />
                            </div>
                            <Image
                              src={"/New Folder/Yellow.png"}
                              width={40.36}
                              height={40.36}
                              alt=""
                              className="w-[40.36px] h-[40.36px] ml-10"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <Image
                        src={"/Img-3.png"}
                        alt="Building 3"
                        width={454}
                        height={574}
                        className="w-[454px] h-[574px]"
                      />
                      <Image
                        src={"/New Folder/topGrad.png"}
                        alt="gradient 1"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute top-0 z-20"
                      />

                      <Image
                        src={"/New Folder/bottomGrad.png"}
                        alt="gradient 2"
                        width={100}
                        height={100}
                        className="w-[454px] h-[159px] absolute bottom-0 z-20"
                      />
                      <div className="content">
                        <div className="w-[374px] h-[42px]  absolute bottom-14 left-9 z-20">
                          <div className="absolute top-0 left-4 z-20 text-white font-Lato text-[13px] tracking-widest ">
                            SHELTON STREET {""} COVENT GARDEN {""} LONDON {""}{" "}
                            WC2H
                            <div className="text-white font-Lato text-[13px]  tracking-widest absolute top-6 left-[120px] z-20 ">
                              UNITED KINGDOM
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row justify-between w-full h-auto  absolute bottom-8 z-20 px-10">
                          <div className="">
                            <Image
                              src={"/navlinks/Group 3005.png"}
                              alt=""
                              width={59.82}
                              height={14.63}
                              className="w-[59.82px] h-[14.63px]"
                            />
                          </div>

                          <div className="flex flex-col w-full   ">
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-40 z-20">
                              {" "}
                              5,000,000 GBP
                            </div>
                            <div className="w-[114px] h-[19px]  text-white font-Lato text-[9px] absolute top-6 left-[185px]  z-20">
                              {" "}
                              #ZM7861234567
                            </div>
                          </div>

                          <div className="w-[114px] h-[19px]  text-white font-Lato text-[14px] absolute top-0 right-0  z-20">
                            {" "}
                            <div className=" absolute bottom-[-12px] right-[110px] w-[35.95px] h-[35.95px] mr-4">
                              <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                  textColor: "white",
                                  pathColor: "#F8E231",
                                  trailColor: "#000000",
                                  // trailColor: "linear-gradient(to right,#000000, #BE9F56)",
                                })}
                              />
                            </div>
                            <Image
                              src={"/New Folder/g12.png"}
                              width={69.28}
                              height={24.22}
                              alt=""
                              className="w-[69.28px] h-[24.22px]"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="countdown-container absolute top-0 left-0 w-full h-auto bg-transparent text-white flex justify-center items-center z-20 py-2">
                  <Countdown
                    date={new Date(Date.now() + 3029993784)} // Example countdown time
                    renderer={({ days, hours, minutes, seconds }) => (
                      <div className="flex justify-between w-[390.41px] h-[59.77px] ">
                        <div className="flex flex-col  items-center w-[57.85px] h-[59.76px]   relative">
                          <span className="text-4xl w-[57px] h-[37px] font-Lato absolute top-0 left-2">
                            {zeroPad(days, 2)}
                          </span>
                          <span className="text-sm mt-1  mr-[21px] w-[9px] h-[32px] font-Lato absolute bottom-[-15px]">
                            DAYS
                          </span>
                        </div>

                        <div className="flex flex-col  items-center relative">
                          <span className="text-4xl  w-[60px] h-[37px] font-Lato ml-3">
                            {zeroPad(hours, 2)}
                          </span>
                          <span className="text-sm mt-1 H-[9px] W-[46px] font-Lato absolute bottom-0 ">
                            HOURS
                          </span>
                        </div>

                        <div className="flex flex-col items-center  ">
                          <span className="text-4xl h-[37px] w-[60px] font-Lato text-center">
                            {zeroPad(minutes, 2)}
                          </span>
                          <span className="text-sm h-[9px] mt-1 w-[61px] font-Lato text-center">
                            MINS
                          </span>
                        </div>

                        <div className="flex flex-col items-center ">
                          <span className="text-4xl h-[37px] w-[56px] font-Lato text-center">
                            {zeroPad(seconds, 2)}
                          </span>
                          <span className="text-sm h-[10px] w-[64px] font-Lato text-center mt-1">
                            SECONDS
                          </span>
                        </div>
                      </div>
                    )}
                  />

                  <div className="SHARE absolute top-20 right-6 w-[73.41pxpx] h-[23px] ">
                    <div className="flex flex-row gap-x-6">
                      <Image
                        src={"/New Folder/share.png"}
                        width={20.44}
                        height={23}
                        alt=""
                        className="w-[25.88px] h-[23px] "
                      />
                      <Image
                        src={"/New Folder/heart.png"}
                        width={25.88}
                        height={23}
                        alt=""
                        className="w-[25.88px] h-[23px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>

        <div className="flex  gap-x-4 px-12 border border-black mt-4 ">
          <div className="w-[454px] h-[58.17px] bg-[#333] relative  rounded-xl">
            <div className=" relative  w-[346px] h-[26px]  mx-8 my-4">
              <p className="absolute left-0 text-white font-Lato text-[19px]">
                &pound; 25.00 GBP
              </p>
              <p className="absolute right-0 text-white font-Lato text-[19px]">
                BUY ENTRY NOW
              </p>
            </div>
            <p className="absolute right-4 bottom-1 font-Lato text-[9px] text-white">
              #ZM7861234567
            </p>
          </div>

          <div className="w-[454px] h-[58.17px] bg-[#333] border border-white  rounded-xl">
            <div className=" relative  w-[346px] h-[26px]  mx-8 my-4">
              <p className="absolute left-0 text-white font-Lato text-[19px]">
                &pound; 25.00 GBP
              </p>
              <p className="absolute right-0 text-white font-Lato text-[19px]">
                BUY ENTRY NOW
              </p>
            </div>
            <p className="absolute right-4 bottom-1 font-Lato text-[9px] text-white">
              #ZM7861234568
            </p>
          </div>

          <div className="w-[454px] h-[58.17px] bg-[#333] border border-white  rounded-xl">
            <div className=" relative  w-[346px] h-[26px]  mx-8 my-4">
              <p className="absolute left-0 text-white font-Lato text-[19px]">
                &pound; 25.00 GBP
              </p>
              <p className="absolute right-0 text-white font-Lato text-[19px]">
                BUY ENTRY NOW
              </p>
            </div>

            <p className="absolute right-4 bottom-1 font-Lato text-[9px] text-white">
              #ZM7861234569
            </p>
          </div>

          <div className="w-[454px] h-[58.17px] bg-[#333] border border-white  rounded-xl">
            <div className=" relative  w-[346px] h-[26px]  mx-8 my-4">
              <p className="absolute left-0 text-white font-Lato text-[19px]">
                &pound; 25.00 GBP
              </p>
              <p className="absolute right-0 text-white font-Lato text-[19px]">
                BUY ENTRY NOW
              </p>
            </div>

            <p className="absolute right-4 bottom-1 font-Lato text-[9px] text-white">
              #ZM7861234570
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
