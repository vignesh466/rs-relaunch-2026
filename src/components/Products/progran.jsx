"use client";
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Colors from "../../constants/Color";

const ProGran = () => {
  const [imageLoading, setImageLoading] = useState({});

  const handleImageLoad = (index) => {
    setImageLoading((prev) => ({ ...prev, [index]: false }));
  };

  const handleImageLoadStart = (index) => {
    setImageLoading((prev) => ({ ...prev, [index]: true }));
  };

  // Screenshot data with theme variants
  const screenshots = [
    {
      light: "/assets/ProGran/ProGran_02.png",
      dark: "/assets/ProGran/ProGran_03.png",
      caption: "Projects dashboard — portfolio KPIs and status chips",
      filename: "ProGran_02.png",
    },
    {
      light: "/assets/ProGran/ProGran_04.png",
      dark: "/assets/ProGran/ProGran_05.png",
      caption: "Analytics — location summary: planned vs actual",
      filename: "ProGran_04.png",
    },
    {
      light: "/assets/ProGran/ProGran_01.png",
      dark: "/assets/ProGran/ProGran_01.png",
      caption: "Grant Management login (donor code + email)",
      filename: "ProGran_01.png",
    },
    {
      light: "/assets/ProGran/ProGran_010.png",
      dark: "/assets/ProGran/ProGran_010.png",
      caption: "Impact metrics table — baseline/target, units, filters",
      filename: "ProGran_010.png",
    },
    {
      light: "/assets/ProGran/ProGran_011.png",
      dark: "/assets/ProGran/ProGran_011.png",
      caption: "Operational report – filters — region, project, date range",
      filename: "ProGran_011.png",
    },
    {
      light: "/assets/ProGran/ProGran_012.png",
      dark: "/assets/ProGran/ProGran_012.png",
      caption: "Operational report – results — beneficiary-level records",
      filename: "ProGran_012.png",
    },
  ];

  const challenges = [
    {
      icon: "🎯",
      title: "Theory of Change → Reality Gap",
      description:
        "Link your ToC directly to field data, with live KPI tracking and variance analysis.",
    },
    {
      icon: "📊",
      title: "Multi-Source Data Chaos",
      description:
        "Combine Surve-R forms, Excel imports, and API feeds into unified impact dashboards.",
    },
    {
      icon: "📝",
      title: "Donor Reporting Burden",
      description:
        "Generate compliant reports instantly with full audit trails and data lineage.",
    },
    {
      icon: "⚠️",
      title: "Late Course Corrections",
      description:
        "Predictive alerts flag at-risk outcomes before they become problems.",
    },
    {
      icon: "🔄",
      title: "Legacy System Integration",
      description:
        "Connect existing MIS, financial systems, and spreadsheets without disruption.",
    },
    {
      icon: "👥",
      title: "Cross-Team Coordination",
      description:
        "Role-based dashboards ensure everyone sees relevant metrics and updates.",
    },
  ];

  return (
    <div
      style={{ backgroundColor: Colors.Bg_color_3 }}
      className="min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div
          className="text-xs sm:text-sm mb-4 sm:mb-6"
          style={{ color: Colors.Font_5 }}
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>
          {" > "}
          <Link href="/allproducts" className="hover:underline">
            Products
          </Link>
          {" > "}
          <span>ProGran</span>
        </div>

        {/* Hero Section */}
        <div className="bg-transparent rounded-lg overflow-hidden mb-10">
          <div className="p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="w-full lg:w-2/3">
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: Colors.Primary_font }}
              >
                ProGran: Programme Analytics & Monitoring
              </h1>
              <p
                className="text-sm sm:text-base lg:text-lg mb-6 leading-relaxed"
                style={{ color: Colors.Font_5 }}
              >
                Enterprise-grade programme monitoring and evaluation platform
                that links your Theory of Change to ground truth data. Track
                KPIs, generate donor-ready reports, and get predictive insights
                across your entire programme portfolio.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg shadow-lg transition-all text-center font-medium"
                  style={{
                    backgroundColor: Colors.Primary_font,
                    color: Colors.Font_4,
                  }}
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
              <img
                src="/assets/ProGran/ProGran_02.png"
                alt="ProGran Dashboard"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Features with Images - Alternating Layout */}
        <div className="mb-16 sm:mb-24 mt-12 sm:mt-16 lg:mt-20">
          {screenshots.map((screenshot, index) => {
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
                      src={screenshot.light}
                      alt={screenshot.caption}
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
                      {screenshot.caption}
                    </h3>
                    <p
                      className="text-lg sm:text-xl lg:text-2xl leading-relaxed"
                      style={{ color: Colors.Font_5 }}
                    >
                      {index === 0 &&
                        "Monitor your entire programme portfolio at a glance. Track project KPIs, funding status, and implementation progress across multiple sites and partners with real-time status indicators."}
                      {index === 1 &&
                        "Get comprehensive analytics comparing planned versus actual outcomes across different locations. Visualize performance metrics and identify areas requiring attention with interactive data summaries."}
                      {index === 2 &&
                        "Secure access control ensures only authorized personnel can view sensitive programme data. Role-based permissions protect donor information while enabling appropriate transparency."}
                      {index === 3 &&
                        "Define and track impact metrics with baseline and target values. Filter data by region, timeframe, and indicator type to generate precise performance reports for stakeholders."}
                      {index === 4 &&
                        "Generate detailed operational reports with flexible filtering options. Select specific regions, projects, and date ranges to create targeted analysis for programme management."}
                      {index === 5 &&
                        "Access beneficiary-level data with comprehensive records of programme interventions. Track individual outcomes while maintaining privacy and generating aggregate insights for reporting."}
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
              Common Programme Management Challenges ProGran Solves:
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

        {/* Final CTA */}
        <div className="text-center">
          <div
            className="rounded-lg p-6 sm:p-8 text-center mb-8 sm:mb-10"
            style={{ backgroundColor: Colors.More_bg }}
          >
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4"
              style={{ color: Colors.Primary_font }}
            >
              Ready to Transform Your Programme Management?
            </h2>
            <p
              className="text-sm sm:text-base lg:text-xl mb-6 opacity-90 max-w-2xl mx-auto leading-relaxed"
              style={{ color: Colors.Font_5 }}
            >
              Join organizations worldwide using ProGran to drive better
              outcomes and reporting.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-lg transition-all hover:shadow-xl text-sm sm:text-base"
              style={{
                backgroundColor: Colors.Primary_font,
                color: Colors.Font_4,
              }}
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProGran;
