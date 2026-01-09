"use client";
import React, { useState, useRef } from "react"; // Add useRef
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Colors from "../../constants/Color";
import { farmerPlatformFeatures } from "../../constants/Content";
import {
  Headphones,
  RefreshCw,
  BookOpen,
  Check,
  Cloud,
  Server,
} from "lucide-react";

const FarmerPlatform = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // Track selected plan
  const router = useRouter();
  const prototypesRef = useRef(null); // Add ref for scrolling

  const scrollToPrototypes = () => {
    prototypesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const prototypeLinks = {
    business_web:
      "https://www.figma.com/proto/jYbyGa3DKLmv7l1VKEYjZV/Website-2025?page-id=2627%3A20710&node-id=2643-20&viewport=115%2C310%2C0.21&t=oyZjpHMe8sJoOGf1-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2643%3A20&show-proto-sidebar=1",
    business_mobile:
      "https://www.figma.com/proto/jYbyGa3DKLmv7l1VKEYjZV/Website-2025?page-id=2653%3A45247&node-id=2653-47701&viewport=175%2C560%2C0.24&t=64HgodCunnCd5WDN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2653%3A47701",
    farmer_mobile:
      "https://www.figma.com/proto/jYbyGa3DKLmv7l1VKEYjZV/Website-2025?page-id=2653%3A87724&node-id=2653-100579&viewport=746%2C1220%2C0.27&t=I7I0RNDmCS358u8O-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2653%3A100579",
  };

  // Figma prototype URL
  const figmaPrototypeUrl =
    "https://www.figma.com/proto/5bFMn6ugdcyvLStGJ3uzRb/Grant-management?page-id=872%3A5084&node-id=872-5087&viewport=7883%2C25720%2C0.24&t=rTrrvshkpsblDYu4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=872%3A8963";

  const detailedFeatures = [
    "Multi-Lingual",
    "Bulk Data Upload",
    "No user-based limit",
    "Mobile Based",
    "(supports offline data collection)",
    "MIS Dashboard",
    "GPS Enabled",
  ];

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
        {/* Breadcrumbs - Single set */}
        <div className="text-sm mb-6" style={{ color: Colors.Font_5 }}>
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/other_solutions" className="hover:underline">
            Other Solutions
          </Link>{" "}
          &gt; <span>Farmer Platform</span>
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
                  Empowering Farmers Through Technology
                </h2>
                <p className="text-base" style={{ color: Colors.Font_5 }}>
                  We empower social sector organizations, particularly those
                  working with small and marginal farmers, by providing a robust
                  farmer management platform designed for agricultural extension
                  and training. Our solution offers real-time insights,
                  structured advisory support, and tools for effective field
                  engagement. Through a web dashboard and mobile apps,
                  implementation teams can seamlessly track farmer activities,
                  monitor training programs, and enhance the efficiency of
                  agricultural interventions.
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
                    onClick={scrollToPrototypes}
                    className="px-6 py-3 rounded font-medium transition-all cursor-pointer"
                    style={{
                      backgroundColor: "transparent",
                      border: `2px solid ${Colors.Primary_font}`,
                      color: Colors.Primary_font,
                      textDecoration: "none",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
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
                    View all Prototypes
                  </motion.a>
                </div>
              </div>
              <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                <div
                  className="block cursor-pointer"
                  onClick={scrollToPrototypes}
                >
                  <Image
                    src="/assets/farmer_platform_images/hero.svg"
                    alt="Farmer Platform"
                    width={724}
                    height={475}
                    className="w-full rounded-lg hover:opacity-90 transition-opacity"
                  />
                  <p
                    className="text-center mt-2 text-sm"
                    style={{ color: Colors.Primary_font }}
                  >
                    Click here to view prototype
                  </p>
                </div>
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
              What Farmer Platform Offers
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {farmerPlatformFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border transition-all hover:shadow-md"
                  style={{ borderColor: Colors.Form_outline }}
                >
                  <div className="w-full h-56 flex justify-center items-center mb-4">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={544}
                      height={388}
                      className="w-full h-full rounded-lg"
                      style={{ objectFit: "contain" }}
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

        {/* New Prototypes Section */}
        <div
          ref={prototypesRef}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-10 border"
          style={{ borderColor: Colors.Form_outline }}
        >
          <div
            className="py-5 px-6 flex items-center"
            style={{
              backgroundColor: Colors.Primary_font,
              color: Colors.Font_4,
            }}
          >
            <h2 className="text-2xl font-bold">Interactive Prototypes</h2>
          </div>
          <div className="p-6">
            <div className="text-center mb-8">
              <p className="text-xl mb-4" style={{ color: Colors.Font_3 }}>
                Experience our platform through these interactive prototypes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Business Web Dashboard",
                  description:
                    "Comprehensive web interface for administrators and managers with full analytics and reporting",
                  link: prototypeLinks.business_web,
                  image: "/assets/prototypes/web_dashboard.svg",
                },
                {
                  title: "Business Mobile App",
                  description:
                    "Powerful mobile solution for field officers with real-time data synchronization",
                  link: prototypeLinks.business_mobile,
                  image: "/assets/prototypes/business_mobile.svg",
                },
                {
                  title: "Farmer Mobile App",
                  description:
                    "Intuitive mobile interface designed for farmers with offline capabilities",
                  link: prototypeLinks.farmer_mobile,
                  image: "/assets/prototypes/farmer_mobile.svg",
                },
              ].map((prototype, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                >
                  <a
                    href={prototype.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative">
                      <div className="aspect-w-16 aspect-h-9">
                        <Image
                          src={prototype.image}
                          alt={prototype.title}
                          width={1280}
                          height={720}
                          className="w-full h-56 md:h-72 lg:h-80 transition-all duration-300 hover:opacity-90"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: "rgba(26, 54, 93, 0.7)" }}
                      >
                        <span
                          className="px-4 py-2 bg-white rounded-md text-sm font-medium"
                          style={{ color: Colors.Primary_font }}
                        >
                          Explore Now
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: Colors.Primary_font }}
                      >
                        {prototype.title}
                      </h3>
                      <p className="text-sm" style={{ color: Colors.Font_5 }}>
                        {prototype.description}
                      </p>
                    </div>
                  </a>
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
                  title: "Limited Market Insights",
                  description: "Real-time data access for informed decisions",
                },
                {
                  icon: "🔄",
                  title: "Poor Field Coordination",
                  description: "Streamlined communication between teams",
                },
                {
                  icon: "📈",
                  title: "Scalability Constraints",
                  description: "Digital tools to expand reach efficiently",
                },
                {
                  icon: "📱",
                  title: "Technology Barriers",
                  description: "User-friendly interface for all skill levels",
                },
                {
                  icon: "📝",
                  title: "Data Management",
                  description: "Centralized storage with easy retrieval",
                },
                {
                  icon: "🔍",
                  title: "Impact Measurement",
                  description: "Robust analytics for measuring outcomes",
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
                className="w-full h-[400px]"
                src="https://www.youtube.com/embed/1pNbQtcb148"
                title="Farmer Platform Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://youtu.be/1pNbQtcb148"
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
                className={`p-6 rounded-lg border transition-all hover:shadow-md flex flex-col ${
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
                  className="border-t border-b py-5 mb-6 flex-grow"
                  style={{ borderColor: Colors.Form_outline }}
                >
                  <ul className="space-y-3">
                    {[
                      "Web Dashboard with Analytics",
                      "Two Mobile Applications Included as Part of the Suite",
                      "Offline Data Collection",
                      "Multi-Lingual Interface",
                      "Bulk Data Upload",
                      "Unlimited Users",
                      "GPS-Enabled Tracking",
                      "Customizable & Tailored Platform",
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

                <div className="mt-auto">
                  <h4
                    className="text-lg font-medium mb-4 text-center"
                    style={{ color: Colors.Font_3 }}
                  >
                    Pricing
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span style={{ color: Colors.Font_5 }}>
                        Upto 1k beneficiaries:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: Colors.Font_3 }}
                      >
                        ₹1.5L per year
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{ color: Colors.Font_5 }}>
                        1k-10k beneficiaries:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: Colors.Font_3 }}
                      >
                        + ₹150 per beneficiary
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{ color: Colors.Font_5 }}>
                        10k-40k beneficiaries:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: Colors.Font_3 }}
                      >
                        + ₹50 per beneficiary
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span style={{ color: Colors.Font_5 }}>
                        40k+ beneficiaries:
                      </span>
                      <span
                        className="font-medium"
                        style={{ color: Colors.Font_3 }}
                      >
                        + ₹25 per beneficiary
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
                    <div className="space-y-3">
                      <div className="flex justify-between items-center"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan 2: Self-Hosted */}
              <div
                className={`p-6 rounded-lg border transition-all hover:shadow-md flex flex-col ${
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
                  className="border-t border-b py-5 mb-6 flex-grow"
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

                <div className="mt-auto">
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

        {/* CTA Section */}
        <div
          className="rounded-lg p-8 text-center mb-10"
          style={{ backgroundColor: Colors.More_bg }}
        >
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: Colors.Primary_font }}
          >
            Ready to Transform Your Agricultural Operations?
          </h2>
          <p
            className="text-base mb-6 max-w-2xl mx-auto"
            style={{ color: Colors.Font_5 }}
          >
            Schedule a demo today and discover how our Farmer Platform can help
            your organization make a bigger impact.
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
            <motion.a
              onClick={scrollToPrototypes}
              className="px-6 py-3 rounded font-medium transition-all cursor-pointer"
              style={{
                backgroundColor: "transparent",
                border: `2px solid ${Colors.Primary_font}`,
                color: Colors.Primary_font,
                textDecoration: "none",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = Colors.Primary_font;
                e.currentTarget.style.color = Colors.Font_4;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = Colors.Primary_font;
              }}
            >
              View all Prototypes
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerPlatform;
