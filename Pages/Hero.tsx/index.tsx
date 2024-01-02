"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface WindowSize {
  width: number | null;
  height: number | null;
}

const Hero = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize.width !== null && windowSize.width < 768;

  return (
    <div className="w-full bg-white overflow-y-hidden">
      <div className="hero-wrapper relative flex items-center justify-center h-screen">
        <Image
          alt="army"
          layout="fill"
          objectFit="cover"
          src="/images/soldiers.webp"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute z-10 flex items-center justify-center h-full w-full space-y-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-4">
              <h1 className="font-army text-white text-center text-[45px] md:text-[75px]">
                SHOES FOR SOLDIERS
              </h1>
              <Image
                alt="usa"
                src="/images/usawhite.png"
                width={isMobile ? 45 : 85}
                height={isMobile ? 45 : 85}
                className={isMobile ? "mb-2" : "mb-3"}
              />
            </div>
            <p className="font-primary text-white text-center text-[16px] px-4 md:px-0 md:text-[18px] max-w-[500px]">
              Empowering Our Soldiers, One Step at a Time - Join Us in Making a
              Difference With Each Shoe Donated.
            </p>
            <a
              href="#CTA"
              className="hover:text-gray-300 transition duration-300"
            >
              <button className="text-[16px] md:text-[20px] tracking-wider px-12 py-6 bg-red-900 text-white font-bold font-army rounded hover:bg-black transition duration-300 shadow-lg hover:scale-105">
                Learn How You Can Help
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
