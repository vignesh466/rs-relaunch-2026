"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Colors from "../../constants/Color";
import Image from "next/image";
import { tracseedFeatures } from "../../constants/Content";
import {
  Headphones,
  RefreshCw,
  BookOpen,
  Check,
  Cloud,
  Server,
} from "lucide-react";

const TracSeed = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // Track selected plan
  const router = useRouter();

  const prototypeUrl =
    "https://www.figma.com/proto/jYbyGa3DKLmv7l1VKEYjZV/Website-2025?page-id=2600%3A14457&node-id=2601-18387&viewport=756%2C845%2C0.18&t=myy81HXRAcqYhIc2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2601%3A18387";

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
          &gt; <span>TracSeed</span>
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
                  Ensuring Transparency in Contract Farming & Seed Production
                </h2>
                <p className="text-base" style={{ color: Colors.Font_5 }}>
                  TracSeed helps contract farming organizations and seed
                  organizers digitize value chain operations, track field
                  activities, manage production and inventory, and enhance
                  traceability for better compliance and efficiency.
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
                      src="/assets/tracseed_images/hero.svg"
                      alt="TracSeed"
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
              What TracSeed Platform Offers
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tracseedFeatures.map((feature, index) => (
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
                  icon: "🌾",
                  title: "Seed Production Monitoring",
                  description: "Real-time tracking of seed production",
                },
                {
                  icon: "📊",
                  title: "Data Transparency",
                  description: "Enhanced traceability for compliance",
                },
                {
                  icon: "🔄",
                  title: "Field Coordination",
                  description: "Seamless collaboration with field teams",
                },
                {
                  icon: "📈",
                  title: "Scalability",
                  description: "Tools to scale operations efficiently",
                },
                {
                  icon: "📝",
                  title: "Data Management",
                  description: "Centralized storage with easy retrieval",
                },
                {
                  icon: "🔍",
                  title: "Quality Control",
                  description: "Ensure high-quality seed production",
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

        {/* Pricing Section */}
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
              Flexible Solutions for You
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Plan 1: SaaS / License-Based */}
              <div
                className={`p-6 rounded-lg border transition-all hover:shadow-md ${
                  selectedPlan === "SaaS / License-Based" ? "border-2" : ""
                }`}
                style={{
                  borderColor:
                    selectedPlan === "SaaS / License-Based"
                      ? Colors.Primary_font
                      : Colors.Form_outline,
                  backgroundColor:
                    selectedPlan === "SaaS / License-Based"
                      ? Colors.Bg_color_1
                      : Colors.Bg_color_3,
                }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: Colors.Icon_hover_2 }}
                  >
                    <Cloud size={24} style={{ color: Colors.Primary_font }} />
                  </div>
                </div>
                <h3
                  className="text-xl font-semibold mb-3 text-center"
                  style={{ color: Colors.Primary_font }}
                >
                  SaaS / License-Based
                </h3>
                <p
                  className="text-center mb-6"
                  style={{ color: Colors.Font_6 }}
                >
                  Cloud-hosted solution with regular updates
                </p>

                <div
                  className="border-t border-b py-5 mb-6"
                  style={{ borderColor: Colors.Form_outline }}
                >
                  <ul className="space-y-3">
                    {[
                      "Real-Time Monitoring",
                      "Impact Analytics",
                      "Mobile-Based Access",
                      "Multi-Lingual Interface",
                      "Unlimited Users",
                      "GPS-Enabled Tracking",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check
                          size={18}
                          className="mr-2 flex-shrink-0 mt-0.5"
                          style={{ color: Colors.Primary_font }}
                        />
                        <span style={{ color: Colors.Font_5 }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4
                    className="text-lg font-medium mb-4 text-center"
                    style={{ color: Colors.Font_3 }}
                  >
                    Pricing
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span style={{ color: Colors.Font_5 }}>
                        Annual Subscription:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: Colors.Font_3 }}
                      >
                        ₹6000/user/year
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{ color: Colors.Font_5 }}>
                        Monthly Subscription:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: Colors.Font_3 }}
                      >
                        ₹750/user/month
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{ color: Colors.Font_5 }}>
                        Onboarding & Training:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: Colors.Font_3 }}
                      >
                        Free
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan 2: Self-Hosted */}
              <div
                className={`p-6 rounded-lg border transition-all hover:shadow-md ${
                  selectedPlan === "Self-Hosted" ? "border-2" : ""
                }`}
                style={{
                  borderColor:
                    selectedPlan === "Self-Hosted"
                      ? Colors.Primary_font
                      : Colors.Form_outline,
                  backgroundColor:
                    selectedPlan === "Self-Hosted"
                      ? Colors.Bg_color_1
                      : Colors.Bg_color_3,
                }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: Colors.Icon_hover_2 }}
                  >
                    <Server size={24} style={{ color: Colors.Primary_font }} />
                  </div>
                </div>
                <h3
                  className="text-xl font-semibold mb-3 text-center"
                  style={{ color: Colors.Primary_font }}
                >
                  Self-Hosted (Client Ownership Model)
                </h3>
                <p
                  className="text-center mb-6"
                  style={{ color: Colors.Font_6 }}
                >
                  Full control with dedicated infrastructure
                </p>

                <div
                  className="border-t border-b py-5 mb-6"
                  style={{ borderColor: Colors.Form_outline }}
                >
                  <ul className="space-y-3">
                    {[
                      "Client Hosts on Their Own Server",
                      "Full Data Ownership & Security",
                      "Customization Flexibility for Future Enhancements",
                      "1 Year Support & Maintenance Included",
                      "Additional AMC Contract Available Post Year 1",
                      "End-to-End Onboarding & Implementation Support",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check
                          size={18}
                          className="mr-2 flex-shrink-0 mt-0.5"
                          style={{ color: Colors.Primary_font }}
                        />
                        <span style={{ color: Colors.Font_5 }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4
                    className="text-lg font-medium mb-4 text-center"
                    style={{ color: Colors.Font_3 }}
                  >
                    Pricing
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span style={{ color: Colors.Font_5 }}>
                        One-Time Setup Fee:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: Colors.Font_3 }}
                      >
                        On Request
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{ color: Colors.Font_5 }}>
                        Annual Maintenance (After Year 1):
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: Colors.Font_3 }}
                      >
                        On Request
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{ color: Colors.Font_5 }}>
                        Customization Fees:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: Colors.Font_3 }}
                      >
                        On Request
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
                src="https://www.youtube.com/embed/fUcwV7Rq0fs"
                title="TracSeed Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://youtu.be/fUcwV7Rq0fs"
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
            Ready to Transform Your Seed Production Operations?
          </h2>
          <p
            className="text-base mb-6 max-w-2xl mx-auto"
            style={{ color: Colors.Font_5 }}
          >
            Schedule a demo today and discover how TracSeed can help your
            organization achieve better traceability and efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="px-6 py-3 rounded font-medium transition-all"
              style={{
                backgroundColor: isClicked ? Colors.Click : Colors.Primary_font,
                color: Colors.Font_4,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsClicked(true);
                router.push("/contact");
              }}
            >
              Request Demo
            </motion.button>
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

export default TracSeed;
