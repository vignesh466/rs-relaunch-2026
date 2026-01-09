import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Colors from "../../constants/Color";

const AgriSolutions = () => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  return (
    <div
      className="px-10 md:px-40 py-10"
      style={{ backgroundColor: Colors.Bg_color_3 }}
    >
      {/* Breadcrumbs */}
      {/* Breadcrumbs */}
      <div className="text-sm mb-6 gap-x-4" style={{ color: Colors.Font_5 }}>
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/allsolutions">Solutions</Link> &gt;{" "}
        <span>Agriculture</span>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <div className="max-w-xl">
          <h1
            className="text-[40px] font-semibold"
            style={{ color: Colors.Primary_font }}
          >
            Transforming Agriculture Through Smart Technology
          </h1>
          <p className="mt-4 text-lg" style={{ color: Colors.Font_5 }}>
            We empower agricultural organizations with digital solutions that
            optimize farming efficiency, improve resource management, and
            enhance productivity.
          </p>
        </div>
        <div className="w-full max-w-lg flex justify-center items-center">
          <img
            src="/assets/agriculture_images/hero.svg"
            alt="Agriculture Solutions"
            className="w-4/5 rounded-lg"
          />
        </div>
      </div>

      {/* Services Section */}
      <h3
        className="text-center text-[30px] font-semibold mb-10"
        style={{ color: Colors.Primary_font }}
      >
        Our Agricultural Solutions
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Farmer Platform */}
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col h-[450px]">
          <div className="w-full h-[200px] overflow-hidden mb-4">
            <img
              src="/assets/agriculture_images/farmer_platform.svg"
              alt="Farmer Platform"
              className="w-full h-full object-cover"
            />
          </div>
          <h4
            className="text-lg font-semibold mb-2 text-left"
            style={{ color: Colors.Primary_font }}
          >
            Farmer Engagement Platform
          </h4>
          <p
            className="text-base text-left flex-grow"
            style={{ color: Colors.Font_3 }}
          >
            A data-driven platform to connect and support farmers with
            personalized advisory, supply chain integration, and digital
            record-keeping.
          </p>
        </div>

        {/* Plant Management */}
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col h-[450px]">
          <div className="w-full h-[200px] overflow-hidden mb-4">
            <img
              src="/assets/agriculture_images/plant_management.svg"
              alt="Plant Management"
              className="w-full h-full object-cover"
            />
          </div>
          <h4
            className="text-lg font-semibold mb-2 text-left"
            style={{ color: Colors.Primary_font }}
          >
            Smart Crop Management
          </h4>
          <p
            className="text-base text-left flex-grow"
            style={{ color: Colors.Font_3 }}
          >
            AI-powered monitoring and automation to improve crop health,
            optimize input usage, and enhance overall farm productivity.
          </p>
        </div>

        {/* Seed Organizer Solutions */}
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col h-[450px]">
          <div className="w-full h-[200px] overflow-hidden mb-4">
            <img
              src="/assets/agriculture_images/seed_solutions.svg"
              alt="Seed Solutions"
              className="w-full h-full object-cover"
            />
          </div>
          <h4
            className="text-lg font-semibold mb-2 text-left"
            style={{ color: Colors.Primary_font }}
          >
            Solutions for Seed Organizers
          </h4>
          <p
            className="text-base text-left flex-grow"
            style={{ color: Colors.Font_3 }}
          >
            End-to-end digital solutions for seed production companies to manage
            seed quality, farmer networks, and supply chain efficiency.
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
          Request a Demo
        </motion.button>
      </div>
    </div>
  );
};

export default AgriSolutions;
