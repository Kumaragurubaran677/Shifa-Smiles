import PhotoGallery from "@/components/gallery/PhotoGallery";
import Footer from "@/components/Reusable/Footer";
import NavBar from "@/components/Reusable/NavBar";
import Reviews from "@/components/Reviews/Reviews";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-20">
        <Reviews />
        <PhotoGallery />
      </div>
      <Footer />
    </div>
  );
};

export default page;
