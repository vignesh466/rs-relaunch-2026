"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Colors from "../../constants/Color";
import Image from "next/image";
import { grantFeatures } from "../../constants/Content"; // Update import
import {
  Headphones,
  RefreshCw,
  BookOpen,
  Check,
  Cloud,
  Server,
} from "lucide-react";

const GrantManagement = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // Track selected plan
  const router = useRouter();

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    router.push("/contact");
  };

  const prototypeUrl =
    "https://www.figma.com/proto/5bFMn6ugdcyvLStGJ3uzRb/Grant-management?page-id=872%3A5084&node-id=872-5087&viewport=7883%2C25720%2C0.24&t=rTrrvshkpsblDYu4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=872%3A8963";

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
          &gt; <span>Impact Intelligence</span>
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
                  Simplifying Grant Tracking & Impact Reporting
                </h2>
                <p className="text-base" style={{ color: Colors.Font_5 }}>
                  ProGran is a platform designed for CSR teams to track
                  donations and for NGOs to report their activities on projects.
                  It ensures transparency, accountability, and efficiency in
                  managing funds and measuring impact.
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
                      src="/assets/OurProducts/grant_dash.svg"
                      alt="Grant Management"
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
              What Grant Management Platform Offers
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {grantFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border transition-all hover:shadow-md"
                  style={{ borderColor: Colors.Form_outline }}
                >
                  <div className="w-full h-56 mb-4 relative">
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
                  icon: "📊",
                  title: "Transparency in Fund Utilization",
                  description:
                    "Ensure every donation is tracked and utilized effectively.",
                },
                {
                  icon: "🔄",
                  title: "Streamlined Reporting",
                  description:
                    "Simplify reporting for NGOs to showcase project progress.",
                },
                {
                  icon: "📈",
                  title: "Impact Measurement",
                  description:
                    "Measure the real-world impact of CSR initiatives.",
                },
                {
                  icon: "📱",
                  title: "User-Friendly Interface",
                  description: "Accessible tools for both CSR teams and NGOs.",
                },
                {
                  icon: "📝",
                  title: "Data Management",
                  description:
                    "Centralized storage for all project-related data.",
                },
                {
                  icon: "🔍",
                  title: "Compliance Tracking",
                  description:
                    "Ensure adherence to regulatory and organizational guidelines.",
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

        {/* Replace Interactive Prototype Section with Video */}
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
                src="https://www.youtube.com/embed/qdIqXiP-UTs"
                title="Grant Management Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://youtu.be/qdIqXiP-UTs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium hover:underline"
                style={{ color: Colors.Primary_font }}
              >
                Watch on YouTube
              </a>
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
            Ready to Transform Your Grant Management Process?
          </h2>
          <p
            className="text-base mb-6 max-w-2xl mx-auto"
            style={{ color: Colors.Font_5 }}
          >
            Schedule a demo today and discover how the ProGran platform can help
            your organization achieve better transparency and impact from your
            CSR.
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

export default GrantManagement;
