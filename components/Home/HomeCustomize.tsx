import React from "react";
import Image from "next/image";
import customize from "@/assets/customize.svg";
import Link from "next/link";

const HomeCustomize = () => {
  return (
    <section className="w-full min-h-[600px] bg-gradient-to-br from-white to-pink-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex flex-col items-center justify-center space-y-8 px-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:!text-start">
              Customize Your{" "}
              <span className="text-[#E82A4C] inline-block hover:scale-105 transition-transform">
                Own Bracelet
              </span>
            </h1>

            <Image
              src={customize}
              alt="Customize your bracelet"
              className="transform hover:scale-105 transition-transform duration-500"
            />

            <p className="text-lg md:text-xl text-gray-600 text-center">
              Create the perfect{" "}
              <span className="text-[#E82A4C] font-semibold">gift</span> for
              your loved ones with us
            </p>

            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-[#E82A4C] rounded-xl hover:bg-[#d1263f] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Customizing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCustomize;
