import Image from "next/image";
import React from "react";
import LefoAbout from "@/assets/About/left.svg";
import RightAbout from "@/assets/About/right.svg";

const AboutHero = () => {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center bg-white">
      {/* Left Image */}
      <div className="absolute -left-16 top-0 md:-left-36">
        <Image
          src={LefoAbout}
          alt="Decorative left"
          className=" hidden md:block"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[60%] lg:w-[40%] text-center flex flex-col items-center justify-center gap-6 p-4 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Welcome to <br />
          <span className="text-[#E82A4C]">Shifa & Smiles ❤️</span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          We specialize in crafting custom bracelets that resonate with your
          unique style and personality, all at affordable market prices.
          Whether it&apos;s a meaningful gift for a loved one or a stylish
          accessory for yourself, we take pride in offering high-quality,
          personalized designs that reflect your individuality. At Shifa and
          Smiles, every bracelet tells a story, and we are here to help you
          share yours.
        </p>
      </div>

      {/* Right Image */}
      <div className="absolute -right-10 top-0 md:-right-36">
        <Image
          src={RightAbout}
          alt="Decorative right"
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default AboutHero;
