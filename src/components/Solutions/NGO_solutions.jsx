import React from "react";
import Link from "next/link";
import Colors from "../../constants/Color";
import {
  Users,
  BarChart2,
  Globe,
  CheckCircle,
  FileText,
  Heart,
  ArrowRight,
} from "lucide-react";

const NGOSolutionsPage = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background: `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`,
          color: Colors.Font_4,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Empowering NGOs with Digital Tools for Impact
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Krisiyukta's platform helps NGOs streamline operations, measure
            impact, and enhance transparency to achieve their mission
            effectively.
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
              Request Demo
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
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: Colors.Primary_font }}
          >
            Simplify Your NGO Operations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Track Projects",
                description:
                  "Monitor project progress and outcomes with real-time data and analytics.",
              },
              {
                icon: BarChart2,
                title: "Measure Impact",
                description:
                  "Leverage data-driven insights to measure the impact of your initiatives.",
              },
              {
                icon: Globe,
                title: "Enhance Transparency",
                description:
                  "Build trust with stakeholders through detailed reporting and accountability.",
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div
                  className="p-4 rounded-full mx-auto mb-6"
                  style={{
                    backgroundColor: `${Colors.Primary_font}20`,
                  }}
                >
                  <Icon size={32} style={{ color: Colors.Primary_font }} />
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: Colors.Primary_font }}
                >
                  {title}
                </h3>
                <p className="text-base" style={{ color: Colors.Font_3 }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: Colors.Primary_font }}
          >
            Comprehensive Tools for NGOs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Beneficiary Management",
                description:
                  "Maintain detailed records of beneficiaries and track their progress over time.",
              },
              {
                icon: CheckCircle,
                title: "Impact Reporting",
                description:
                  "Generate professional reports to showcase your impact to donors and stakeholders.",
              },
              {
                icon: CheckCircle,
                title: "Volunteer Coordination",
                description:
                  "Streamline volunteer management with scheduling, tracking, and communication tools.",
              },
              {
                icon: CheckCircle,
                title: "Resource Allocation",
                description:
                  "Optimize resource allocation to ensure maximum efficiency and effectiveness.",
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className="p-3 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: `${Colors.Primary_font}20`,
                  }}
                >
                  <Icon size={24} style={{ color: Colors.Primary_font }} />
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
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: Colors.Primary_font }}
          >
            What Our NGO Partners Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Krisiyukta has transformed how we manage our projects. The reporting tools have saved us countless hours of work each month.",
                author: "Anika Sharma",
                position: "Program Manager, Green Solutions NGO",
              },
              {
                quote:
                  "The platform's analytics capabilities give us insights we never had before. We can now measure our impact with precision.",
                author: "Rajiv Mehta",
                position: "Director, Global Aid Foundation",
              },
            ].map(({ quote, author, position }, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl text-green-600 mb-4">"</div>
                <p className="text-gray-600 text-lg mb-6">{quote}</p>
                <div>
                  <p
                    className="font-bold"
                    style={{ color: Colors.Primary_font }}
                  >
                    {author}
                  </p>
                  <p className="text-sm" style={{ color: Colors.Font_3 }}>
                    {position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 text-center"
        style={{
          background: `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`,
          color: Colors.Font_4,
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Empower Your NGO with Digital Tools?
          </h2>
          <p className="text-lg mb-8">
            Join leading NGOs that have streamlined their operations with
            Krisiyukta.
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
              Request Demo
            </Link>
            <Link
              href="/aboutus"
              className="px-6 py-3 border rounded-lg font-medium transition-all"
              style={{
                border: `1px solid ${Colors.Font_4}`,
                color: Colors.Font_4,
              }}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NGOSolutionsPage;
