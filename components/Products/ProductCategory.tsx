import Products from "@/data/Products";
import Image from "next/image";
import React from "react";
import SuggestionImage from "@/assets/suggestions-image.png";
import Link from "next/link";
import Breadcrumb from "../Reusable/Breadcrumb";
import { slugify } from "@/utils/Slugify";

const ProductCategory = () => {
  return (
    <div className="p-4 md:p-10">
      <div className="px-4 md:px-10">
        {/* Header Section */}
        <h1 className="text-xl md:text-3xl font-bold mb-6 text-start">
          Product <span className="text-[#E82A4C]">Category</span>
        </h1>

        <div className="mb-6 text-sm">
          <Breadcrumb />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {(Object.keys(Products) as Array<keyof typeof Products>).map(
            (item, index) => {
              if (index === 1) {
                // Render custom suggestion card before the actual index 1 item
                return (
                  <React.Fragment key={index}>
                    {/* Custom Suggestion */}
                    <div className="relative">
                      <Image
                        src={SuggestionImage}
                        alt="Suggestion"
                        className="relative mx-auto hover:rotate-3 hover:scale-110 transition-all duration-300"
                      />
                    </div>

                    {/* Original Index 1 Item */}
                    <Link
                      href={`/products/${slugify(Products[item].categoryName)}`}
                      className="flex flex-col items-center justify-center bg-[#FAEFF0] border border-[#E2C5C6] rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      {/* Image Container with Rounded Corners */}
                      <div className="rounded-t-xl overflow-hidden border border-[#E2C5C6] mb-4 w-full">
                        <Image
                          src={Products[item].categoryImage}
                          alt={Products[item].categoryName}
                          width={200}
                          height={200}
                          className="object-cover w-full"
                          unoptimized
                        />
                      </div>
                      {/* Title Section */}
                      <h1 className="text-lg font-bold text-[#360314]">
                        {Products[item].categoryName}
                      </h1>
                    </Link>
                  </React.Fragment>
                );
              }

              // Render other items
              return (
                <Link
                  href={`/products/${slugify(Products[item].categoryName)}`}
                  key={index}
                  className="flex flex-col items-center justify-center bg-[#FAEFF0] border border-[#E2C5C6] rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Image Container with Rounded Corners */}
                  <div className="rounded-t-xl overflow-hidden border border-[#E2C5C6] mb-4 w-full">
                    <Image
                      src={Products[item].categoryImage}
                      alt={Products[item].categoryName}
                      width={200}
                      height={200}
                      className="object-cover w-full"
                      unoptimized
                    />
                  </div>
                  {/* Title Section */}
                  <h1 className="text-lg font-bold text-[#360314]">
                    {Products[item].categoryName}
                  </h1>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
