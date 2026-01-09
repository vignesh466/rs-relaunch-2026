import React, { useEffect } from "react";
import Link from "next/link";
import Colors from "../../constants/Color";
import { Check, ClipboardList, Users, Globe, CreditCard } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StartQuicklyBlock = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Start animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 py-10 lg:py-12"
      style={{
        backgroundColor: Colors.Primary_font,
      }}
    >
      {/* Left Section */}
      <motion.div
        variants={itemVariants}
        className="ml-10 text-left lg:w-1/2 mb-8 lg:mb-0"
      >
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl mb-4 font-bold"
          style={{ color: Colors.Font_4 }}
        >
          Elevate Social Impact Worldwide
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-md opacity-90 sm:w-xl"
          style={{ color: Colors.Font_4 }}
        >
          Trusted by NGOs and CSR teams across the globe. Digital solutions that
          simplify compliance, track impact, and scale your mission.
        </motion.p>

        {/* Key Features with Icons */}
        <motion.div variants={containerVariants} className="mt-4 space-y-2">
          {[
            { icon: <Check size={18} />, text: "Start in days, not months" },
            {
              icon: <Check size={18} />,
              text: "No technical expertise needed",
            },
            {
              icon: <Check size={18} />,
              text: "Adaptable to regional regulations",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center space-x-2"
              style={{ color: Colors.Font_4 }}
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div variants={itemVariants} className="mt-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="px-6 py-3 border rounded-lg font-normal shadow-lg inline-block text-center"
              style={{
                backgroundColor: Colors.Font_4,
                color: Colors.Primary_font,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = Colors.Click;
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = Colors.Font_4;
                e.currentTarget.style.color = Colors.Primary_font;
              }}
            >
              Schedule Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        variants={itemVariants}
        className="lg:w-1/2 hidden lg:flex justify-center lg:justify-end"
      >
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: <ClipboardList size={24} />,
              title: "Regulatory Compliance",
              description:
                "Seamlessly adapts to evolving regulatory frameworks across regions with automatic updates",
            },
            {
              icon: <Users size={24} />,
              title: "Beneficiary Tracking",
              description:
                "Robust tracking system that functions flawlessly both online and offline in the most remote areas",
            },
            {
              icon: <Globe size={24} />,
              title: "Multilingual Support",
              description:
                "Full functionality in 6+ languages with localized interfaces for global accessibility",
            },
            {
              icon: <CreditCard size={24} />,
              title: "Flexible Pricing",
              description:
                "Customizable pricing models with significant discounts for NGOs and social enterprises",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-4 rounded-lg shadow-md"
              style={{
                backgroundColor: Colors.Bg_color_3,
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-3">
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-2 rounded-full mr-3"
                  style={{ backgroundColor: `${Colors.Primary_font}20` }}
                >
                  {item.icon}
                </motion.div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: Colors.Primary_font }}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className="text-sm font-normal leading-relaxed"
                style={{ color: Colors.Font_3 }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StartQuicklyBlock;
