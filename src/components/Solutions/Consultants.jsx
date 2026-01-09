import React from "react";
import Link from "next/link";
import Colors from "../../constants/Color";
import {
  Users,
  BarChart2,
  Globe,
  CheckCircle,
  FileText,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const ConsultantsPage = () => {
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
            Empowering Social Sector Consultants with Data-Driven Insights
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Krisiyukta's platform equips consulting organizations with tools to
            analyze, strategize, and deliver impactful solutions for their
            clients in the social sector.
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
            Simplify Your Consulting Workflow
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Collect Data",
                description:
                  "Gather data from multiple sources to create a comprehensive view of your client's projects and initiatives.",
              },
              {
                icon: BarChart2,
                title: "Analyze & Strategize",
                description:
                  "Leverage advanced analytics to identify trends, measure impact, and develop actionable strategies.",
              },
              {
                icon: Globe,
                title: "Deliver Insights",
                description:
                  "Generate detailed reports and dashboards to communicate findings and recommendations effectively.",
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
            Tools Tailored for Social Sector Consultants
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Impact Assessment",
                description:
                  "Evaluate the effectiveness of programs and initiatives with data-driven impact assessments.",
              },
              {
                icon: CheckCircle,
                title: "Custom Dashboards",
                description:
                  "Create customizable dashboards to visualize key metrics and insights for your clients.",
              },
              {
                icon: CheckCircle,
                title: "Stakeholder Engagement",
                description:
                  "Facilitate collaboration with stakeholders through interactive reports and real-time updates.",
              },
              {
                icon: CheckCircle,
                title: "Resource Optimization",
                description:
                  "Identify opportunities to optimize resources and maximize the impact of social sector projects.",
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
            What Our Consulting Partners Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Krisiyukta's platform has streamlined our data collection and analysis process, enabling us to deliver actionable insights to our clients faster.",
                author: "Anjali Verma",
                position: "Senior Consultant, Impact Strategies",
              },
              {
                quote:
                  "The customizable dashboards and reporting tools have been a game-changer for our consulting projects. Highly recommended!",
                author: "Ravi Kumar",
                position: "Director, Social Impact Consulting",
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
            Ready to Elevate Your Consulting Services?
          </h2>
          <p className="text-lg mb-8">
            Join leading consulting organizations that have enhanced their
            impact with Krisiyukta.
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

export default ConsultantsPage;
