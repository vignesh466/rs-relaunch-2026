"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Colors from "../../constants/Color";
import { segments, productLinks } from "../../constants/Content";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const KnowMoreButton = ({ path }) => {
  const router = useRouter();
  return (
    <Link
      href={path}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className="px-4 md:px-6 py-2 border rounded-lg font-normal shadow-lg flex items-center text-sm md:text-base 
             transition-all duration-200 ease-in-out 
             hover:scale-105 active:scale-95 active:brightness-90 
             focus:outline-none focus:ring focus:ring-opacity-50"
      style={{
        backgroundColor:
          window.innerWidth < 768 ? Colors.More_bg : Colors.Font_4,
        borderColor:
          window.innerWidth < 768 ? Colors.Primary_font : Colors.Know,
        color: window.innerWidth < 768 ? Colors.Primary_font : Colors.Know,
      }}
      onMouseEnter={(e) => {
        if (window.innerWidth >= 768) {
          e.target.style.backgroundColor = Colors.More_bg;
          e.target.style.borderColor = Colors.Primary_font;
          e.target.style.color = Colors.Primary_font;
        }
      }}
      onMouseLeave={(e) => {
        if (window.innerWidth >= 768) {
          e.target.style.backgroundColor = Colors.Font_4;
          e.target.style.borderColor = Colors.Know;
          e.target.style.color = Colors.Know;
        }
      }}
    >
      Know more <ArrowRight size={16} className="ml-2" />
    </Link>
  );
};

const OurProducts = () => {
  const isMobile = useMemo(
    () => window.matchMedia("(max-width: 640px)").matches,
    []
  );

  return (
    <div className="w-full">
      {/* Original Products Section with AI-Powered Intelligence Title */}
      <div
        className="w-full py-8 md:py-16 px-4 md:px-20"
        style={{ backgroundColor: Colors.Bg_color_3 }}
      >
        <div className="md:ml-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-16"
            style={{ color: Colors.Primary_font }}
          >
            AI-Powered Intelligence
          </h2>

          {segments?.length > 0 ? (
            segments.map((segment, index) => {
              const isEven = index % 2 === 0;
              const product = productLinks.find(
                (p) => p.drop === segment.d_title
              );
              const path = product?.path || "/comingsoon";

              const Container = isMobile ? "div" : motion.div;
              const ContentWrapper = isMobile ? "div" : motion.div;

              return (
                <Container
                  key={segment.d_title}
                  className={`flex flex-col md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-4 mb-8 md:mb-16`}
                  {...(!isMobile && {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: true, amount: 0.2 },
                    variants: itemVariants,
                  })}
                >
                  <ContentWrapper
                    className="w-full md:w-[544px] h-[300px] md:h-[400px] flex flex-col justify-center items-center relative overflow-hidden rounded-lg bg-transparent shadow-none"
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    }}
                    {...(!isMobile && {
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: true, amount: 0.2 },
                      variants: {
                        hidden: {
                          backgroundColor: "rgba(255,255,255,0)",
                          boxShadow: "none",
                        },
                        visible: {
                          backgroundColor: "rgba(255,255,255,0)",
                          boxShadow: "none",
                          transition: { duration: 0.3 },
                        },
                      },
                    })}
                  >
                    <Image
                      src={segment.image}
                      alt={segment.d_title}
                      width={400}
                      height={400}
                      className="absolute -mt-5 w-[108%] h-[108%] object-contain p-8 top-4"
                    />
                  </ContentWrapper>

                  <ContentWrapper className="flex flex-col items-start flex-1 px-4 ml-10 md:px-0">
                    <h2
                      className="text-2xl md:text-[30px] font-semibold mb-3 md:mb-4"
                      style={{ color: Colors.Primary_font }}
                    >
                      {segment.d_title}
                    </h2>
                    <div
                      className="text-sm md:text-md mb-4 md:mb-6 leading-relaxed"
                      style={{ color: Colors.Font_3 }}
                    >
                      {segment.description.split("\n").map((line, index) => {
                        const trimmedLine = line.trim();
                        if (!trimmedLine) return null;

                        // Check if it's a bullet point
                        if (trimmedLine.startsWith("•")) {
                          return (
                            <div key={index} className="flex items-start mb-1">
                              <span className="text-blue-500 mr-2 mt-1 text-xs">
                                •
                              </span>
                              <span className="flex-1">
                                {trimmedLine.substring(1).trim()}
                              </span>
                            </div>
                          );
                        }

                        // Check if it's a main heading (first non-empty line)
                        const isMainHeading =
                          index ===
                          segment.description
                            .split("\n")
                            .findIndex((l) => l.trim());
                        if (isMainHeading && trimmedLine.length > 0) {
                          return (
                            <h3
                              key={index}
                              className="font-bold text-lg mb-2"
                              style={{ color: Colors.Primary_font }}
                            >
                              {trimmedLine}
                            </h3>
                          );
                        }

                        // Regular paragraph text
                        if (trimmedLine.length > 0) {
                          return (
                            <p key={index} className="mb-2">
                              {trimmedLine}
                            </p>
                          );
                        }

                        return null;
                      })}
                    </div>
                    <KnowMoreButton path={path} />
                  </ContentWrapper>
                </Container>
              );
            })
          ) : (
            <div className="text-center text-red-500">
              No segments to display. Please check your Content.jsx file.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
