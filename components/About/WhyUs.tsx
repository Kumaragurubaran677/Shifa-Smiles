import Image from "next/image";
import React from "react";
import bg from "@/assets/About/whyus-bg.png";
import quality from "@/assets/About/Quality.svg";
import bracelet from "@/assets/Icons/Bracelet.svg";
import handcraft from "@/assets/About/handcraft.svg";
import customercentric from "@/assets/About/customer-centric.svg";

const WhyUs = () => {
  return (
    <div className="w-full bg-[#E82A4C] relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={bg} alt="background" layout="fill" objectFit="cover" />
      </div>

      <div className="relative z-10  mx-auto px-6 py-16 md:px-20 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Why Us ?
        </h1>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 w-full md:px-20  mx-auto">
          {/* Quality */}
          <div className="flex items-start gap-6 max-w-3xl">
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14">
              <Image src={quality} alt="Quality-icon" width={56} height={56} />
            </div>
            <div className="flex-1">
              <p className="text-white text-base md:text-xl">
                <strong className="block mb-2">Affordable Prices, Premium Quality:</strong>
                Our custom bracelets are crafted with precision, ensuring high-quality designs at the
                most competitive prices in the market.
              </p>
            </div>
          </div>

          {/* Personalization */}
          <div className="flex items-start gap-6 max-w-3xl md:ml-[20%]">
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14">
              <Image src={bracelet} alt="Bracelet-icon" width={56} height={56} />
            </div>
            <div className="flex-1">
              <p className="text-white text-base md:text-xl">
                <strong className="block mb-2">Versatile Personalization:</strong>
                Whether it&apos;s for a friend, sibling, or loved one, we create bracelets that celebrate
                every special bond.
              </p>
            </div>
          </div>

          {/* Handcrafted */}
          <div className="flex items-start gap-6 max-w-3xl">
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14">
              <Image src={handcraft} alt="Handcrafted-icon" width={56} height={56} />
            </div>
            <div className="flex-1">
              <p className="text-white text-base md:text-xl">
                <strong className="block mb-2">Handcrafted with Love:</strong>
                Each bracelet is made with care, designed to bring a smile to your face and meaning
                to your moments.
              </p>
            </div>
          </div>

          {/* Customer-Centric */}
          <div className="flex items-start gap-6 max-w-3xl md:ml-[20%]">
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14">
              <Image src={customercentric} alt="Customer-centric-icon" width={56} height={56} />
            </div>
            <div className="flex-1">
              <p className="text-white text-base md:text-xl">
                <strong className="block mb-2">Customer-Centric Approach:</strong>
                Your satisfaction is our priority. We ensure a seamless shopping experience, from
                customization to delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;