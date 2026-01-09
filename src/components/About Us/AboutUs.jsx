"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Colors from "../../constants/Color";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTextContent = () => {
    const fullText = `Relific is building the operating system for social impact. 
    Our integrated platforms unify fragmented datasets across education, health, 
    livelihoods, climate, and CSR. With AI-driven validation, sector-specific 
    collection tools, and automated reporting mapped to SDGs and IRIS+ metrics, 
    Relific helps organisations make data their competitive edge. 
    
    From streamlining daily field operations to producing board-ready dashboards 
    in real time, Relific eliminates manual bottlenecks and empowers decision-makers 
    with instant clarity. Whether you are running a grassroots NGO or a large CSR 
    foundation, our solutions turn complexity into actionable intelligence, 
    enabling transparency, efficiency, and measurable impact at scale.`;

    if (screenWidth >= 1024 || isExpanded) return fullText; // Full text on large screens or when expanded
    if (screenWidth >= 768) return fullText.slice(0, 400) + "...";
    if (screenWidth >= 600) return fullText.slice(0, 300) + "...";
    if (screenWidth >= 480) return fullText.slice(0, 200) + "...";
    return fullText.slice(0, 150) + "...";
  };

  return (
    <>
      <div
        className="min-h-screen px-6 md:px-16 py-12"
        style={{ backgroundColor: Colors.Bg_color_1 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section - Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl -mt-10 font-bold leading-tight"
              style={{ color: Colors.Primary_font }}
            >
              Powering Social Impact <br /> Through Data <br /> Intelligence
            </h2>
            <p
              className="mt-4 text-base sm:text-lg"
              style={{ color: Colors.Font_3 }}
            >
              Relific is redefining how NGOs, CSR teams, and foundations
              leverage data to drive efficiency, accountability, and impact
              across sectors.
            </p>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-lg mx-auto"
          >
            <img
              src="/assets/aboutus.svg"
              alt="About Relific"
              className="w-full h-auto rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 shadow-md relative"
          style={{
            backgroundColor: Colors.Bg_color_2,
            minHeight: "200px",
          }}
        >
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-10 py-8">
            {/* Left vertical line */}
            <div
              className="absolute left-6 sm:left-16 top-0 bottom-0 my-auto"
              style={{
                width: "4px",
                backgroundColor: Colors.Primary_font,
                height: "calc(100% - 48px)",
                minHeight: isExpanded
                  ? "auto"
                  : screenWidth < 768
                  ? "150px"
                  : "202px",
              }}
            />

            {/* Content */}
            <div className="pl-10 sm:pl-16 pr-4 sm:pr-10">
              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed"
                style={{
                  color: Colors.Font_3,
                  lineHeight: "1.6",
                }}
              >
                {getTextContent()}
                {screenWidth < 768 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="block mt-4 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUs;
