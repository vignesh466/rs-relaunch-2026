import React from "react";
import { useRouter } from "next/navigation";
import Colors from "../../constants/Color";
import {
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  MessageSquare,
  Calendar,
  ArrowRight,
} from "lucide-react";

const TataTrustsCaseStudy = () => {
  const router = useRouter();

  const statsData = [
    {
      icon: <CheckCircle size={28} />,
      value: "350+",
      label: "Farmers Onboarded",
      description: "Across cotton and groundnut crops in Yadgir",
    },
    {
      icon: <Users size={28} />,
      value: "60%",
      label: "Field Operations Digitized",
      description: "Reducing manual effort and paperwork",
    },
    {
      icon: <TrendingUp size={28} />,
      value: "35%",
      label: "Productivity Increase",
      description: "Through streamlined digital processes",
    },
    {
      icon: <Award size={28} />,
      value: "1-Click",
      label: "Emergency Notifications",
      description: "Delivering critical advisories during emergencies",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/path-to-hero-image.jpg')",
            filter: "brightness(0.7)",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60" />

        <div className="relative h-full max-w-6xl mx-auto flex flex-col justify-center px-6 sm:px-10">
          <div>
            <span
              className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full"
              style={{ backgroundColor: Colors.Primary_font, color: "#ffffff" }}
            >
              SUCCESS STORY
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Empowering Farmers Through Real-Time Advisory
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              How Krisiyukta partnered with Tata Trusts' Kalike initiative to
              transform agricultural practices
            </p>
          </div>
        </div>
      </div>

      {/* Introduction & Video Section - FEATURED */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Introduction */}
          <div className="lg:w-1/3">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: Colors.Primary_font }}
            >
              The Partnership
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Krisiyukta collaborated with Kalike, supported by Tata Trusts, to
              provide a digital platform empowering 350+ farmers growing cotton
              and groundnut crops in Yadgir.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3
                className="text-xl font-semibold mb-4 flex items-center"
                style={{ color: Colors.Primary_font }}
              >
                <Calendar className="mr-2" size={20} />
                Project Timeline
              </h3>
              <div className="space-y-3">
                <div className="flex">
                  <div
                    className="w-16 text-center py-1 rounded font-medium"
                    style={{
                      backgroundColor: `${Colors.Primary_font}20`,
                      color: Colors.Primary_font,
                    }}
                  >
                    2024
                  </div>
                  <div className="ml-4">Partnership Initiated</div>
                </div>
                <div className="flex">
                  <div
                    className="w-16 text-center py-1 rounded font-medium"
                    style={{
                      backgroundColor: `${Colors.Primary_font}20`,
                      color: Colors.Primary_font,
                    }}
                  >
                    2025
                  </div>
                  <div className="ml-4">Full Implementation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Video */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: Colors.Primary_font }}
              >
                The Impact: See Our Platform in Action
              </h3>
              <div
                className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border-4"
                style={{ borderColor: Colors.Primary_font }}
              >
                <iframe
                  src="https://www.youtube.com/embed/wB6pDVidrlk" // No autoplay parameter
                  title="Tata Trusts Implementation Journey"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div>
            <h2
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: Colors.Primary_font }}
            >
              What Our Partners Say
            </h2>

            <div
              className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto border-l-4"
              style={{ borderColor: Colors.Primary_font }}
            >
              <div className="flex items-start mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  style={{ backgroundColor: `${Colors.Primary_font}20` }}
                >
                  <MessageSquare
                    size={28}
                    style={{ color: Colors.Primary_font }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Mr. Yellappa</h3>
                  <p className="text-gray-600">Extension Worker, Kalike</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic text-lg mb-4">
                "This application enables us to digitize field activity and
                provide accurate advisories by factoring in climate conditions,
                previous spray records, damage percentage, and other essential
                parameters. It's a game-changer for precision farming. Our
                efficiency and impact have improved working with Krisiyukta."
              </blockquote>
              <p className="font-medium">
                <span style={{ color: Colors.Primary_font }}>
                  Success Highlight:
                </span>{" "}
                During heavy rains causing waterlogging in cotton fields, our
                platform's push notification feature allowed them to send urgent
                advisories to all farmers with just one click.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div>
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{ color: Colors.Primary_font }}
            >
              Key Platform Features
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              What makes Krisiyukta's farmer platform the preferred choice for
              Kalike and Tata Trusts
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div
                  className="w-16 h-16 rounded-full mb-4 flex items-center justify-center mx-auto"
                  style={{ backgroundColor: `${Colors.Primary_font}15` }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={Colors.Primary_font}
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: Colors.Primary_font }}
                >
                  Customizable
                </h3>
                <p className="text-gray-600">
                  Tailored to specific crop needs and regional requirements
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div
                  className="w-16 h-16 rounded-full mb-4 flex items-center justify-center mx-auto"
                  style={{ backgroundColor: `${Colors.Primary_font}15` }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={Colors.Primary_font}
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: Colors.Primary_font }}
                >
                  Real-Time Advisory
                </h3>
                <p className="text-gray-600">
                  Critical updates during peak seasons to save crops and reduce
                  costs
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div
                  className="w-16 h-16 rounded-full mb-4 flex items-center justify-center mx-auto"
                  style={{ backgroundColor: `${Colors.Primary_font}15` }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={Colors.Primary_font}
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: Colors.Primary_font }}
                >
                  User-Friendly
                </h3>
                <p className="text-gray-600">
                  Easy to use for field staff, even in remote areas with limited
                  connectivity
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div
                  className="w-16 h-16 rounded-full mb-4 flex items-center justify-center mx-auto"
                  style={{ backgroundColor: `${Colors.Primary_font}15` }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={Colors.Primary_font}
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: Colors.Primary_font }}
                >
                  Unified Platform
                </h3>
                <p className="text-gray-600">
                  Onboarding all farmers on a single platform for streamlined
                  management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results & Impact Section */}
      <div className="bg-gray-800 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div>
            <h2 className="text-3xl font-bold mb-10 text-center text-white">
              Results & Impact
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {statsData.map((stat, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ color: Colors.Primary_font }}
                    >
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div
                      className="text-3xl font-bold mb-1"
                      style={{ color: Colors.Primary_font }}
                    >
                      {stat.value}
                    </div>
                    <div className="font-medium mb-2 text-white">
                      {stat.label}
                    </div>
                    <p className="text-sm text-gray-300">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: Colors.Primary_font }}
            >
              Ready to Transform Your Agricultural Operations?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              If you're an agricultural organization or civil society group
              looking to scale your impact, let's connect!
            </p>
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center mx-auto"
              style={{
                backgroundColor: Colors.Primary_font,
                color: Colors.Font_4 || "#ffffff",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  Colors.Click || "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = Colors.Primary_font)
              }
            >
              Contact Us <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TataTrustsCaseStudy;
