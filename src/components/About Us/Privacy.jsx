import React, { useState, useEffect } from "react";
import { privacyPolicy } from "../../constants/Content_privacy";
import { ChevronDown, ChevronUp } from "lucide-react";
import Colors from "../../constants/Color";
import { motion, AnimatePresence } from "framer-motion";

const Privacy = () => {
  const [openSections, setOpenSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    // Open all sections on desktop by default
    if (!isMobile) {
      const allOpen = {};
      privacyPolicy.sections.forEach((_, index) => {
        allOpen[index] = true;
      });
      setOpenSections(allOpen);
    }

    return () => window.removeEventListener("resize", checkIsMobile);
  }, [isMobile]);

  const toggleSection = (index) => {
    if (isMobile) {
      setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
    }
  };

  const itemVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: "auto", opacity: 1 },
  };

  return (
    <main
      className="min-h-screen py-10 sm:py-12"
      style={{ backgroundColor: "#f6f7f9" }}
      aria-label="Privacy & Terms"
    >
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8 md:px-10">
        {/* Heading */}
        <header className="text-center mb-8 sm:mb-10">
          <h1
            style={{ color: Colors.Primary_font }}
            className="font-bold leading-tight text-[36px] sm:text-[42px] md:text-[48px]"
          >
            Privacy & Terms
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            We’re committed to privacy by design across the Relific suite.
          </p>
        </header>

        {/* Intro Card */}
        <section className="bg-white rounded-2xl shadow-sm ring-1 ring-black/[0.05] p-6 sm:p-8 mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
            {privacyPolicy.heading}
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {privacyPolicy.intro}
          </p>
        </section>

        {/* Sections */}
        <div className="space-y-4">
          {privacyPolicy.sections.map((section, index) => {
            const isOpen = !!openSections[index];

            return (
              <section
                key={index}
                className="bg-white rounded-xl shadow-sm ring-1 ring-black/[0.05]"
              >
                {/* Header / Toggle (button for a11y) */}
                <button
                  type="button"
                  onClick={() => toggleSection(index)}
                  className={`w-full flex items-center justify-between gap-4 px-5 py-4 ${
                    isMobile
                      ? "cursor-pointer"
                      : "cursor-default pointer-events-none"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`section-panel-${index}`}
                  disabled={!isMobile}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-left">
                    {section.subheading}
                  </h3>
                  {/* Show chevron only on mobile */}
                  {isMobile && (
                    <span className="text-gray-500">
                      {isOpen ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </span>
                  )}
                </button>

                {/* Divider */}
                <div className="h-px bg-black/[0.06]" />

                {/* Content: accordion on mobile, always visible on desktop */}
                <div className="px-5 py-4">
                  {isMobile ? (
                    // Mobile: animated accordion
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`section-panel-${index}`}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          variants={itemVariants}
                          transition={{
                            duration: 0.25,
                            ease: [0.22, 0.61, 0.36, 1],
                          }}
                        >
                          <div className="py-1">
                            {Array.isArray(section.points) ? (
                              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                                {section.points.map((point, idx) =>
                                  typeof point === "string" ? (
                                    <li key={idx}>{point}</li>
                                  ) : (
                                    <div key={idx} className="mb-3">
                                      <h4 className="text-base font-semibold text-gray-900 mb-1.5">
                                        {point.title}
                                      </h4>
                                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        {point.details?.map((detail, i) => (
                                          <li key={i}>{detail}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )
                                )}
                              </ul>
                            ) : null}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ) : (
                    // Desktop: always visible
                    <div id={`section-panel-${index}`}>
                      <div>
                        {Array.isArray(section.points) ? (
                          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                            {section.points.map((point, idx) =>
                              typeof point === "string" ? (
                                <li key={idx}>{point}</li>
                              ) : (
                                <div key={idx} className="mb-4">
                                  <h4 className="text-lg font-semibold text-gray-900 mb-1.5">
                                    {point.title}
                                  </h4>
                                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    {point.details?.map((detail, i) => (
                                      <li key={i}>{detail}</li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            )}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>

        {/* Footer note */}
        <footer className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-gray-500">
          For questions or requests (access, correction, deletion), contact{" "}
          <a
            href="mailto:contact@relific.io"
            className="underline"
            style={{ color: Colors.Primary_font }}
          >
            contact@relific.io
          </a>
          .
        </footer>
      </div>
    </main>
  );
};

export default Privacy;
