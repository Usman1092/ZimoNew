import Image from "next/image";
import { Inter } from "next/font/google";
import { HeroSection } from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* <p className="text-center">This is index page</p> */}
      <HeroSection />
    
    </main>
  );
}
