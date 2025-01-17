import React from "react";
import Image from "next/image";
import CTAImage from "@/assets/cta.svg";
import { Quality, Secure, Bracelet, COD } from "@/components/Reusable/Icons";

const HomeCTA = () => {
  return (
    <div
      style={{ backgroundImage: `url(${CTAImage.src})` }}
      className="p-4 bg-cover bg-center"
    >
      <div className="flex flex-wrap justify-between items-center gap-2 md:gap-6 px-4 md:px-16">
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
          <Image src={COD} alt="COD" width={40} height={40} className="md:w-20 md:h-20" />
          <h1 className="text-[12px] font-semibold text-white md:text-xl">
            Trusted <br /> Seller
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
          <Image src={Quality} alt="Quality" width={40} height={40} className="md:w-20 md:h-20" />
          <h1 className="text-[12px] font-semibold text-white md:text-xl">
            Standard <br /> Quality
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
          <Image src={Secure} alt="Secure" width={40} height={40} className="md:w-20 md:h-20" />
          <h1 className="text-[12px] font-semibold text-white md:text-xl">
            Secure <br />
            Checkouts
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2 text-center md:flex-row md:text-left">
          <Image src={Bracelet} alt="Bracelet" width={40} height={40} className="md:w-20 md:h-20" />
          <h1 className="text-[12px] font-semibold text-white md:text-xl">
            Customised <br /> Bracelets
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
