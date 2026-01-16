import React from "react";
import { Metadata } from "next";
import ChatbotBubble from "../src/components/NewHome/ChatbotBubble";
import ScrollingLogos from "../src/components/NewHome/ScrollingLogos";
import ProductsShowcase from "../src/components/NewHome/ProductsShowcase";
import ValuePropsSection from "../src/components/NewHome/ValuePropsSection";
import ThirtyDaysSection from "../src/components/NewHome/ThirtyDaysSection";
import ThreeWaysSection from "../src/components/NewHome/ThreeWaysSection";
import WhoIsItForSection from "../src/components/NewHome/WhoIsItForSection";
import RelificWaySection from "../src/components/NewHome/RelificWaySection";
import TrustedBySection from "../src/components/NewHome/TrustedBySection";

export const metadata: Metadata = {
  title: "Relific | Drive-R · Surve-R · ProGran — AI for Impact Ops",
  description:
    "Relific builds practical AI tools for the social sector: Drive-R for data integration & reporting, Surve-R for AI-assisted form collection, and ProGran for programme & grants operations. Unify data, collect in the field, and report impact with confidence.",
  alternates: {
    canonical: "https://relific.io",
  },
  openGraph: {
    type: "website",
    url: "https://relific.io",
    title: "Relific | Drive-R · Surve-R · ProGran — AI for Impact Ops",
    description:
      "Drive-R unifies your impact data, Surve-R collects it on the ground, and ProGran runs your programmes & grants. One stack for real-world outcomes.",
    images: [
      {
        url: "https://relific.io/images/og-image.jpg",
        alt: "Relific AI for Impact Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@relific",
    title: "Relific | Drive-R · Surve-R · ProGran — AI for Impact Ops",
    description:
      "AI tools for the social sector: Drive-R (data integration), Surve-R (forms & field data), ProGran (programme & grants).",
    images: ["https://relific.io/images/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="pt-10">
        {/* Hero Banner Section */}
        <section className="relative overflow-hidden bg-white pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[640px_1fr] gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-10 sm:space-y-12">
                {/* Heading container aligned with top of image */}
                <div>
                  <h1
                    className="text-[clamp(32px,3.5vw,60px)] sm:text-[clamp(34px,3.5vw,60px)] leading-[1.05] font-bold"
                    style={{ color: "#2D1B69", letterSpacing: "-0.015em" }}
                  >
                    The most intelligent
                    <br />
                    impact management
                    <br />
                    platform. Period.
                  </h1>
                </div>

                {/* Description container aligned with bottom of image */}
                <div className="space-y-6 sm:space-y-8 max-w-xl">
                  <p
                    className="text-[clamp(15px,1.1vw,18px)] leading-[1.65]"
                    style={{ color: "#4B5563" }}
                  >
                    AI powered Grant and Program management, Data Collection and
                    impact analytics.
                  </p>

                  {/* Email input container - 408x44 */}
                  <div
                    className="w-full sm:w-auto inline-flex flex-col sm:flex-row items-stretch sm:items-center border-2 rounded-xl overflow-hidden max-w-[408px] bg-white"
                    style={{ borderColor: "#5563ff" }}
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 sm:py-0 text-[13px] sm:text-[14px] focus:outline-none placeholder:text-slate-400 bg-white min-w-0 sm:h-[44px]"
                    />
                    <button
                      className="text-white text-[13px] sm:text-[14px] font-semibold transition-colors whitespace-nowrap hover:opacity-90 rounded-lg sm:rounded-xl m-1 py-2 sm:py-0 sm:w-[184px] sm:h-[36px]"
                      style={{ backgroundColor: "#5563ff" }}
                    >
                      Get started for free
                    </button>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end ">
                <img
                  src="/assets/new home page assets/banner.svg"
                  alt="Relific Platform Dashboard"
                  className="w-full max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Logos */}
        <ScrollingLogos />

        {/* Products Showcase */}
        <ProductsShowcase />

        {/* Value Props and AI-R Section */}
        <ValuePropsSection />

        {/* 30 Days Achievement Section */}
        <ThirtyDaysSection />

        {/* Three Ways Section */}
        <ThreeWaysSection />

        {/* Who is it for? */}
        <WhoIsItForSection />

        {/* The Relific Way */}
        <RelificWaySection />

        {/* Trusted by Section */}
        <TrustedBySection />
      </div>
      <ChatbotBubble />
    </main>
  );
}
