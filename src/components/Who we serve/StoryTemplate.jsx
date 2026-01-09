import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import Colors from "../../constants/Color";
import {
  metrics,
  sections,
  testimonial,
  heroContent,
  videoSection,
} from "../../constants/Content_blog";

const ImpactStoryTemplate = () => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: Colors.Bg_color_1 }}
    >
      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/whoweserve" className="text-blue-600 hover:underline">
            Who We Serve
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">{heroContent.title}</span>
        </nav>
      </div>

      {/* Hero Section with overlapping metrics */}
      <div className="relative">
        {/* Background image section */}
        <div
          className="relative h-[300px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroContent.backgroundImage})`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(54, 54, 54, 0.4)" }}
          >
            <div className="max-w-6xl mx-auto px-6 pt-16 text-center">
              <h2
                className="text-[36px] font-bold mb-4"
                style={{ color: Colors.Font_4 }}
              >
                {heroContent.title}
              </h2>
              <h2
                className="text-[36px] font-bold"
                style={{ color: Colors.Font_4 }}
              >
                {heroContent.subtitle}
              </h2>
            </div>
          </div>
        </div>

        {/* Metrics cards overlapping the hero */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="max-w-6xl mx-auto px-6">
            <div
              className="grid grid-cols-4 rounded-lg shadow-lg overflow-hidden"
              style={{ backgroundColor: Colors.Primary_font }}
            >
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`text-center py-8 px-4 ${
                    index < metrics.length - 1
                      ? "border-r border-opacity-20"
                      : ""
                  }`}
                  style={{ borderColor: Colors.Font_4 }}
                >
                  <div
                    className="text-2xl font-bold mb-2"
                    style={{ color: Colors.Font_4 }}
                  >
                    {metric.value}
                  </div>
                  <div
                    className="text-sm opacity-80"
                    style={{ color: Colors.Font_4 }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main content with increased top padding for metrics overlap */}
      <div className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Farmer testimonial section */}
          <div className="flex gap-8 mb-16">
            <div className="w-1/2">
              {testimonial?.image ? (
                <img
                  src={testimonial.image}
                  alt="Farmers with produce"
                  className="rounded-lg w-full h-[320px] object-cover"
                  onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image if load fails
                />
              ) : (
                <div className="w-full h-[320px] bg-gray-200 flex items-center justify-center rounded-lg">
                  <span className="text-gray-500">No Image Available</span>
                </div>
              )}
            </div>

            <div className="w-1/2 flex items-center px-10">
              <div>
                <blockquote
                  className="text-lg mb-4"
                  style={{ color: Colors.Primary_font }}
                >
                  {testimonial.quote}
                </blockquote>
                <cite
                  className="font-medium block"
                  style={{ color: Colors.Font_3 }}
                >
                  {testimonial.author}
                </cite>
                <span className="text-sm" style={{ color: Colors.Know }}>
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>

          {/* Content sections */}
          <div className="grid gap-12">
            {sections.map((section, index) => (
              <section key={index}>
                <h3
                  className="text-xl font-medium mb-4"
                  style={{ color: Colors.Font_3 }}
                >
                  {section.title}
                </h3>
                <p style={{ color: Colors.Font_3 }}>{section.content}</p>
              </section>
            ))}
          </div>

          {/* Video section */}
          <div className="mt-16">
            <h3
              className="text-xl font-medium mb-6"
              style={{ color: Colors.Font_3 }}
            >
              {videoSection.title}
            </h3>
            <div
              className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
              style={{ backgroundColor: Colors.Bg_color_2 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoSection.videoId}`}
                className="w-full h-[480px]"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <motion.button
              className="relative overflow-hidden mt-6 px-5 py-3 md:px-6 md:py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
              style={{
                background: isClicked
                  ? `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`
                  : Colors.Primary_font,
                color: Colors.Font_4,
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.95 }} // Shrink effect when clicked
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = Colors.Click;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isClicked
                  ? `linear-gradient(to right, ${Colors.Primary_font}, ${Colors.Click})`
                  : Colors.Primary_font;
              }}
              onClick={(e) => {
                setIsClicked(true);
                router.push("/contact");

                // Create ripple effect
                const ripple = document.createElement("span");
                ripple.classList.add("ripple");
                const rect = e.currentTarget.getBoundingClientRect();
                ripple.style.left = `${e.clientX - rect.left}px`;
                ripple.style.top = `${e.clientY - rect.top}px`;
                e.currentTarget.appendChild(ripple);

                setTimeout(() => {
                  ripple.remove();
                }, 600);
              }}
            >
              Request Demo
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStoryTemplate;
