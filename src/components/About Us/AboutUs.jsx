"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Colors from "../../constants/Color";

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
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
        className="min-h-screen px-6 md:px-16 py-12 md:pt-0"
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

          {/* Right Section - Relific OS Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-[400px] sm:h-[480px] lg:h-[540px] xl:h-[580px] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Enhanced soft glow */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: "clamp(240px, 70vw, 340px)",
                  height: "clamp(240px, 70vw, 340px)",
                  background: `radial-gradient(circle, ${Colors.Primary_font}33, transparent 70%)`,
                  filter: "blur(40px)",
                }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main orbital ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: "clamp(240px, 70vw, 320px)",
                  height: "clamp(240px, 70vw, 320px)",
                  border: `2.5px solid ${Colors.Primary_font}`,
                  opacity: 0.8,
                  boxShadow: `0 0 20px ${Colors.Primary_font}33`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner dashed ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: "clamp(180px, 55vw, 260px)",
                  height: "clamp(180px, 55vw, 260px)",
                  border: "2px dashed #d4d4d8",
                  opacity: 0.35,
                }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 36,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Outer dashed ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: "clamp(300px, 85vw, 380px)",
                  height: "clamp(300px, 85vw, 380px)",
                  border: "2px dashed #d4d4d8",
                  opacity: 0.35,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 42,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Centre hub */}
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="relative z-10 flex items-center justify-center rounded-full bg-white shadow-[0_15px_40px_rgba(0,0,0,0.15)]"
                style={{
                  width: "clamp(120px, 28vw, 160px)",
                  height: "clamp(120px, 28vw, 160px)",
                  border: `3px solid ${Colors.Primary_font}11`,
                }}
              >
                <div className="text-center px-2">
                  <p
                    className="text-[10px] sm:text-[12px] font-semibold"
                    style={{ color: Colors.Primary_font }}
                  >
                    Relific
                  </p>
                  <p
                    className="text-[16px] sm:text-[20px] lg:text-[24px] font-bold"
                    style={{ color: Colors.Primary_font }}
                  >
                    Impact OS
                  </p>
                </div>
              </motion.div>

              {/* Drive-R */}
              <motion.div
                className="absolute cursor-pointer"
                style={{
                  left: "clamp(15%, 50% - 170px, 50% - 190px)",
                  top: "clamp(15%, 50% - 85px, 50% - 95px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0 },
                  y: {
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.12, y: -10 }}
                onClick={() => (window.location.href = "/drive_r")}
              >
                <div
                  className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl backdrop-blur-md border-2 border-white/50 hover:border-white/80 transition-all shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                  }}
                >
                  <img
                    src="/assets/product_logos/DriveR_small.png"
                    alt="Drive-R"
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain drop-shadow-md"
                  />
                  <span className="text-[8px] sm:text-[10px] font-bold text-gray-800 whitespace-nowrap">
                    Drive-R
                  </span>
                </div>
              </motion.div>

              {/* ProGran */}
              <motion.div
                className="absolute cursor-pointer"
                style={{
                  left: "clamp(65%, 50% + 120px, 50% + 150px)",
                  top: "clamp(15%, 50% - 75px, 50% - 85px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.4 },
                  y: {
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.12, y: -10 }}
                onClick={() => (window.location.href = "/progran")}
              >
                <div
                  className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl backdrop-blur-md border-2 border-white/50 hover:border-white/80 transition-all shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                  }}
                >
                  <img
                    src="/assets/product_logos/ProGran_small.png"
                    alt="ProGran"
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain drop-shadow-md"
                  />
                  <span className="text-[8px] sm:text-[10px] font-bold text-gray-800 whitespace-nowrap">
                    ProGran
                  </span>
                </div>
              </motion.div>

              {/* Surve-R */}
              <motion.div
                className="absolute cursor-pointer"
                style={{
                  left: "clamp(40%, 50% - 30px, 50% - 45px)",
                  top: "clamp(70%, 50% + 120px, 50% + 145px)",
                  transform: "translate(-50%, -50%)",
                  zIndex: 20,
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.2 },
                  y: {
                    duration: 3.0,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.12, y: -10 }}
                onClick={() => (window.location.href = "/surve_r")}
              >
                <div
                  className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl backdrop-blur-md border-2 border-white/50 hover:border-white/80 transition-all shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.95)",
                  }}
                >
                  <img
                    src="/assets/product_logos/SurveR_small.png"
                    alt="Surve-R"
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain drop-shadow-md"
                  />
                  <span className="text-[8px] sm:text-[10px] font-bold text-gray-800 whitespace-nowrap">
                    Surve-R
                  </span>
                </div>
              </motion.div>
            </div>
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
