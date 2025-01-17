"use client";
import React, { useEffect, useState } from "react";
import HeroImage from "@/assets/hero.svg";
import { AnimatePresence, motion } from "framer-motion";
import RedBracelet from "@/assets/red-bracelet.png";
import BlueBracelet from "@/assets/blue-y-bracelet.jpeg";
import PinkBracelet from "@/assets/pink-w-bracelet.jpeg";
import Image from "next/image";

const braceletImages = [
  { src: RedBracelet, alt: "Red Bracelet" },
  { src: BlueBracelet, alt: "Blue Bracelet" },
  { src: PinkBracelet, alt: "Pink Bracelet" },
];

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % braceletImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isMounted]);

  return (
    <div
      className="w-full md:min-h-screen min-h-[90dvh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${HeroImage.src})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center pt-20 px-4 md:px-8">
        <div className="flex w-full max-w-7xl flex-col md:flex-row justify-between items-center gap-8 md:gap-10 md:px-16">
          <div className="w-full flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-caramello">Personalised Bracelets</h1>
            <div className="text-xl md:text-2xl lg:text-3xl py-2 my-4 bg-custom-gradient items-center justify-center flex ">
              <p>for Everyday Wear</p>
            </div>
          </div>

          <div className=" w-[80%] md:w-[50%] mt-8 md:mt-0">
            <div className="relative bg-white rounded-md p-2 odd:rotate-12 even:rotate-12 shadow-md mx-auto max-w-full">
              {isMounted && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                  >
                    <Image
                      src={braceletImages[currentIndex].src}
                      alt={braceletImages[currentIndex].alt}
                      className="rounded-md w-full h-auto"
                    />
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
