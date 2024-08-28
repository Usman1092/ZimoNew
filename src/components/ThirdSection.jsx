import React from "react";
import Image from "next/image";
export const ThirdSection = () => {
  return (
    <div className="ThirdSection bg-[#fff] flex  justify-center text-center w-[1920px] h-auto pt-10">
      <div className="w-[1833.59px] h-[867.95px]  relative ">
        {/* <div className=" relative xs:flex flex-col gap-y-5  sm:flex flex-col gap-y-5  md:flex flex-row justify-between  3xl:flex flex-row justify-between"> */}
        <div class="relative flex flex-col gap-y-5 xs:flex-col sm:flex-col md:flex-row justify-between lg:flex-row justify-between">
       
          <div className=" w-[657px] h-[131px] relative  ">
            <p className="font-Lato text-[40px] font-bold text-start absolute top-0 left-0">
              Weekly NewsLetter
            </p>

            <p className="w-[657px] h-[57px] font-Lato text-[20px] absolute bottom-0 left-0 text-left>">
              Receive the beautifully curated selection of the latest listings
              from around the world and find out what`s trending
            </p>

          </div>

          <div className="w-[500px] h-[189.51px]    ">
            <p className="font-Lato text-[20px] ml-[-10px] font-bold w-[180px] h-[27px] ">
              EMAIL ADDRESS
            </p>
            <button className="w-[500px] h-[68.51px] border border-black flex justify-center items-center mt-4 cursor-pointer">
              Email Address
            </button>
            <button className="w-[500px] h-[68.51px] bg-[#333333] text-white flex justify-center items-center absolute bottom-0 cursor-pointer ">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="w-[493px] h-[49px] md:absolute right-2   ">
          <p className="font-Lato text-[14px] mt-5  ml-[0px]">
            {" "}
            BY SHARING YOUR EMAIL, YOU ARE CONFIRMING THAT YOU AGREE TO OUR{" "}
            <strong>Terms and Conditions</strong> AND{" "}
            <strong>PRIVACY POLICY</strong>.
          </p>
        </div>

        <div className="Links mt-[10px] flex flex-col md:flex-row  md:flex-row w-full justify-between  sm:mt-[80px] md:mt-[150px] ">
          <div className="COL-1 flex flex-row md:flex-col">
            <heading className="font-Lato text-[18px] font-bold text-start">
              ZIMOPRO.COM
            </heading>
            <div className="links pl-4 flex flex-row md:flex-col sm:pl-0 md:pl-0 space-x-4 sm:space-x-5  md:space-x-10">
              <p className="font-Lato text-[18px] text-center">ABOUT</p>
              <p className="font-Lato text-[18px] text-center">CONTACT</p>
              <p className="font-Lato text-[18px] text-center">HELP & FAQ</p>

              <div className="flex flex-row md:flex-col space-x-4 md:space-x-14">
                <div className="relative  w-[233.98px]  h-[76.37px] ">
                  <p className="font-Lato absolute top-0 left-0 text-[5px]">
                    FOR PROPERTY AGENT ONLY
                  </p>
                  <Image
                    src={"/THIRDSECTION/ZIMO.png"}
                    alt=""
                    width={215.84}
                    height={58.37}
                    className="absolute bottom-0 w-[50%] h-auto sm:w-[40%] h-auto md:w-[215.84px] h-[58.37px]"
                  />
                  <Image
                    src={"/THIRDSECTION/PRO.png"}
                    alt=""
                    width={22.45}
                    height={22.45}
                    className="absolute top-4 right-0 xd:w-[7%] h-auto sm:w-[5%] h-auto   md:w-[22.45px] h-[22.45px]"
                  />
                </div>

                <div className="w-[231.83px] h-[50px]  relative">
                  <p className=" w-[94.18px] h-[5.6px]   font-Lato absolute top-0 left-0 text-[7px] text-start tracking-widest  ">
                    IN PARTNERSHIP WITH
                  </p>
                  <Image
                    src={"/civica.png"}
                    alt=""
                    width={145.91}
                    height={31.24}
                    className="absolute bottom-0 w-[145.91px] h-[31.24px] sm:w-sm xs:w-xs"
                  />
                  <Image
                    src={"/ces.png"}
                    alt=""
                    width={65.15}
                    height={31.24}
                    className="absolute bottom-0 right-0  w-[65.15px] h-[31.24px] sm:w-sm xs:w-xs"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="COL-2 flex flex-row md:flex-col  ">
            <heading className="font-Lato font-bold text-start pt-4 md:pt-0">
              CATEGORIES
            </heading>
            <div className="links pl-4  pt-4 md:pt-0 flex flex-row md:flex-col   sm:pl-8 md:pl-10  space-x-4 sm:space-x-5  md:space-x-10">
              <p className="font-Lato text-[18px] text-start">REAL ESTATE</p>
              <p className="font-Lato text-[18px] text-start">
                PRIVATE ISLANDS
              </p>
              <p className="font-Lato text-[18px] text-start">YACHTS</p>
              <p className="font-Lato text-[18px] text-start">JESTS</p>
              <p className="font-Lato text-[18px] text-start">CARS</p>
              <p className="font-Lato text-[18px] text-start">WATCHES</p>
              <p className="font-Lato text-[18px] text-start">DIMONDS</p>
              <p className="font-Lato text-[18px] text-start">
                TRAVEL THE WORLD
              </p>
            </div>
          </div>

          {/* <div className="COL-3 flex flex-col  ">
            <heading className="font-Lato font-bold text-start pt-4 md:pt-0">
              BUSINESS / AGENTS
            </heading>
            <div className="links pt-4 sm:pt-8 md:pt-10  xs:space-y-4 sm:space-y-5  md:space-y-10">
              <p className="font-Lato text-[18px] text-start">LIST WITH US</p>
              <p className="font-Lato text-[18px] text-start">PARTNER</p>
              <p className="font-Lato text-[18px] text-start">
                DISPLAY ADVERTISING
              </p>
              <p className="font-Lato text-[18px] text-start">INVESTERS</p>
            </div>
          </div> */}
          
          <div className="COL-3 flex flex-row md:flex-col  ">
            <heading className="font-Lato font-bold text-start pt-4 md:pt-0">
              BUSINESS AGENTS
            </heading>
            <div className="links pl-4  pt-4 md:pt-0 flex flex-row md:flex-col   sm:pl-8 md:pl-10  space-x-4 sm:space-x-5  md:space-x-10">
              <p className="font-Lato text-[18px] text-left">LIST WITH US</p>
              <p className="font-Lato text-[18px] text-start">
                PARTNERS
              </p>
              <p className="font-Lato text-[18px] text-start">DISPLAY ADVERTISING</p>
              <p className="font-Lato text-[18px] text-start">INVESTERS</p>
            </div>
          </div>
          <div className="COL-4 flex flex-col  ">
            <heading className="font-Lato font-bold text-left pt-4 md:pt-0">
              SELL YOUR HOME
            </heading>
            <p className="font-Lato text-[18px] pt-2 md:pt-5 text-start">
              FIND A ZIMO AGENT
            </p>

            <heading className="font-Lato font-bold pt-4 md:pt-10 text-left">
              GIFT CARD
            </heading>
            <p className="font-Lato text-[18px] pt-2 md:pt-5 text-start">
              PURCHASE eGIFT CARD
            </p>
          </div>

          <div className="COL-5 flex flex-row md:flex-col  ">
            <heading className="font-Lato font-bold text-left pt-8 md:pt-0">
              SUPPORTED CHARITIES
            </heading>
            <div className="logos flex flex-row ml-10 md:flex-col mb-2 space-x-8 md:space-y-8">
              <Image
                src={"/THIRDSECTION/uni.png"}
                alt=""
                width={166.58}
                height={40}
                className="mt-0 w-[130px] h-auto sm:w-[150px] h-auto md:w-[166.58px] h-[40px] "
              />
              <Image
                src={"/THIRDSECTION/world.png"}
                alt=""
                width={193.78}
                height={40}
                className="mt-5 w-[158px] h-auto  sm:w-[178px] h-auto md:w-[193.78px] h-[40px]"
              />
              <Image
                src={"/THIRDSECTION/save.png"}
                alt=""
                width={196.82}
                height={40}
                className="mt-5 w-[156px] h-auto  sm:w-[176px] h-auto  md:w-[196.82px] h-[40px]"
              />
              <Image
                src={"/THIRDSECTION/great.png"}
                alt=""
                width={166.28}
                height={84.87}
                className="mt-5 w-[131px] h-auto sm:w-[151px] h-auto md:w-[166.58px] h-[84.87px]"
              />
            </div>
          </div>
        </div>



     {/* last copyright line  */}
        <div className=" flex flex-row justify-between border border-black   ">
          <div className="w-[479px] h-[19px] absolute  bottom-0  flex flex-row justify-between">
            <div className="flex flex-row justify-center items-center">
              <Image
                src={"/navlinks/Path 1.png"}
                alt=""
                width={13.88}
                height={10.98}
                className="w-[13.88px]   h-[10.98px]"
              />
              <Image
                src={"/navlinks/Path 2.png"}
                alt=""
                width={13.88}
                height={10.98}
                className="w-[13.88px]   h-[10.98px]"
              />
              <Image
                src={"/navlinks/Path 3.png"}
                alt=""
                width={13.88}
                height={10.98}
                className="w-[13.88px]   h-[10.98px]"
              />
              <Image
                src={"/navlinks/Path 4.png"}
                alt=""
                width={13.88}
                height={10.98}
                className="w-[13.88px]   h-[10.98px]"
              />
            </div>
            {/* <p className="text-[10px] "> textLogo</p> */}
            <p className="w-[416px] h-[19px]  font-Lato text-[13px] tracking-widest">
              COPYRIGHT{""} &copy; 2022 ZIMO{""} GROUP ALL RIGHTS {"  "}{" "}
              RESERVED
            </p>
          </div>

          <div className=" w-[459px] h-[17px] absolute  bottom-0 left-[700px]  flex flex-row justify-between">
            <p className="w-[175px] h-[17px]  font-Lato text-[13px] text-start tracking-wider">
              TERMS{""} AND{""} CONDITIONS
            </p>

            <p className="w-[112px] h-[17px]  font-Lato text-[13px] text-start tracking-wider">
              PRIVACY{""} POLICY
            </p>

            <p className="w-[60px] h-[17px]  font-Lato text-[13px] text-start tracking-wider">
              COOKIES
            </p>
          </div>

          <div className="w-[495px] h-[39.16px]  bg-[#ffffff]   absolute  bottom-0 right-0 flex flex-row justify-between  ">
            <Image
              src={"/icons/Group 37.png"}
              alt=""
              width={55.94}
              height={39.16}
              className=" w-[55.94px] h-[39.16px]"
            />
            <Image
              src={"/icons/Group 41.png"}
              alt=""
              width={45.27}
              height={39.16}
              className="  w-[45.27px] h-[39.16px]"
            />
            <Image
              src={"/icons/Group 39.png"}
              alt=""
              width={48.18}
              height={39.16}
              className=" w-[48.18px] h-[39.16px]"
            />
            <Image
              src={"/icons/Group 38.png"}
              alt=""
              width={20.81}
              height={39.16}
              className=" w-[20.81px] h-[39.16px]"
            />
            <Image
              src={"/icons/Group 40.png"}
              alt=""
              width={39.15}
              height={39.16}
              className=" w-[39.15px] h-[39.16px]"
            />
            <Image
              src={"/icons/Path 24.png"}
              alt=""
              width={34.22}
              height={39.16}
              className=" w-[34.22px] h-[39.16px]"
            />
            <Image
              src={"/icons/Path 23.png"}
              alt=""
              width={39.09}
              height={39.16}
              className=" w-[39.09px] h-[39.16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
