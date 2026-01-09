import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Colors from "../../constants/Color";
import {
  FileText,
  BarChart2,
  Globe,
  CheckCircle,
  Calendar,
  Zap,
  Users,
  ArrowRight,
  PieChart,
  TrendingUp,
  FileCheck,
  Award,
  Folder,
  Briefcase,
  Clipboard,
  Shield, // Add this import
} from "lucide-react";

const CSRPage = () => {
  // Navigation tabs
  const tabs = [
    { icon: FileText, label: "Measure", id: "measure" },
    { icon: BarChart2, label: "Manage", id: "manage" },
    { icon: Globe, label: "Report", id: "report" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.section
        className="py-20 px-6 text-center"
        style={{
          background: `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`,
          color: Colors.Font_4,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="max-w-6xl mx-auto"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Driving Impact Reporting Tailored for Businesses of All Scales
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Krisiyukta helps enterprises articulate their social impact data
            with clarity and confidence, ensuring Section 135 compliance while
            maximizing the effectiveness of your initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              style={{
                backgroundColor: Colors.Font_4,
                color: Colors.Primary_font,
              }}
            >
              Schedule a Demo
            </Link>
            <Link
              href="/aboutus"
              className="px-6 py-3 border rounded-lg font-medium transition-all"
              style={{
                border: `1px solid ${Colors.Font_4}`,
                color: Colors.Font_4,
              }}
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </motion.section>

      {/* Navigation Tabs */}
      <motion.div
        className="sticky top-0 z-10 bg-white shadow-md"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center md:justify-center space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                className="flex items-center gap-2 py-4 px-2 border-b-2 border-transparent hover:border-blue-500 transition-all"
                style={{ color: Colors.Primary_font }}
              >
                <tab.icon size={20} />
                <span className="font-medium">{tab.label}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Measure Section */}
      <motion.section
        id="measure"
        className="py-16 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="max-w-6xl mx-auto px-6" variants={fadeInUp}>
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ color: Colors.Primary_font }}
          >
            Accurately measure activity data from your project partners
          </h2>
          <p
            className="text-center text-lg mb-12"
            style={{ color: Colors.Font_3 }}
          >
            We ensure that enterprises, irrespective of size or sector, can
            articulate their impact data with clarity and confidence.
          </p>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
          >
            <div className="space-y-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Automated workflows for data collection",
                  description:
                    "Simplify the process of gathering impact data from implementing partners and field teams.",
                },
                {
                  icon: CheckCircle,
                  title: "Evidence Backed",
                  description:
                    "Capture photographic evidence, beneficiary testimonials, and field verification for authentic impact reporting.",
                },
                {
                  icon: CheckCircle,
                  title: "Single Source of Truth for all Impact Data",
                  description:
                    "Consolidate data from multiple NGOs, initiatives, and Schedule VII activities into a unified platform.",
                },
                {
                  icon: CheckCircle,
                  title: "Smart Collaboration",
                  description:
                    "Enable seamless communication between corporate teams and implementing partners across different states.",
                },
                {
                  icon: CheckCircle,
                  title: "Partner Assessments",
                  description:
                    "Evaluate NGO performance and due diligence records with comprehensive assessment tools.",
                },
                {
                  icon: CheckCircle,
                  title: "500+ Development Indicators with Custom KPI Support",
                  description:
                    "Track progress across education, healthcare, skill development, rural development, and all Schedule VII activities.",
                },
              ].map(({ icon: Icon, title, description }, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className="p-2 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: `${Colors.Primary_font}20`,
                    }}
                  >
                    <Icon size={20} style={{ color: Colors.Primary_font }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: Colors.Primary_font }}
                    >
                      {title}
                    </h3>
                    <p className="text-base" style={{ color: Colors.Font_3 }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-4">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: Colors.Primary_font }}
                >
                  Impact Dashboard
                </h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-500">Education Programs</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-xl">23,456</span>
                      <span className="text-sm text-green-600">+12% YoY</span>
                    </div>
                    <p className="text-sm">Beneficiaries Reached</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-500">
                      Healthcare Initiatives
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-xl">18,275</span>
                      <span className="text-sm text-green-600">+8% YoY</span>
                    </div>
                    <p className="text-sm">Beneficiaries Served</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <p className="text-sm text-gray-500">Skill Development</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-xl">4,125</span>
                      <span className="text-sm text-green-600">
                        92% Placement
                      </span>
                    </div>
                    <p className="text-sm">Youths Trained</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Manage Section */}
      <motion.section
        id="manage"
        className="py-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ color: Colors.Primary_font }}
          >
            Manage impact function across your organisation with ease
          </h2>
          <p
            className="text-center text-lg mb-12"
            style={{ color: Colors.Font_3 }}
          >
            Your powerhouse of social impact management, goal-setting, task
            tracking and insights.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Calendar size={32} style={{ color: Colors.Primary_font }} />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: Colors.Primary_font }}
              >
                Smart Goal & Project Tracking
              </h3>
              <p className="text-base" style={{ color: Colors.Font_3 }}>
                Efficiently track your CSR projects aligned with 2% mandate
                requirements and Schedule VII activities with data-backed goals
                and granular task monitoring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <Zap size={32} style={{ color: Colors.Primary_font }} />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: Colors.Primary_font }}
              >
                AI-driven Impact Management
              </h3>
              <p className="text-base" style={{ color: Colors.Font_3 }}>
                Social Impact Virtual Assistant. Variance analysis for data
                accuracy. AI features that enable informed decision-making for
                maximum beneficiary impact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <PieChart size={32} style={{ color: Colors.Primary_font }} />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: Colors.Primary_font }}
              >
                Real-time Impact Dashboards
              </h3>
              <p className="text-base" style={{ color: Colors.Font_3 }}>
                Granular visualization tools for tracking progress across
                districts, demographics, and intervention types to ensure
                balanced development.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "Data Governance" },
                { title: "Features for Board Committee Reporting" },
                { title: "Project Monitoring & Evaluation" },
                { title: "Single View for all Development Projects" },
                { title: "Comprehensive Impact Analytics" },
                { title: "CSR Budget Management" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle
                    size={18}
                    style={{ color: Colors.Primary_font }}
                  />
                  <span
                    className="text-base font-medium"
                    style={{ color: Colors.Font_3 }}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Report Section */}
      <motion.section
        id="report"
        className="py-16 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ color: Colors.Primary_font }}
          >
            Comprehensive Reporting for Stakeholders & Regulators
          </h2>
          <p
            className="text-center text-lg mb-12"
            style={{ color: Colors.Font_3 }}
          >
            Generate professional reports that align with regulatory
            requirements and showcase your impact story.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div
                className="p-4 rounded-full mx-auto mb-6"
                style={{
                  backgroundColor: `${Colors.Primary_font}20`,
                }}
              >
                <FileCheck size={32} style={{ color: Colors.Primary_font }} />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: Colors.Primary_font }}
              >
                Regulatory Compliance
              </h3>
              <p className="text-base" style={{ color: Colors.Font_3 }}>
                Generate reports for MCA, Annual Reports, and Board Committee
                reviews with just a few clicks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div
                className="p-4 rounded-full mx-auto mb-6"
                style={{
                  backgroundColor: `${Colors.Primary_font}20`,
                }}
              >
                <Award size={32} style={{ color: Colors.Primary_font }} />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: Colors.Primary_font }}
              >
                Impact Storytelling
              </h3>
              <p className="text-base" style={{ color: Colors.Font_3 }}>
                Transform data into compelling narratives with beneficiary
                stories, visual aids, and SDG alignment metrics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div
                className="p-4 rounded-full mx-auto mb-6"
                style={{
                  backgroundColor: `${Colors.Primary_font}20`,
                }}
              >
                <TrendingUp size={32} style={{ color: Colors.Primary_font }} />
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ color: Colors.Primary_font }}
              >
                Multi-Framework Reporting
              </h3>
              <p className="text-base" style={{ color: Colors.Font_3 }}>
                Generate reports compatible with Global Reporting Initiative
                (GRI), Business Responsibility and Sustainability Reporting
                (BRSR), and SDG frameworks.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3
              className="text-xl font-semibold mb-6"
              style={{ color: Colors.Primary_font }}
            >
              Comprehensive Report Components
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Folder,
                  title: "Schedule VII Categorization",
                  description:
                    "Automatically categorize all initiatives according to prescribed activity areas.",
                },
                {
                  icon: Briefcase,
                  title: "Financial Utilization",
                  description:
                    "Track and report budget allocation, utilization, and variance across projects.",
                },
                {
                  icon: Users,
                  title: "Beneficiary Analysis",
                  description:
                    "Demographic breakdown of beneficiaries by age, gender, location, and impact category.",
                },
                {
                  icon: Clipboard,
                  title: "Implementing Agency Details",
                  description:
                    "Comprehensive information about NGO partners, their credentials, and performance metrics.",
                },
              ].map(({ icon: Icon, title, description }, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className="p-2 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: `${Colors.Primary_font}20`,
                    }}
                  >
                    <Icon size={20} style={{ color: Colors.Primary_font }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-2"
                      style={{ color: Colors.Primary_font }}
                    >
                      {title}
                    </h3>
                    <p className="text-base" style={{ color: Colors.Font_3 }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ESG Categories */}
      <motion.section
        className="py-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: Colors.Primary_font }}
          >
            Comprehensive Impact Areas Coverage
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Environmental */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="p-2 rounded-full"
                  style={{ backgroundColor: "#e6f7e6" }}
                >
                  <Globe size={24} style={{ color: "#228B22" }} />
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "#228B22" }}
                >
                  Environmental
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Climate & Renewable Energy",
                  "Emissions Reduction",
                  "Water Conservation",
                  "Waste Management",
                  "Biodiversity Protection",
                  "Sustainable Agriculture",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle size={16} style={{ color: "#228B22" }} />
                    <span style={{ color: Colors.Font_3 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="p-2 rounded-full"
                  style={{ backgroundColor: "#fff0e6" }}
                >
                  <Users size={24} style={{ color: "#FF6B35" }} />
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "#FF6B35" }}
                >
                  Social
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Health & Wellbeing",
                  "Education & Literacy",
                  "Diversity & Inclusion",
                  "Community Development",
                  "Skill Development",
                  "Rural Development",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle size={16} style={{ color: "#FF6B35" }} />
                    <span style={{ color: Colors.Font_3 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Governance */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="p-2 rounded-full"
                  style={{ backgroundColor: "#e6f0ff" }}
                >
                  <Shield size={24} style={{ color: "#0066CC" }} />
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "#0066CC" }}
                >
                  Governance
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "CSR Committee Oversight",
                  "Risk Management",
                  "Partner Performance",
                  "Ethical Implementation",
                  "Transparent Reporting",
                  "Anti-Corruption Practices",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle size={16} style={{ color: "#0066CC" }} />
                    <span style={{ color: Colors.Font_3 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 text-center"
        style={{
          background: `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`,
          color: Colors.Font_4,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="max-w-6xl mx-auto px-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Social Impact Management?
          </h2>
          <p className="text-lg mb-8">
            Join leading enterprises across India that have optimized their CSR
            processes with Krisiyukta.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              style={{
                backgroundColor: Colors.Font_4,
                color: Colors.Primary_font,
              }}
            >
              Schedule a Demo
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border rounded-lg font-medium transition-all"
              style={{
                border: `1px solid ${Colors.Font_4}`,
                color: Colors.Font_4,
              }}
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default CSRPage;
