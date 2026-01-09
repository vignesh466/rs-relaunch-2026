import React from "react";
import { Play, Award, TrendingUp, Users } from "lucide-react";
import Colors from "../../constants/Color";

const HighlightTestimonial = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-16 rounded-2xl shadow-xl mb-16 relative overflow-hidden"
      style={{
        backgroundColor: Colors.Primary_font,
        boxShadow: `0 10px 25px -5px ${Colors.Primary_font}40`,
      }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
        style={{
          backgroundColor: Colors.Font_4,
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{
          backgroundColor: Colors.Font_4,
          transform: "translate(-30%, 30%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: Colors.Font_4 }}
          >
            Featured Client Success Story
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded"
            style={{ backgroundColor: Colors.Font_4 }}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Left: Video */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div
              className="h-full relative rounded-xl overflow-hidden shadow-2xl border-4"
              style={{
                borderColor: Colors.Font_4,
                height: "100%",
                minHeight: "300px",
              }}
            >
              {!isPlaying ? (
                <div
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                  style={{
                    backgroundImage: "url('/api/placeholder/640/360')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  {/* Video overlay */}
                  <div
                    className="absolute inset-0 opacity-70 transition-opacity group-hover:opacity-40"
                    style={{ backgroundColor: Colors.Bg_color_2 }}
                  />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                      style={{ backgroundColor: Colors.Font_4 }}
                    >
                      <Play
                        size={40}
                        style={{ color: Colors.Primary_font }}
                        className="ml-1"
                      />
                    </div>
                  </div>

                  {/* Video info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white font-medium text-lg">
                      Kalike & Our Collaboration
                    </p>
                    <p className="text-gray-300 text-sm">5:23 • Impact Story</p>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0">
                  <iframe
                    src="https://www.youtube.com/embed/Nf_DZAB4YcU?autoplay=1"
                    title="Kalike & Our Collaboration"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col">
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-sm"
              style={{
                backgroundColor: Colors.Font_4,
                color: Colors.Primary_font,
              }}
            >
              Tata Trusts Initiative
            </div>

            <h3
              className="text-2xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ color: Colors.Font_4 }}
            >
              How Kalike Digitized their Agri Operations
            </h3>

            <p
              className="text-lg mb-6"
              style={{
                color: Colors.Font_4,
                opacity: 0.9,
              }}
            >
              Discover how Kalike, an initiative by Tata Trusts, partnered with
              us to bring innovative data-driven solutions to the field. This
              story outlines the tools they used, their impact, and how your
              organization can benefit too.
            </p>

            {/* Statistics row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div
                className="p-4 rounded-lg text-center"
                style={{
                  backgroundColor: `${Colors.Font_4}15`,
                  border: `1px solid ${Colors.Font_4}30`,
                }}
              >
                <TrendingUp
                  className="mx-auto mb-2"
                  size={24}
                  style={{ color: Colors.Font_4 }}
                />
                <p
                  className="text-xl font-bold"
                  style={{ color: Colors.Font_4 }}
                >
                  60%
                </p>
                <p
                  className="text-xs"
                  style={{ color: Colors.Font_4, opacity: 0.8 }}
                >
                  Field work digitized
                </p>
              </div>
              <div
                className="p-4 rounded-lg text-center"
                style={{
                  backgroundColor: `${Colors.Font_4}15`,
                  border: `1px solid ${Colors.Font_4}30`,
                }}
              >
                <Users
                  className="mx-auto mb-2"
                  size={24}
                  style={{ color: Colors.Font_4 }}
                />
                <p
                  className="text-xl font-bold"
                  style={{ color: Colors.Font_4 }}
                >
                  1000+
                </p>
                <p
                  className="text-xs"
                  style={{ color: Colors.Font_4, opacity: 0.8 }}
                >
                  Farmers Impacted
                </p>
              </div>
              <div
                className="p-4 rounded-lg text-center"
                style={{
                  backgroundColor: `${Colors.Font_4}15`,
                  border: `1px solid ${Colors.Font_4}30`,
                }}
              >
                <Award
                  className="mx-auto mb-2"
                  size={24}
                  style={{ color: Colors.Font_4 }}
                />
                <p
                  className="text-xl font-bold"
                  style={{ color: Colors.Font_4 }}
                >
                  6
                </p>
                <p
                  className="text-xs"
                  style={{ color: Colors.Font_4, opacity: 0.8 }}
                >
                  Talukas Reached
                </p>
              </div>
            </div>

            <div
              className="mb-8 p-6 rounded-lg"
              style={{
                backgroundColor: `${Colors.Font_4}15`,
                border: `1px solid ${Colors.Font_4}30`,
              }}
            >
              <blockquote
                className="italic mb-4 text-lg"
                style={{ color: Colors.Font_4 }}
              >
                "This collaboration helped us unlock new insights and create
                impact where it mattered most. The digital tools transformed our
                farmer outreach."
              </blockquote>
              <div className="flex items-center">
                <p style={{ color: Colors.Font_4 }}>
                  <span className="font-medium">Sreekanth V - </span>
                  <span className="font-medium">Program Officer</span>
                  <span className="opacity-80">, Kalike (Tata Trusts)</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-auto">
              <a
                href="/blogs"
                className="inline-block px-8 py-4 rounded-lg font-bold text-center transition-all duration-300 shadow-lg"
                style={{
                  backgroundColor: Colors.Font_4,
                  color: Colors.Primary_font,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 10px 15px -3px ${Colors.Primary_font}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 4px 6px -1px ${Colors.Primary_font}40`;
                }}
              >
                View our Impact Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightTestimonial;
