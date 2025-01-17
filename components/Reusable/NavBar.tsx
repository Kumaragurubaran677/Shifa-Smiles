"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute w-full top-0 left-0 z-20">
      <div
        className="flex justify-between items-center px-6 py-2 w-[90%] md:w-[90%] mx-auto fixed top-4 left-1/2 transform -translate-x-1/2 rounded-xl z-10
          bg-white/30 backdrop-blur-lg shadow-lg border border-white/20"
      >
        {/* Logo */}
        <Link href={'/'}>
          <Image src={Logo} alt="Logo" width={150} height={150} className="w-[100px] md:w-[200px]" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-16 text-base font-semibold">
          <Link href="/products" className="hover:text-[#E82A4C]">
            Products
          </Link>
          <Link href="/about" className="hover:text-[#E82A4C]">
            About Us
          </Link>
          <Link href="/testimonials" className="hover:text-[#E82A4C]">
            Testimonials
          </Link>
          <Link href="https://wa.me/9597028220" target="_blank" className="hover:text-[#E82A4C]">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#E82A4C]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="absolute top-full right-0 h-screen w-64 bg-white/80 backdrop-blur-lg shadow-lg md:hidden"
            >
              <div className="flex flex-col items-end py-4 gap-4 text-lg font-semibold pr-8">
                <Link href="/products" className="hover:text-[#E82A4C]">
                  Products
                </Link>
                <Link href="/about" className="hover:text-[#E82A4C]">
                  About Us
                </Link>
                <Link href="/testimonials" className="hover:text-[#E82A4C]">
                  Testimonials
                </Link>
                <Link href="https://wa.me/9597028220" className="hover:text-[#E82A4C]">
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavBar;
