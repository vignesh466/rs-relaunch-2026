"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Colors from "../../constants/Color";
import { healthFeatures } from "../../constants/Content";
import {
  Headphones,
  RefreshCw,
  BookOpen,
  Check,
  Cloud,
  Server,
} from "lucide-react";

const HealthcarePlatform = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const router = useRouter();

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    router.push("/contact");
  };

  const prototypeUrl =
    "https://www.figma.com/proto/jYbyGa3DKLmv7l1VKEYjZV/Website-2025?page-id=2925%3A12441&node-id=2927-7921&viewport=2418%2C577%2C0.25&t=mgJj1V9Zz0uOYsLX-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2927%3A7921";

  return (
    <div
      style={{ backgroundColor: Colors.Bg_color_3 }}
      className="min-h-screen"
    >
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
          &gt; <span>Healthcare Platform</span>
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
                  Strengthening Healthcare Access for Vulnerable Communities
                </h2>
                <p className="text-base" style={{ color: Colors.Font_5 }}>
                  Support healthcare NGOs and CSR health initiatives in
                  delivering essential services to underserved populations. Our
                  platform streamlines community health worker management,
                  patient outreach coordination, and health intervention
                  monitoring. Drive meaningful improvements in community health
                  outcomes through data-informed program design and
                  implementation focused on equity and accessibility.
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
              <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="/assets/leafledger_images/hero.svg"
                    alt="Healthcare Platform"
                    className="w-full rounded-lg hover:opacity-90 transition-opacity"
                  />
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
              What Healthcare Platform Offers
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border transition-all hover:shadow-md"
                  style={{ borderColor: Colors.Form_outline }}
                >
                  <div className="w-full h-56 flex justify-center items-center mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-contain rounded-lg"
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
                  icon: "🩺",
                  title: "Healthcare Worker Coordination",
                  description:
                    "Streamline communication and task management for health workers.",
                },
                {
                  icon: "📊",
                  title: "Data-Driven Insights",
                  description:
                    "Leverage analytics to improve healthcare program outcomes.",
                },
                {
                  icon: "🔄",
                  title: "Patient Outreach",
                  description:
                    "Enhance patient engagement and follow-ups with digital tools.",
                },
                {
                  icon: "📱",
                  title: "User-Friendly Interface",
                  description:
                    "Accessible tools for healthcare workers and administrators.",
                },
                {
                  icon: "📝",
                  title: "Centralized Data Management",
                  description:
                    "Store and retrieve all healthcare data in one place.",
                },
                {
                  icon: "🔍",
                  title: "Impact Measurement",
                  description:
                    "Measure the real-world outcomes of healthcare initiatives.",
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
                src="https://www.youtube.com/embed/lFcfCSRIgH8"
                title="Education Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://youtu.be/lFcfCSRIgH8"
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
            Ready to Transform Education with Digital Tools?
          </h2>
          <p
            className="text-base mb-6 max-w-2xl mx-auto"
            style={{ color: Colors.Font_5 }}
          >
            Schedule a demo today and discover how our Education Platform can
            help your organization achieve better learning outcomes and
            engagement.
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

export default HealthcarePlatform;
