"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GalleryImage1 from "@/assets/Gallery/1.svg";
import GalleryImage2 from "@/assets/Gallery/2.svg";
import GalleryImage3 from "@/assets/Gallery/3.svg";
import { ChevronLeft, ChevronRight } from "../Reusable/Icons";

const PhotoGallery = () => {
    const [currentImages, setCurrentImages] = useState<number[]>([0, 1, 2]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const images = [
    { src: GalleryImage1, alt: "Gallery Image 1" },
    { src: GalleryImage2, alt: "Gallery Image 2" },
    { src: GalleryImage3, alt: "Gallery Image 3" },
    { src: GalleryImage1, alt: "Gallery Image 1" },
    { src: GalleryImage2, alt: "Gallery Image 2" },
    { src: GalleryImage3, alt: "Gallery Image 3" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => {
        const nextImages = prevImages.map((index) => (index + 1) % images.length);
        return nextImages;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const changeImage = (direction: "prev" | "next") => {
    if (selectedImageIndex !== null) {
      const newIndex =
        direction === "next"
          ? (selectedImageIndex + 1) % images.length
          : (selectedImageIndex - 1 + images.length) % images.length;
      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <div className="p-4 md:p-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold px-4 md:px-10">
          Photo <span className="text-[#E82A4C]">Gallery</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-10">
        {currentImages.map((imageIndex, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedImageIndex(index)}
          >
            <Image
              src={images[imageIndex].src}
              alt={images[imageIndex].alt}
              width={400}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute left-4 text-white text-3xl w-10 h-10 flex items-center justify-center z-50"
              onClick={() => changeImage("prev")}
            >
              <ChevronLeft />
            </button>
            <Image
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              width={600}
              height={600}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button
              className="absolute right-4 text-white text-3xl  w-10 h-10 flex items-center justify-center z-50"
              onClick={() => changeImage("next")}
            >
              <ChevronRight />
            </button>
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-[#E82A4C] rounded-full w-8 h-8 flex items-center justify-center z-50"
              onClick={() => setSelectedImageIndex(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
