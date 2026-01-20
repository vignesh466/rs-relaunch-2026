"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Relific (Krisiyukta) took time to understand our work and our aspirations and used their deep experience in creating a solution that works. They are committed to their customers. We highly recommend them.",
    person: "Mr. Durgesh Raturi",
    company: "President, SGIF",
  },
  {
    text: "Great work, Relific (Krisiyukta) team! Truly impressive efforts in bringing technology to the grassroots.",
    person: "Mr. Sreekanth Reddy",
    company: "Tata Trusts",
  },
  {
    text: "As an extension worker, I previously had to visit farmers fields, record the problems, and then inform scientists to provide advice without thoroughly considering factors like climate and the history of pesticide sprays.",
    person: "Mr. Yellappa",
    company: "Kalike",
  },
];

export default function TrustedBySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleGetStarted = () => {
    if (email) {
      router.push(`/book-demo?email=${encodeURIComponent(email)}`);
    } else {
      router.push("/book-demo");
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2
            className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold mb-3 sm:mb-4 px-2"
            style={{ color: "#5563FF" }}
          >
            Trusted by Visionaries in the Social Sector.
          </h2>
          <p
            className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[800px] mx-auto px-4"
            style={{ color: "#333333" }}
          >
            Relific isn't just another software provider; we are a partner in
            the AI transition. Hear from the leaders who have swapped weeks of
            manual compilation for instant, AI-powered insights.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mb-12 sm:mb-14 md:mb-16">
          <div className="flex justify-center items-center px-4 sm:px-8 md:px-12">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 sm:left-4 md:left-8 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              style={{ color: "#5563FF" }}
              aria-label="Previous testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Testimonial Card */}
            <div className="w-full max-w-[926px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#F9FAFB] rounded-xl p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row gap-4 sm:gap-6 min-h-[200px] sm:min-h-[220px] md:min-h-[238px]"
                >
                  {/* Quote Icon - Left side */}
                  <div className="flex-shrink-0 self-start sm:self-auto">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 69 69"
                      fill="none"
                      className="sm:w-[56px] sm:h-[56px] md:w-[69px] md:h-[69px]"
                    >
                      <path
                        d="M0 69V34.5C0 15.45 15.45 0 34.5 0V13.8C23.115 13.8 13.8 23.115 13.8 34.5H34.5V69H0Z"
                        fill="#D2D6FF"
                      />
                    </svg>
                  </div>

                  {/* Content - Right side */}
                  <div className="flex-1 flex flex-col justify-between">
                    {/* Testimonial Text */}
                    <p
                      className="text-[13px] sm:text-[14px] md:text-[16px] leading-relaxed mb-4"
                      style={{ color: "#1F2937" }}
                    >
                      {testimonials[currentIndex].text}
                    </p>

                    {/* Person Info */}
                    <p
                      className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold"
                      style={{ color: "#1F2937" }}
                    >
                      — {testimonials[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 sm:right-4 md:right-8 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              style={{ color: "#5563FF" }}
              aria-label="Next testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="transition-all"
                style={{
                  width: index === currentIndex ? "32px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: index === currentIndex ? "#5563FF" : "#D1D5DB",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Go AI-Native Container */}
        <div className="w-full max-w-[1120px] mx-auto bg-[#E8F4F8] rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center text-center min-h-[220px] sm:min-h-[240px] md:min-h-[260px]">
          <h3
            className="text-[22px] sm:text-[26px] md:text-[32px] font-semibold mb-2 sm:mb-3"
            style={{ color: "#5563FF" }}
          >
            Go AI-Native from Week 1
          </h3>
          <p
            className="text-[13px] sm:text-[14px] md:text-[16px] mb-5 sm:mb-6 max-w-[600px] px-2"
            style={{ color: "#333333" }}
          >
            Don't wait months to see results. Upload your MoUs or Proposals and
            let AI-R build your workflows, KPIs, and trackers automatically.
          </p>

          {/* Email Input */}
          <div
            className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-stretch sm:items-center border-2 rounded-xl overflow-hidden max-w-[408px] bg-white"
            style={{ borderColor: "#5563ff" }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGetStarted()}
              className="flex-1 px-4 py-3 sm:py-0 text-[13px] sm:text-[14px] focus:outline-none placeholder:text-slate-400 bg-white min-w-0 sm:h-[44px]"
            />
            <button
              onClick={handleGetStarted}
              className="text-white text-[13px] sm:text-[14px] font-semibold transition-colors whitespace-nowrap hover:opacity-90 rounded-lg sm:rounded-xl m-1 py-2 sm:py-0 sm:w-[184px] sm:h-[36px]"
              style={{ backgroundColor: "#5563ff" }}
            >
              Book a demo now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
