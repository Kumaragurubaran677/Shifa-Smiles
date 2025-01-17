"use client";
import React, { useState } from "react";
import NavBar from "@/components/Reusable/NavBar";
import Footer from "@/components/Reusable/Footer";
import Breadcrumb from "@/components/Reusable/Breadcrumb";
import Image from "next/image";
import Products from "@/data/Products";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Whatsapp } from "@/components/Reusable/Icons";
import Reviews from "@/components/Reviews/Reviews";
import HomeCustomize from "@/components/Home/HomeCustomize";
import SizeChart from "@/assets/size-chart.png";

const Page = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const params = useParams();
  const categoryParam = params.category as string;
  const nameParam = params.name as string;

  const categoryKey = Object.keys(Products).find(
    (key) =>
      Products[key as keyof typeof Products].categoryName
        .toLowerCase()
        .replace(/\s+/g, "-") === categoryParam
  ) as keyof typeof Products;

  const product = Products[categoryKey]?.products.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === nameParam
  );

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg font-semibold text-gray-600">
        <div className="p-8 rounded-lg bg-white shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/" 
            className="inline-block bg-[#E82A4C] text-white px-6 py-3 rounded-full hover:bg-[#d1263f] transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const productImages = [product.image]; // Add more images if available

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-32">
        <Breadcrumb />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {/* Image Gallery Section */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-sm">
              <Image
                src={productImages[selectedImage]}
                alt={product.name}
                fill
                unoptimized
                className="object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden ${
                      selectedImage === idx ? 'ring-2 ring-[#E82A4C]' : ''
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Product view ${idx + 1}`}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#E82A4C]">
                  ₹{product.price}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-semibold text-[#E82A4C]">
                Product Details
              </h2>
              <dl className="space-y-3 capitalize">
                {Object.entries(product.desc).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 gap-4">
                    <dt className="text-gray-600 font-medium">{key.replace(/_/g, ' ')}</dt>
                    <dd className="text-gray-900">{value as string}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={product.link}
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 px-6 rounded-full hover:bg-green-600 transition-all duration-300 shadow-sm hover:shadow-md"
                target="_blank"
              >
                <Whatsapp className="w-5 h-5" />
                <span>Buy Now</span>
              </Link>
              <Link
                href="/"
                className="flex-1 flex items-center justify-center bg-[#E82A4C] text-white py-4 px-6 rounded-full hover:bg-[#d1263f] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Customize
              </Link>
            </div>

            {/* Shipping Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ),
                  title: "Fast Delivery",
                  description: "2-5 Days",
                  bgColor: "bg-green-50",
                  iconColor: "text-green-500"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Secure Payment",
                  description: "All Major Gateways",
                  bgColor: "bg-blue-50",
                  iconColor: "text-blue-500"
                },
                {
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3" />
                    </svg>
                  ),
                  title: "Easy Returns",
                  description: "Within 7 Days",
                  bgColor: "bg-red-50",
                  iconColor: "text-red-500"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.bgColor} p-4 rounded-xl flex items-start gap-3 transition-transform duration-300 hover:-translate-y-1`}
                >
                  <div className={`${item.iconColor} p-2 rounded-full bg-white`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Size Chart Section */}
        <section className="mt-16  rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-[#E82A4C] mb-6">Size Chart</h2>
          <div className="relative rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={SizeChart}
              alt="Size Chart"
              layout="responsive"
              className="object-contain"
            />
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mt-16">
          <Reviews />
        </section>
      </main>
      
      <HomeCustomize />
      <Footer />
    </div>
  );
};

export default Page;