import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Colors from "../../constants/Color";
import {
  Headphones,
  ExternalLink,
  Eye,
  EyeOff,
  Download,
  Calendar,
  Users,
  BarChart3,
  FileText,
  Settings,
  Share2,
  ExternalLinkOpen,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProGran = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [theme, setTheme] = useState("light"); // Default to light theme

  // Screenshot data with theme variants
  const screenshots = [
    {
      light: "/assets/progran/ProGran_02.png",
      dark: "/assets/progran/ProGran_03.png",
      caption: "Projects dashboard — portfolio KPIs and status chips",
      filename: "ProGran_02.png",
    },
    {
      light: "/assets/progran/ProGran_04.png",
      dark: "/assets/progran/ProGran_05.png",
      caption: "Analytics — location summary: planned vs actual",
      filename: "ProGran_04.png",
    },
    {
      light: "/assets/progran/ProGran_01.png",
      dark: "/assets/progran/ProGran_01.png",
      caption: "Grant Management login (donor code + email)",
      filename: "ProGran_01.png",
    },
    {
      light: "/assets/progran/ProGran_010.png",
      dark: "/assets/progran/ProGran_010.png",
      caption: "Impact metrics table — baseline/target, units, filters",
      filename: "ProGran_010.png",
    },
    {
      light: "/assets/progran/ProGran_011.png",
      dark: "/assets/progran/ProGran_011.png",
      caption: "Operational report – filters — region, project, date range",
      filename: "ProGran_011.png",
    },
    {
      light: "/assets/progran/ProGran_012.png",
      dark: "/assets/progran/ProGran_012.png",
      caption: "Operational report – results — beneficiary-level records",
      filename: "ProGran_012.png",
    },
  ];

  const features = [
    {
      title: "Framework Alignment",
      description: "Import/manage ToC, LogFrame, or custom frameworks",
    },
    {
      title: "KPI → Data Mapping",
      description: "Link indicators to Surve-R forms and legacy data",
    },
    {
      title: "Workflow Automation",
      description: "Role-based approvals and notifications",
    },
    {
      title: "Portfolio Dashboards",
      description: "Multi-programme, multi-site overview",
    },
    {
      title: "Variance & Alerts",
      description: "Predictive flags and anomaly detection",
    },
    {
      title: "Donor Reporting",
      description: "One-click, audit-ready reports with full lineage",
    },
  ];

  const challenges = [
    {
      icon: "🎯",
      title: "Theory of Change → Reality Gap",
      description:
        "Link your ToC directly to field data, with live KPI tracking and variance analysis.",
    },
    {
      icon: "�",
      title: "Multi-Source Data Chaos",
      description:
        "Combine Surve-R forms, Excel imports, and API feeds into unified impact dashboards.",
    },
    {
      icon: "📝",
      title: "Donor Reporting Burden",
      description:
        "Generate compliant reports instantly with full audit trails and data lineage.",
    },
    {
      icon: "⚠️",
      title: "Late Course Corrections",
      description:
        "Predictive alerts flag at-risk outcomes before they become problems.",
    },
    {
      icon: "�",
      title: "Legacy System Integration",
      description:
        "Connect existing MIS, financial systems, and spreadsheets without disruption.",
    },
    {
      icon: "👥",
      title: "Cross-Team Coordination",
      description:
        "Role-based dashboards ensure everyone sees relevant metrics and updates.",
    },
  ];

  const openLightbox = (image, index) => {
    setCurrentImage(image);
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);

    // Analytics event
    if (typeof gtag !== "undefined") {
      gtag("event", "lightbox_open", {
        event_category: "Screenshot Gallery",
        event_label: image.filename,
      });
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % screenshots.length
        : currentImageIndex === 0
        ? screenshots.length - 1
        : currentImageIndex - 1;

    setCurrentImage(screenshots[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, currentImageIndex]);

  return (
    <div
      style={{ backgroundColor: Colors.Bg_color_3 }}
      className="min-h-screen"
    >
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-8">
        <div className="text-sm mb-6" style={{ color: Colors.Font_5 }}>
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt;{" "}
          <Link href="/allproducts" className="hover:underline">
            Products
          </Link>{" "}
          &gt; <span>ProGran</span>
        </div>

        {/* Intro */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden mb-10 border"
          style={{ borderColor: Colors.Form_outline }}
        >
          <div className="p-6 md:p-8 flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-2/3">
              <h2
                className="text-3xl font-semibold mb-4"
                style={{ color: Colors.Primary_font }}
              >
                Drive‑R: The Impact Intelligence Engine
              </h2>
              <p className="text-base" style={{ color: Colors.Font_5 }}>
                Drive‑R is Relific’s full-stack platform built to manage,
                transform, and activate data for social impact. From grassroots
                collection to real-time dashboards and SDG-aligned reports,
                Drive‑R empowers organisations across health, education,
                climate, and CSR to unlock the full value of their data.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg shadow-lg transition-all text-center"
                  style={{
                    backgroundColor: Colors.Primary_font,
                    color: Colors.Font_4,
                  }}
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
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = Colors.Primary_font;
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
                <img
                  src={drive_r_hero}
                  alt="Drive-R"
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

        {/* Features */}
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
              What the Drive‑R Platform Offers
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DriveRFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border transition-all hover:shadow-md"
                  style={{ borderColor: Colors.Form_outline }}
                >
                  <div className="w-full h-56 flex justify-center items-center mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className={feature.imageClass}
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

        {/* Challenges */}
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
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden transition-all hover:shadow-lg border-2 hover:-translate-y-1"
                style={{
                  borderColor: Colors.Icon_hover_2,
                  backgroundColor: Colors.Bg_color_3,
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

        {/* Video Section */}
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
                src={youtubeEmbed}
                title="Drive-R Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href={youtubeLink}
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
            Ready to Activate Your Impact Data?
          </h2>
          <p
            className="text-base mb-6 max-w-2xl mx-auto"
            style={{ color: Colors.Font_5 }}
          >
            Schedule a demo and see how Drive‑R helps you collect, transform,
            and report data—seamlessly, securely, and at scale.
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

export default DriveR;
