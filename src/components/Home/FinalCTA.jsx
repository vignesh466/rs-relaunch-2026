import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Colors from "../../constants/Color";

const FinalCTA = () => {
  return (
    <section
      className="py-8 sm:py-12"
      style={{ backgroundColor: Colors.Bg_color_1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4"
            style={{ color: Colors.Primary_font }}
          >
            Ready to Put AI to Work for Your Impact?
          </h2>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed"
            style={{ color: Colors.Font_5 }}
          >
            Join forward-thinking organizations transforming how they measure
            and amplify their social impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-sm sm:text-base shadow-lg transition-all duration-300 inline-block text-center min-w-[140px]"
              style={{
                background: `linear-gradient(135deg, ${Colors.Primary_font}, ${Colors.Click})`,
                color: Colors.Font_4,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0px 6px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 12px rgba(0, 0, 0, 0.1)";
              }}
            >
              Get Started
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/demo-videos"
              className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-sm sm:text-base border transition-all duration-300 inline-block text-center min-w-[140px]"
              style={{
                borderColor: Colors.Primary_font,
                color: Colors.Primary_font,
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = Colors.Primary_font;
                e.currentTarget.style.color = Colors.Font_4;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = Colors.Primary_font;
              }}
            >
              Watch Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
