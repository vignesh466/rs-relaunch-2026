import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Colors from "../../constants/Color";

const KrisiyuktaSolutions = () => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  return (
    <div
      className="px-10 md:px-40 py-10"
      style={{ backgroundColor: Colors.Bg_color_3 }}
    >
      {/* Breadcrumbs */}
      <div className="text-sm mb-6 gap-x-4" style={{ color: Colors.Font_5 }}>
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/allsolutions">Solutions</Link> &gt;{" "}
        <span>Environment</span>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <div className="max-w-xl">
          <h1
            className="text-[40px] font-semibold"
            style={{ color: Colors.Primary_font }}
          >
            Sustainable Growth Through Climate Smart Solutions
          </h1>
          <p className="mt-4 text-lg" style={{ color: Colors.Font_5 }}>
            At Krisiyukta, we harness technology to drive sustainable
            operations, optimizing productivity while preserving the environment
            for future generations.
          </p>
        </div>
        <div className="w-full max-w-lg flex justify-center items-center">
          <img
            src="/assets/environment_images/hero.svg"
            alt="Sustainable Agriculture"
            className="w-4/5 rounded-lg"
          />
        </div>
      </div>

      {/* Services Section */}
      <h3
        className="text-center text-[30px] font-semibold mb-10"
        style={{ color: Colors.Primary_font }}
      >
        Our Key Focus Areas
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Afforestation Management */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <img
            src="/assets/environment_images/image14.svg"
            alt="Afforestation"
            className="w-full mb-4 rounded-lg"
          />
          <h4
            className="text-lg font-semibold mb-2"
            style={{ color: Colors.Primary_font }}
          >
            Smart Afforestation & Land Restoration
          </h4>
          <p className="text-base" style={{ color: Colors.Font_3 }}>
            Driving large-scale afforestation initiatives through AI-powered
            monitoring, predictive analytics, and impact assessment tools.
          </p>
        </div>
        {/* Carbon Management */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center">
          <img
            src="/assets/environment_images/image15.svg"
            alt="Carbon Management"
            className="w-full mb-4 rounded-lg"
          />
          <h4
            className="text-lg font-semibold mb-2"
            style={{ color: Colors.Primary_font }}
          >
            Precision Carbon Management
          </h4>
          <p className="text-base" style={{ color: Colors.Font_3 }}>
            Enabling organizations to achieve net-zero goals with real-time
            carbon footprint tracking and sustainable intervention strategies.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-16">
        <motion.button
          className="relative overflow-hidden px-5 py-3 md:px-6 md:py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          style={{
            background: isClicked ? Colors.Click : Colors.Primary_font,
            color: Colors.Font_4,
          }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = Colors.Click)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = isClicked
              ? Colors.Click
              : Colors.Primary_font)
          }
          onClick={() => {
            setIsClicked(true);
            router.push("/contact");
          }}
        >
          Get in Touch
        </motion.button>
      </div>
    </div>
  );
};

export default KrisiyuktaSolutions;
