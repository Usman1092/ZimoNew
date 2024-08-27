import Image from "next/image";
import { Inter } from "next/font/google";
import {HeroSection}  from "@/components/HeroSection";
import  FirstSection  from "@/components/FirstSection";
import { ThirdSection } from "@/components/ThirdSection";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      className="bg-[#ffffff] w-[1920px] h-[3889px]"
    >
   
      <HeroSection />
      <FirstSection />
      <ThirdSection />
    
    
    </main>
  );
}
