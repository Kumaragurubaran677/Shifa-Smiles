import React from 'react';
import Image from 'next/image';
import AboutImage from '@/assets/home-about.svg';
import Link from 'next/link';

const HomeAbout = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 px-4 md:px-16 py-6 min-h-screen w-full">
        
        <div className="w-full md:w-1/2">
            <Image 
                src={AboutImage} 
                alt="About"
                className="w-full h-auto"
                priority
            />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:items-start gap-6 text-start md:text-left p-2">
            <h1 className="text-4xl md:text-4xl font-bold">
                Welcome to <br /> 
                <span className="text-[#E82A4C]">Shifa & Smiles</span>
            </h1>
            <p className="text-base md:text-xl leading-relaxed">
                We specialize in crafting custom bracelets that resonate with your unique style and personality, all at affordable market prices. Whether it&apos;s a meaningful gift for a loved one or a stylish accessory for yourself, we take pride in offering high-quality, personalized designs that reflect your individuality. At Shifa and Smiles, every bracelet tells a story, and we are here to help you share yours.
            </p>
            <Link 
                href="/about" 
                className="bg-[#E82A4C] text-white px-6 py-3 rounded-xl hover:bg-[#d1263f] transition-colors duration-300 text-center md:self-start"
            >
                Know More
            </Link>
        </div>
    </div>
  )
}

export default HomeAbout