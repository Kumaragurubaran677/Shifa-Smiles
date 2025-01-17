'use client'
import React from "react";
import Products from "@/data/Products";
import Image from "next/image";
import NavBar from "@/components/Reusable/NavBar";
import Footer from "@/components/Reusable/Footer";
import Breadcrumb from "@/components/Reusable/Breadcrumb";
import Link from "next/link";
import { slugify } from "@/utils/Slugify";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const categoryKey = Object.keys(Products).find(
    (key) =>
      Products[key as keyof typeof Products].categoryName
        .toLowerCase()
        .replace(/\s+/g, "-") === params.category
  ) as keyof typeof Products;

  const categoryProducts = Products[categoryKey]?.products || [];
 

  return (
    <div>
      <NavBar />
      <div className="p-4 md:p-10">
        <div className="px-4 md:px-10 pt-20 pb-10">
          <div className="flex items-center gap-2 mb-8">
            <h1 className="text-2xl md:text-4xl font-bold">Products</h1>
          </div>
          <div>
            <div className=" mb-6 text-sm">
              <Breadcrumb />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <Link
                href={`/products/${params.category}/${slugify(product.name)}`}
                key={product.id}
                className="flex flex-col items-center justify-center bg-[#FAEFF0] border border-[#E2C5C6] rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="rounded-t-xl overflow-hidden border border-[#E2C5C6] mb-4 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-cover w-full"
                    unoptimized
                  />
                </div>
                <div className="flex items-center justify-between w-full">
                  <h2 className="text-lg font-bold text-[#360314] mb-2">
                    {product.name}
                  </h2>
                  <p className="text-[#E82A4C] font-semibold">
                    ₹{product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
