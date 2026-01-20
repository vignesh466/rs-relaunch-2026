"use client";
import React from "react";

export default function ScrollingLogos() {
  const logos = [
    { src: "/assets/clients/idf.jpg", alt: "IDF" },
    { src: "/assets/clients/Kalike.jpg", alt: "Kalike" },
    { src: "/assets/clients/sehgal.png", alt: "Sehgal Foundation" },
    { src: "/assets/clients/SGIF-Logo.jpg", alt: "SGIF" },
    { src: "/assets/clients/tata-trusts.jpg", alt: "Tata Trusts" },
    { src: "/assets/clients/RAHINDIA-Logo.png", alt: "RAH India" },
  ];

  return (
    <div className="py-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex">
          <div className="flex animate-scroll">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[140px] h-[100px] mx-6 flex flex-col items-center justify-start pt-4 group relative"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[120px] max-h-[50px] object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="mt-2 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {logo.alt}
                </span>
              </div>
            ))}
          </div>
          <div className="flex animate-scroll" aria-hidden="true">
            {logos.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-[140px] h-[100px] mx-6 flex flex-col items-center justify-start pt-4 group relative"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[120px] max-h-[50px] object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="mt-2 text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {logo.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
