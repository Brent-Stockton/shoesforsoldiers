import Image from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Gallery = () => {
  const images: ImageProps[] = [
    { src: "/images/gallery1.jpeg", alt: "Description of Image 1" },
    { src: "/images/gallery2.jpeg", alt: "Description of Image 2" },
    { src: "/images/gallery3.jpeg", alt: "Description of Image 3" },
    { src: "/images/gallery4.jpeg", alt: "Description of Image 4" },
    { src: "/images/crowd.jpeg", alt: "Description of Image 5" },
    { src: "/images/gallery6.jpeg", alt: "Description of Image 6" },
    { src: "/images/gallery7.jpeg", alt: "Description of Image 7" },
    { src: "/images/gallery8.jpeg", alt: "Description of Image 8" },
  ];

  return (
    <div className="lg:h-screen flex flex-col items-center justify-center p-4 bg-white">
      <h2 className="text-[36px] font-bold mb-6 font-army text-red-900 hover:text-black">
        Boots on the Ground
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-72 relative transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full rounded-lg shadow-2xl border"
              style={{ boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
