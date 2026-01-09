"use client";
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Colors from "../../constants/Color";
import { SurveRFeatures } from "../../constants/Content";

const SurveR = () => {
  const [imageLoading, setImageLoading] = useState({});

  const handleImageLoad = (index) => {
    setImageLoading((prev) => ({ ...prev, [index]: false }));
  };

  const handleImageLoadStart = (index) => {
    setImageLoading((prev) => ({ ...prev, [index]: true }));
  };

  const prototypeUrl =
    "https://www.figma.com/proto/jYbyGa3DKLmv7l1VKEYjZV/Website-2025?page-id=3822%3A10335&node-id=3822-10363&viewport=27068%2C28369%2C0.23&t=G2BWOXAoSW0liHuf-1&scaling=min-zoom&content-scaling=responsive&starting-point-node-id=3822%3A10363";

  const youtubeEmbed = "https://www.youtube.com/embed/0z00jrKyKpY";
  const youtubeLink = "https://www.youtube.com/watch?v=0z00jrKyKpY";

  const challenges = [
    {
      icon: "📱",
      title: "Paper & Spreadsheet Chaos",
      description:
        "Digitise forms with validations, skip logic, and required fields—no more broken spreadsheets.",
    },
    {
      icon: "📶",
      title: "Low/No Connectivity",
      description:
        "Collect data fully offline. Sync automatically when a device comes back online.",
    },
    {
      icon: "🌍",
      title: "Multilingual Field Teams",
      description:
        "Localise forms and app UI; capture in multiple languages with consistent schemas.",
    },
    {
      icon: "📍",
      title: "Verification & Fraud Risk",
      description:
        "GPS geotags, timestamps, photos, and e-signatures for verifiable submissions.",
    },
    {
      icon: "✅",
      title: "Slow Approvals",
      description:
        "Role-based workflows route submissions for instant approvals and notifications.",
    },
    {
      icon: "🔐",
      title: "Data Security & Access",
      description:
        "Granular permissions, audit trails, and secure sync from device to cloud.",
    },
  ];

  return (
    <div
      style={{ backgroundColor: Colors.Bg_color_3 }}
      className="min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-6 sm:py-8">
        <div
          className="text-xs sm:text-sm mb-4 sm:mb-6"
          style={{ color: Colors.Font_5 }}
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/allproducts" className="hover:underline">
            Products
          </Link>{" "}
          &gt; <span>Surve-R</span>
        </div>

        {/* Intro */}
        <div className="bg-transparent rounded-lg overflow-hidden mb-10">
          <div className="p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="w-full lg:w-2/3">
              <h2
                className="text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: Colors.Primary_font }}
              >
                Surve-R: AI-enabled Data Collection
              </h2>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: Colors.Font_5 }}
              >
                Surve-R is Relific's mobile-first data capture and approvals
                engine. Build multilingual forms in minutes, collect data
                offline with GPS, photos and e-signatures, and trigger
                role-based workflows for instant approvals. From health and
                education to CSR and field operations, Surve-R gets reliable
                data from the ground to your dashboards—fast.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg shadow-lg transition-all text-center"
                  style={{
                    backgroundColor: Colors.Primary_font,
                    color: Colors.Font_4,
                  }}
                >
                  Request Demo
                </Link>
                <motion.a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded font-medium transition-all text-center"
                  style={{
                    backgroundColor: "transparent",
                    border: `2px solid ${Colors.Primary_font}`,
                    color: Colors.Primary_font,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = Colors.Primary_font;
                    e.currentTarget.style.color = Colors.Font_4;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = Colors.Primary_font;
                  }}
                >
                  View Prototype
                </motion.a>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
              <a
                href={prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="/assets/OurProducts/Surve_r.svg"
                  alt="Surve-R"
                  className="w-full rounded-lg hover:opacity-90 transition-opacity"
                />
                <p
                  className="text-center mt-2 text-xs sm:text-sm"
                  style={{ color: Colors.Primary_font }}
                >
                  Click here to view prototype
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Features with Images - Alternating Layout */}
        <div className="mb-16 sm:mb-24 mt-12 sm:mt-16 lg:mt-20">
          {SurveRFeatures.map((feature, index) => {
            const [ref, inView] = useInView({
              threshold: 0.1,
              triggerOnce: true,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                className="bg-transparent mb-16 sm:mb-20 lg:mb-24"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    className="w-full lg:w-1/2 relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      inView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {/* Loading skeleton */}
                    {imageLoading[index] && (
                      <div className="absolute inset-0 bg-transparent animate-pulse z-10">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                        </div>
                      </div>
                    )}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                      onLoadStart={() => handleImageLoadStart(index)}
                      onLoad={() => handleImageLoad(index)}
                      style={{
                        filter: imageLoading[index] ? "blur(5px)" : "none",
                        transition: "filter 0.3s ease",
                      }}
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    animate={
                      inView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }
                    }
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <h3
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6"
                      style={{ color: Colors.Primary_font }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-lg sm:text-xl lg:text-2xl leading-relaxed"
                      style={{ color: Colors.Font_5 }}
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Common Challenges - Simple List */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-200">
            <h2
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
              style={{ color: Colors.Primary_font }}
            >
              Common Data Collection Challenges Surve-R Solves:
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              {challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-2 sm:mt-3"
                    style={{ backgroundColor: Colors.Primary_font }}
                  />
                  <div>
                    <strong
                      className="text-base sm:text-lg"
                      style={{ color: Colors.Primary_font }}
                    >
                      {challenge.title}:
                    </strong>{" "}
                    <span
                      className="text-sm sm:text-base"
                      style={{ color: Colors.Font_5 }}
                    >
                      {challenge.description}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-lg overflow-hidden mb-8 sm:mb-10 shadow-lg border border-gray-200">
          <div
            className="py-3 sm:py-4 px-4 sm:px-6 rounded-t-lg mb-4"
            style={{
              backgroundColor: Colors.Primary_font,
              color: Colors.Font_4,
            }}
          >
            <h2 className="text-lg sm:text-xl font-semibold">
              Product Demo Video
            </h2>
          </div>
          <div className="p-4 sm:p-6">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={youtubeEmbed}
                title="Surve-R Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/demo-videos"
                className="text-sm sm:text-base font-medium hover:underline"
                style={{ color: Colors.Primary_font }}
              >
                Watch Product Demos
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="rounded-lg p-6 sm:p-8 text-center mb-8 sm:mb-10"
          style={{ backgroundColor: Colors.More_bg }}
        >
          <h2
            className="text-xl sm:text-2xl font-semibold mb-4"
            style={{ color: Colors.Primary_font }}
          >
            Ready to Activate Your Impact Data?
          </h2>
          <p
            className="text-sm sm:text-base mb-6 max-w-2xl mx-auto leading-relaxed"
            style={{ color: Colors.Font_5 }}
          >
            Schedule a demo and see how Surve-R helps you collect, validate, and
            report data—seamlessly, securely, and at scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto relative overflow-hidden px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-sm sm:text-base transform hover:scale-105 active:scale-95 inline-block text-center"
              style={{
                background: `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`,
                color: Colors.Font_4,
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = Colors.Click;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`;
              }}
            >
              Request Demo
            </Link>
            <a
              href={prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded font-medium transition-all text-center"
              style={{
                border: `1px solid ${Colors.Primary_font}`,
                color: Colors.Primary_font,
              }}
            >
              View Prototype
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveR;
