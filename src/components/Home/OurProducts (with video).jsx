import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Colors from "../../constants/Color";
import { segments } from "../../constants/Content";

const KnowMoreButton = () => {
  const [hovered, setHovered] = useState(false);
  const buttonStyle = {
    backgroundColor: hovered ? Colors.More_bg : "transparent",
    borderColor: hovered ? Colors.Primary_font : Colors.Know,
    color: hovered ? Colors.Primary_font : Colors.Know,
  };

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-4 md:px-6 py-2 border rounded-lg font-normal shadow-md transition-colors duration-300 flex items-center text-sm md:text-base"
      style={buttonStyle}
    >
      Know more <ArrowRight size={16} className="ml-2" />
    </button>
  );
};

const OurProducts = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef([]);
  const videoRefs = useRef([]);

  // Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);

      // Pause all videos on mobile
      if (mobile) {
        videoRefs.current.forEach((video) => {
          if (video) video.pause();
        });
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isMobile) {
            setActiveIndex(index);
            // Play video when in view and not mobile
            if (videoRefs.current[index]) {
              videoRefs.current[index].play();
            }
          } else {
            if (activeIndex === index) setActiveIndex(null);
            // Pause video when out of view
            if (videoRefs.current[index]) {
              videoRefs.current[index].pause();
            }
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [activeIndex, isMobile]);

  return (
    <div
      className="w-full py-8 md:py-16 px-4 md:px-30"
      style={{ backgroundColor: Colors.Bg_color_3 }}
    >
      <h2
        className="text-[40px] md:text-3xl font-normal text-center mb-6 md:mb-8"
        style={{ color: Colors.Primary_font }}
      >
        Our Products
      </h2>

      {segments && segments.length > 0 ? (
        segments.map((segment, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`flex flex-col md:flex-row ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-4 mb-8 md:mb-16`}
            >
              <motion.div
                className="w-full md:w-[544px] h-[300px] md:h-[400px] flex flex-col justify-center items-center relative overflow-hidden rounded-lg"
                style={{ backgroundColor: Colors.Bg_color_3 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img
                  src={segment.image}
                  alt={segment.title}
                  className={`absolute w-[80%] h-[80%] object-cover rounded-lg transition-opacity duration-700 inset-0 m-auto ${
                    activeIndex === index && !isMobile
                      ? "opacity-0"
                      : "opacity-100"
                  }`}
                />

                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={segment.video}
                  muted
                  loop
                  playsInline
                  className={`absolute w-[80%] h-[80%] object-cover rounded-lg transition-opacity duration-700 inset-0 m-auto ${
                    activeIndex === index && !isMobile
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />

                <h3
                  className="mt-4 text-lg md:text-xl font-medium text-center"
                  style={{ color: Colors.Primary_font }}
                >
                  {segment.title}
                </h3>
              </motion.div>

              <motion.div
                className="flex flex-col items-start flex-1 px-4 md:px-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h2
                  className="text-2xl md:text-[30px] font-semibold mb-3 md:mb-4"
                  style={{ color: Colors.Font_3 }}
                >
                  {segment.d_title}
                </h2>
                <p
                  className="text-sm md:text-md mb-4 md:mb-6"
                  style={{ color: Colors.Font_3 }}
                >
                  {segment.description}
                </p>
                <KnowMoreButton />
              </motion.div>
            </div>
          );
        })
      ) : (
        <div className="text-center text-red-500">
          No segments to display. Please check your Content.jsx file.
        </div>
      )}
    </div>
  );
};

export default OurProducts;
