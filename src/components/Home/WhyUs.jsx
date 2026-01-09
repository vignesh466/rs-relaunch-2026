import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Colors from "../../constants/Color";

const WhyUs = () => {
  const [hoveredWord, setHoveredWord] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Subtle stagger for section contents
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  // Softer fade/slide for items
  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  const features = [
    {
      iconSvg: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Natural Language Queries",
      description:
        "Ask questions like you would to a colleague. No SQL or technical knowledge required.",
      highlight: "Intuitive Interface",
    },
    {
      iconSvg: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Predictive Analytics",
      description:
        "Get early warnings and trend predictions to make proactive decisions.",
      highlight: "Proactive Insights",
    },
    {
      iconSvg: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Smart Recommendations",
      description:
        "AI suggests optimizations and improvements based on your data patterns.",
      highlight: "AI-Powered",
    },
  ];

  // Interactive text with highlighted words (kept intact; micro-hover only)
  const InteractiveText = () => {
    const textParts = [
      { text: "You're great at creating ", type: "normal" },
      { text: "impact", type: "highlight", key: "impact" },
      {
        text: ". You have deep expertise and a wealth of knowledge to share. You know ",
        type: "normal",
      },
      { text: "data-driven decisions", type: "highlight", key: "data" },
      {
        text: " build credibility and attract funders. But analyzing ",
        type: "normal",
      },
      { text: "complex data", type: "highlight", key: "complex" },
      {
        text: " across multiple programs and extracting actionable insights? It's ",
        type: "normal",
      },
      {
        text: "overwhelming, time-consuming",
        type: "highlight",
        key: "overwhelming",
      },
      { text: " and requires ", type: "normal" },
      { text: "technical expertise", type: "highlight", key: "technical" },
      { text: " you may not have. Enter ", type: "normal" },
      { text: "Relific", type: "brand", key: "relific" },
      {
        text: "—your complete impact intelligence platform designed for ",
        type: "normal",
      },
      { text: "non-technical users", type: "highlight", key: "nontechnical" },
      { text: ".", type: "normal" },
    ];

    return (
      <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto px-4">
        {textParts.map((part, i) => (
          <motion.span
            key={i}
            className={`
              ${part.type === "normal" ? "text-gray-600" : ""}
              ${part.type === "highlight" ? "font-semibold cursor-pointer" : ""}
              ${part.type === "brand" ? "font-bold cursor-pointer" : ""}
            `}
            style={{
              color:
                part.type === "highlight" && hoveredWord === part.key
                  ? Colors.Primary_font
                  : part.type === "brand" && hoveredWord === part.key
                  ? Colors.Click
                  : part.type === "highlight"
                  ? Colors.Font_3
                  : part.type === "brand"
                  ? Colors.Primary_font
                  : Colors.Font_6,
            }}
            onMouseEnter={() => part.key && setHoveredWord(part.key)}
            onMouseLeave={() => setHoveredWord(null)}
            whileHover={
              part.key && !prefersReducedMotion ? { scale: 1.02 } : {}
            }
            transition={{ duration: 0.15 }}
          >
            {part.text}
          </motion.span>
        ))}
      </p>
    );
  };

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: "#f4f3ef" }}
      aria-label="Why Relific"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10 px-4 sm:px-8 lg:px-16"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 leading-tight"
            style={{ color: Colors.Primary_font, fontWeight: 400 }}
          >
            Why Choose Relific?
          </motion.h1>

          {/* subtle underline accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            className="mx-auto mb-8 h-[2px] w-24 origin-left"
            style={{ backgroundColor: `${Colors.Primary_font}66` }}
          />

          <motion.div variants={itemVariants}>
            <InteractiveText />
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 px-4 sm:px-0"
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.06 + 0.1,
                duration: 0.45,
                ease: "easeOut",
              }}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : { y: -4, boxShadow: "0 18px 40px rgba(0,0,0,0.08)" }
              }
              className="group relative p-6 sm:p-8 lg:p-10 rounded-xl bg-white border border-gray-100 transition-all"
            >
              {/* Icon */}
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-white shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${Colors.Primary_font} 0%, ${Colors.Click} 100%)`,
                }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                  {feature.iconSvg}
                </div>
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 leading-tight"
                  style={{ color: Colors.Font_3 }}
                >
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed mb-5 text-gray-600">
                  {feature.description}
                </p>

                {/* Highlight badge */}
                <motion.span
                  className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border"
                  style={{
                    borderColor: Colors.Primary_font,
                    color: Colors.Primary_font,
                    backgroundColor: "transparent",
                  }}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.15 }}
                >
                  {feature.highlight}
                </motion.span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyUs;
