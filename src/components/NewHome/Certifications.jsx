"use client";
import React from "react";

export default function Certifications() {
  const certifications = [
    { src: "/assets/certifications/gdpr.svg", alt: "GDPR Compliant" },
    { src: "/assets/certifications/iso_new.svg", alt: "ISO Certified" },

    { src: "/assets/certifications/vapt.svg", alt: "VAPT Certified" },
  ];

  return (
    <div className="py-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] h-[180px] mx-6 flex items-center justify-center"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="max-w-[360px] max-h-[150px] object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
