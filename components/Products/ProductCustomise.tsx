import React from "react";
import Image from "next/image";
import CharmImage from "@/assets/charm-image.png";
import Link from "next/link";

const ProductCustomise = () => {
  return (
    <div className="p-4 md:p-10">
      {/* Heading Section */}
      <div className="px-4 md:px-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center md:text-start">
          Add your <span className="text-[#E82A4C]">Favorite Charm</span>
        </h1>
      </div>

      {/* Image and Customization Section */}
      <div className="relative w-full">
        <Image 
          src={CharmImage} 
          alt="Charm"
          className="w-full h-auto object-cover"
          priority
        />
        {/* Overlay Content */}
        <div className="flex flex-col items-center justify-center absolute bottom-4 sm:bottom-8 md:bottom-14 left-1/2 transform -translate-x-1/2 w-full px-4">
          <p className="text-base hidden md:block sm:text-lg md:text-3xl font-bold text-center">
            Customise what <span className="text-[#E82A4C]"><br />you want</span>
          </p>
          <Link
            href="/about"
            className="bg-[#E82A4C] text-white px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base rounded-xl hover:bg-[#d1263f] transition-colors duration-300 text-center mt-2 sm:mt-3"
          >
            Customise
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomise;
