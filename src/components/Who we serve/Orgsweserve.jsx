import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Building,
  Lightbulb,
  Globe,
  Heart,
  HandHeart,
  TrendingUp,
  CheckCircle,
  Target,
  BarChart3,
  DollarSign,
  FileText,
} from "lucide-react";
import Colors from "../../constants/Color";

const OrganizationsWeServe = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const organizations = [
    {
      id: "ngos",
      title: "NGOs & Non-Profits",
      subtitle: "Amplify Your Mission With Data That Actually Works",
      description:
        "Stop letting data chaos steal time from your mission. Get enterprise-grade tools at NGO-friendly prices (60% discount) and prove your impact to unlock bigger grants.",
      icon: (
        <Globe className="w-8 h-8" style={{ color: Colors.Primary_font }} />
      ),
      currentChallenges: [
        "Limited budget for expensive enterprise tools",
        "Data scattered across multiple platforms",
        "Staff overwhelmed by manual processes",
        "Difficulty proving impact to donors",
        "Time wasted on manual reporting",
      ],
      withRelific: [
        "3x larger grants with bulletproof impact proof",
        "Enterprise-grade reliability at nonprofit rates",
        "90% less time spent on data management",
        "Real-time insights that guide better decisions",
      ],
      pricing: "Starting at $400/month with 60% nonprofit discount",
      ctaText: "Get NGO Pricing",
      ctaLink: "/start-trial",
      bgColor: "#10B981",
      cardIcon: <Heart className="w-12 h-12 text-white" />,
    },
    {
      id: "csr",
      title: "CSR Arms of Corporates",
      subtitle: "Turn Your CSR Into a Strategic Advantage",
      description:
        "Your CSR program should be a boardroom success story, not a reporting nightmare. Get executive dashboards that impress stakeholders and scale programs that actually move the needle.",
      icon: (
        <Building className="w-8 h-8" style={{ color: Colors.Primary_font }} />
      ),
      currentChallenges: [
        "Board wants ROI proof on social investments",
        "Programs scale but reporting doesn't",
        "Data scattered across regions and partners",
        "Impossible to track long-term social work",
      ],
      withRelific: [
        "Board meetings become showcases, not status hunts",
        "Scale programs confidently with real-time insights",
        "Executive dashboards that impress leadership",
        "CSR that drives business impact, not spreadsheets",
      ],
      pricing: "Enterprise pricing from $25,000/year",
      ctaText: "Schedule Executive Demo",
      ctaLink: "/contact",
      bgColor: "#1E40AF",
      cardIcon: <Building className="w-12 h-12 text-white" />,
    },
    {
      id: "impact-investors",
      title: "Impact Investors",
      subtitle: "Portfolio Impact Intelligence That LPs Actually Want to See",
      description:
        "Transform your portfolio monitoring from quarterly guesswork into real-time intelligence. Get the impact data that LPs demand and the insights that drive better investment decisions.",
      icon: (
        <TrendingUp
          className="w-8 h-8"
          style={{ color: Colors.Primary_font }}
        />
      ),
      currentChallenges: [
        "Portfolio companies provide inconsistent impact data",
        "LPs demand proof of impact, not just returns",
        "Quarterly reporting takes weeks to compile",
        "No standardized way to compare impact across investments",
      ],
      withRelific: [
        "Real-time portfolio impact dashboards",
        "Standardized impact metrics across all investments",
        "LP reports generated automatically",
        "Data-driven decisions for follow-on investments",
      ],
      pricing: "Custom pricing for fund size and portfolio complexity",
      ctaText: "See Portfolio Demo",
      ctaLink: "/demo-videos",
      bgColor: "#8B5CF6",
      cardIcon: <TrendingUp className="w-12 h-12 text-white" />,
    },
  ];

  return (
    <div
      className="py-16 px-4 md:py-24 md:px-8"
      style={{ backgroundColor: Colors.Bg_color_3 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight"
            style={{ color: Colors.Primary_font, fontWeight: 400 }}
          >
            Solutions for Every Impact Organization
          </h1>
          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-normal"
            style={{ color: Colors.Font_3, fontWeight: 400 }}
          >
            Whether you're proving impact to donors, impressing boards, or
            satisfying LPs—we have the tools to amplify your mission and
            multiply your effectiveness.
          </p>
        </div>

        {/* Organizations Cards */}
        <div className="space-y-12 lg:space-y-16">
          {organizations.map((org, index) => (
            <div
              key={org.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left Content - 8 columns on large screens */}
                <div className="lg:col-span-8 p-6 sm:p-8 lg:p-12">
                  {/* Icon Badge and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${org.bgColor}20` }}
                    >
                      {React.cloneElement(org.icon, {
                        className: "w-6 h-6 sm:w-7 sm:h-7",
                        style: { color: org.bgColor },
                      })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-2 leading-tight"
                        style={{ color: Colors.Primary_font, fontWeight: 400 }}
                      >
                        {org.title}
                      </h2>
                      <h3
                        className="text-lg sm:text-xl lg:text-2xl font-normal mb-4 leading-tight"
                        style={{ color: org.bgColor, fontWeight: 400 }}
                      >
                        {org.subtitle}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-base sm:text-lg leading-relaxed mb-8 font-normal"
                    style={{ color: Colors.Font_3, fontWeight: 400 }}
                  >
                    {org.description}
                  </p>

                  {/* Two-column layout for challenges and solutions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
                    {/* Current Challenges */}
                    <div>
                      <h4
                        className="font-normal text-base sm:text-lg mb-4"
                        style={{ color: Colors.Primary_font, fontWeight: 400 }}
                      >
                        Current Challenges:
                      </h4>
                      <ul className="space-y-3">
                        {org.currentChallenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <span
                              className="text-sm sm:text-base leading-relaxed font-normal"
                              style={{ color: Colors.Font_3, fontWeight: 400 }}
                            >
                              {challenge}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* With Relific */}
                    <div>
                      <h4
                        className="font-normal text-base sm:text-lg mb-4"
                        style={{ color: Colors.Primary_font, fontWeight: 400 }}
                      >
                        With Relific:
                      </h4>
                      <ul className="space-y-3">
                        {org.withRelific.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle
                              size={16}
                              className="text-green-500 mt-1 flex-shrink-0"
                            />
                            <span
                              className="text-sm sm:text-base leading-relaxed font-normal"
                              style={{ color: Colors.Font_3, fontWeight: 400 }}
                            >
                              {solution}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <p
                      className="text-sm sm:text-base font-normal"
                      style={{ color: Colors.Font_3, fontWeight: 400 }}
                    >
                      {org.pricing}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={org.ctaLink}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-normal text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                    style={{
                      backgroundColor: org.bgColor,
                      color: "white",
                      textDecoration: "none",
                      fontWeight: 400,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {org.ctaText}
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>

                {/* Right Visual Card - 4 columns on large screens */}
                <div
                  className="lg:col-span-4 relative flex items-center justify-center p-8 sm:p-12 lg:p-16 min-h-[300px] lg:min-h-[500px]"
                  style={{ backgroundColor: org.bgColor }}
                >
                  <div className="text-center text-white relative z-10">
                    <div className="mb-6">
                      {React.cloneElement(org.cardIcon, {
                        className: "w-16 h-16 sm:w-20 sm:h-20 mx-auto",
                      })}
                    </div>
                    <h3
                      className="text-xl sm:text-2xl lg:text-3xl font-normal mb-3"
                      style={{ fontWeight: 400 }}
                    >
                      {org.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg opacity-90 font-normal"
                      style={{ fontWeight: 400 }}
                    >
                      Purpose-built for your success
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-10"
                    style={{
                      backgroundColor: "white",
                      transform: "translate(25%, -25%)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-10"
                    style={{
                      backgroundColor: "white",
                      transform: "translate(-25%, 25%)",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-4 sm:mb-6 leading-tight"
              style={{ color: Colors.Primary_font, fontWeight: 400 }}
            >
              Ready to Transform Your Impact Operations?
            </h3>
            <p
              className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed font-normal"
              style={{ color: Colors.Font_3, fontWeight: 400 }}
            >
              Join hundreds of organizations already using Relific to amplify
              their mission and multiply their effectiveness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/start-trial"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-normal text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                style={{
                  backgroundColor: Colors.Primary_font,
                  color: Colors.Font_4,
                  textDecoration: "none",
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Target size={18} className="sm:w-5 sm:h-5" />
                Start Your Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-normal text-base sm:text-lg transition-all duration-300 border-2 cursor-pointer"
                style={{
                  borderColor: Colors.Primary_font,
                  color: Colors.Primary_font,
                  textDecoration: "none",
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = Colors.Primary_font;
                  e.currentTarget.style.color = Colors.Font_4;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = Colors.Primary_font;
                }}
              >
                <Heart size={18} className="sm:w-5 sm:h-5" />
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsWeServe;
