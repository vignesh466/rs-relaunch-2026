"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Colors from "../../constants/Color";
import Image from "next/image";
import { leafFeatures } from "../../constants/Content";
import { Headphones, RefreshCw, BookOpen, Check, Server } from "lucide-react";

const LeafLedger = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // Track selected plan
  const router = useRouter();

  const prototypeUrl =
    "https://www.figma.com/proto/jYbyGa3DKLmv7l1VKEYjZV/Website-2025?page-id=2619%3A20&node-id=2619-15872&viewport=818%2C659%2C0.26&t=4fub0wV8sqMWayKN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2619%3A337";

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    router.push("/contact");
  };

  return (
    <div
      style={{ backgroundColor: Colors.Bg_color_3 }}
      className="min-h-screen"
    >
      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-8">
        {/* Breadcrumbs */}
        <div className="text-sm mb-6" style={{ color: Colors.Font_5 }}>
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/other_solutions" className="hover:underline">
            Other Solutions
          </Link>{" "}
          &gt; <span>LeafLedger</span>
        </div>

        {/* Introduction Section */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden mb-10 border"
          style={{ borderColor: Colors.Form_outline }}
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-2/3">
                <h2
                  className="text-2xl sm:text-3xl font-semibold mb-4"
                  style={{ color: Colors.Primary_font }}
                >
                  Digitizing Afforestation & Carbon Credit Management
                </h2>
                <p className="text-base" style={{ color: Colors.Font_5 }}>
                  LeafLedger helps organizations involved in tree plantation
                  track afforestation projects, monitor impact, and prepare for
                  carbon credit certifications. With a dedicated field app and
                  admin dashboard, it ensures transparency and accountability in
                  sustainability initiatives.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="mr-5 px-6 py-3 rounded-lg shadow-lg transition-all lg:block transform hover:scale-105 active:scale-95 inline-block text-center"
                    style={{
                      backgroundColor: Colors.Primary_font,
                      color: Colors.Font_4,
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = Colors.Click)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        Colors.Primary_font)
                    }
                  >
                    Request Demo
                  </Link>
                  <motion.a
                    href={prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded font-medium transition-all"
                    style={{
                      backgroundColor: "transparent",
                      border: `2px solid ${Colors.Primary_font}`,
                      color: Colors.Primary_font,
                      textDecoration: "none",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        Colors.Primary_font;
                      e.currentTarget.style.color = Colors.Font_4;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = Colors.Primary_font;
                    }}
                  >
                    View Prototype
                  </motion.a>
                </div>
              </div>
              <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative w-full h-56 md:h-72 lg:h-80">
                    <Image
                      src="/assets/leafledger_images/hero.svg"
                      alt="LeafLedger"
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-lg hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <p
                    className="text-center mt-2 text-sm"
                    style={{ color: Colors.Primary_font }}
                  >
                    Click here to view prototype
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden mb-10 border"
          style={{ borderColor: Colors.Form_outline }}
        >
          <div
            className="py-4 px-6"
            style={{
              backgroundColor: Colors.Primary_font,
              color: Colors.Font_4,
            }}
          >
            <h2 className="text-xl font-semibold">
              What LeafLedger Platform Offers
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leafFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border transition-all hover:shadow-md"
                  style={{ borderColor: Colors.Form_outline }}
                >
                  <div className="w-full h-56 flex justify-center items-center mb-4 relative">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded-lg"
                    />
                  </div>
                  <p
                    className="text-lg font-medium text-center"
                    style={{ color: Colors.Font_3 }}
                  >
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges Section */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden mb-10 border"
          style={{ borderColor: Colors.Form_outline }}
        >
          <div
            className="py-4 px-6"
            style={{
              backgroundColor: Colors.Primary_font,
              color: Colors.Font_4,
            }}
          >
            <h2 className="text-xl font-semibold">Challenges We Address</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🌳",
                  title: "Tracking Plantation Progress",
                  description: "Real-time monitoring of afforestation efforts",
                },
                {
                  icon: "📊",
                  title: "Impact Measurement",
                  description: "Detailed analytics for carbon credit readiness",
                },
                {
                  icon: "🔄",
                  title: "Field Coordination",
                  description: "Seamless collaboration with field teams",
                },
                {
                  icon: "📈",
                  title: "Scalability",
                  description: "Tools to scale sustainability initiatives",
                },
                {
                  icon: "📝",
                  title: "Data Management",
                  description: "Centralized storage with easy retrieval",
                },
                {
                  icon: "🔍",
                  title: "Transparency",
                  description: "Accountability in sustainability projects",
                },
              ].map((challenge, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden transition-all hover:shadow-lg border-2 hover:-translate-y-1"
                  style={{
                    borderColor: Colors.Icon_hover_2,
                    backgroundColor: Colors.Bg_color_3,
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    className="p-3 flex justify-center items-center"
                    style={{ backgroundColor: Colors.Bg_color_1 }}
                  >
                    <span className="text-2xl">{challenge.icon}</span>
                  </div>
                  <div className="p-4 text-center">
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: Colors.Primary_font }}
                    >
                      {challenge.title}
                    </h3>
                    <p className="text-sm" style={{ color: Colors.Font_5 }}>
                      {challenge.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden mb-10 border"
          style={{ borderColor: Colors.Form_outline }}
        >
          <div
            className="py-4 px-6"
            style={{
              backgroundColor: Colors.Primary_font,
              color: Colors.Font_4,
            }}
          >
            <h2 className="text-xl font-semibold">Post-Launch Support</h2>
          </div>
          <div className="p-6">
            <p className="text-base mb-6" style={{ color: Colors.Font_5 }}>
              We ensure your success with dedicated support and continuous
              improvements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Dedicated Support Team",
                  description:
                    "Our team is available to assist you with any challenges or questions post-launch.",
                  icon: Headphones,
                },
                {
                  title: "Regular Updates",
                  description:
                    "Receive regular updates and new features to keep your platform up-to-date.",
                  icon: RefreshCw,
                },
                {
                  title: "Training & Resources",
                  description:
                    "Access training materials and resources to help your team make the most of the platform.",
                  icon: BookOpen,
                },
              ].map((support, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border transition-all hover:shadow-md"
                  style={{ borderColor: Colors.Form_outline }}
                >
                  <div className="flex justify-center mb-4">
                    <support.icon
                      size={40}
                      style={{ color: Colors.Primary_font }}
                    />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2 text-center"
                    style={{ color: Colors.Primary_font }}
                  >
                    {support.title}
                  </h3>
                  <p
                    className="text-base text-center"
                    style={{ color: Colors.Font_5 }}
                  >
                    {support.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Prototype Section - Updated to Video */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden mb-10 border"
          style={{ borderColor: Colors.Form_outline }}
        >
          <div
            className="py-4 px-6"
            style={{
              backgroundColor: Colors.Primary_font,
              color: Colors.Font_4,
            }}
          >
            <h2 className="text-xl font-semibold">Product Demo Video</h2>
          </div>
          <div className="p-6">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-[600px]"
                src="https://www.youtube.com/embed/PtvVULqgbUY"
                title="LeafLedger Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/demo-videos"
                className="text-base font-medium hover:underline"
                style={{ color: Colors.Primary_font }}
              >
                Watch Product Demos
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="rounded-lg p-8 text-center mb-10"
          style={{ backgroundColor: Colors.More_bg }}
        >
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: Colors.Primary_font }}
          >
            Ready to Transform Your Sustainability Initiatives?
          </h2>
          <p
            className="text-base mb-6 max-w-2xl mx-auto"
            style={{ color: Colors.Font_5 }}
          >
            Schedule a demo today and discover how LeafLedger can help your
            organization make a bigger impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="relative overflow-hidden px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out text-sm sm:text-base transform hover:scale-105 active:scale-95 inline-block text-center"
              style={{
                background: `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`,
                color: Colors.Font_4,
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = Colors.Click;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`;
              }}
            >
              Request Demo
            </Link>
            <a
              href={prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded font-medium transition-all"
              style={{
                border: `1px solid ${Colors.Primary_font}`,
                color: Colors.Primary_font,
              }}
            >
              View Prototype
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeafLedger;
