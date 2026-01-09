"use client"
import React from 'react'

export default function ScrollingLogos() {
  const logos = [
    { src: "/assets/clients/idf.jpg", alt: "IDF" },
    { src: "/assets/clients/Kalike.jpg", alt: "Kalike" },
    { src: "/assets/clients/sehgal.png", alt: "Sehgal Foundation" },
    { src: "/assets/clients/SGIF-Logo.jpg", alt: "SGIF" },
    { src: "/assets/clients/tata-trusts.jpg", alt: "Tata Trusts" },
    { src: "/assets/clients/RAHINDIA-Logo.png", alt: "RAH India" },
  ]

  return (
    <div className="py-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[140px] h-[60px] mx-6 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[120px] max-h-[50px] object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-scroll" aria-hidden="true">
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 w-[140px] h-[60px] mx-6 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[120px] max-h-[50px] object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
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
  )
}
