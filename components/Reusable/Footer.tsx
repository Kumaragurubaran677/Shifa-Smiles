import React from "react";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Whatsapp } from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-[#EF6A80] text-white pt-12 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <Image src={Logo} alt="Logo" className="h-16 w-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-5 lg:border-r lg:border-white/20 lg:pr-8">
            <h2 className="text-2xl font-semibold">Address</h2>
            <p className="text-base leading-relaxed">1234 Main St, Anytown, India 12345</p>
          </div>

          <div className="space-y-5 lg:border-r lg:border-white/20 lg:pr-8">
            <h2 className="text-2xl font-semibold">Quick Links</h2>
            <div className="flex flex-col space-y-3">
              <Link href="/home" className="text-base hover:text-gray-200 transition-colors duration-300">Home</Link>
              <Link href="/about" className="text-base hover:text-gray-200 transition-colors duration-300">About</Link>
              <Link href="/products" className="text-base hover:text-gray-200 transition-colors duration-300">Products</Link>
              <Link href="/testimonials" className="text-base hover:text-gray-200 transition-colors duration-300">Testimonials</Link>
            </div>
          </div>

          <div className="space-y-5 lg:border-r lg:border-white/20 lg:pr-8">
            <h2 className="text-2xl font-semibold">Legal</h2>
            <div className="flex flex-col space-y-3">
              <Link href="/privacy" className="text-base hover:text-gray-200 transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms" className="text-base hover:text-gray-200 transition-colors duration-300">Terms & Conditions</Link>
              <Link href="/refund" className="text-base hover:text-gray-200 transition-colors duration-300">Refund Policy</Link>
              <Link href="https://wa.me/9384772182" className="text-base hover:text-gray-200 transition-colors duration-300">Contact Us</Link>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Connect With Us</h2>
            <div className="flex space-x-6">
              <Link href="https://www.instagram.com/shifa.and.smiles/" className="text-3xl hover:text-gray-200 transition-colors duration-300">
                <Instagram />
              </Link>
              <Link href="https://wa.me/9384772182" className="text-3xl hover:text-gray-200 transition-colors duration-300">
                <Whatsapp />
              </Link>
            </div>
            <Link 
              href="mailto:contact@shifasmiles.in"
              className="text-base hover:text-gray-200 transition-colors duration-300 block"
            >
              contact@shifasmiles.in
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Shifa & Smiles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
