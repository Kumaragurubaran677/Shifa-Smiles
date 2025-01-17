import React from 'react';
import pickBracelet from "@/assets/About/pickbracelet.svg";
import explore from "@/assets/About/explore.svg";
import pickOrder from "@/assets/About/pickOrder.svg";
import whatsapp from "@/assets/About/orderWhatsapp.svg";
import customise from "@/assets/About/customise.svg";
import Image from 'next/image';

const HowWeWork = () => {
  return (
    <div className="px-4 md:px-16 py-16">
      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">
          How we <span className="text-[#E82A4C]">Work?</span>
        </h1>
        {/* Flexbox for Desktop, Stacked for Mobile */}
        <div className="flex flex-wrap justify-between items-center gap-10 md:flex-nowrap md:gap-8 mt-10 text-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center justify-center gap-5 w-full md:w-auto">
            <Image src={explore} alt={"Explore products"} />
            <h1 className="font-semibold">Explore products</h1>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center justify-center gap-5 w-full md:w-auto">
            <h1 className="font-semibold">Pick your fav <br /> bracelet</h1>
            <Image src={pickBracelet} alt={"Pick your bracelet"} />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center justify-center gap-5 w-full md:w-auto">
            <Image src={customise} alt={"Customize through WhatsApp"} />
            <h1 className="font-semibold">Customize through <br /> WhatsApp</h1>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center justify-center gap-5 w-full md:w-auto">
            <h1 className="font-semibold">Place your order</h1>
            <Image src={pickOrder} alt={"Place your order"} />
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center justify-center gap-5 w-full md:w-auto">
            <Image src={whatsapp} alt={"Track your order"} />
            <h1 className="font-semibold">Tracking through <br /> WhatsApp</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
