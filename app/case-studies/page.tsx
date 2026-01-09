"use client";

import React from "react";
import Colors from "../../src/constants/Color";

export default function CaseStudiesPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: Colors.Bg_color_1 }}
    >
      <div className="container mx-auto px-4 py-16">
        <h1
          className="text-4xl font-bold text-center mb-8"
          style={{ color: Colors.Primary_font }}
        >
          Case Studies
        </h1>
        <p className="text-center text-lg" style={{ color: Colors.Font_3 }}>
          Read about our successful implementations and impact stories.
        </p>
        <p
          className="text-center text-lg mt-4"
          style={{ color: Colors.Font_3 }}
        >
          This page is under construction. Please check back soon!
        </p>
      </div>
    </div>
  );
}
