import React from "react";
import { Metadata } from "next";
import HeroBanner from "../src/components/NewHome/HeroBanner";
import ChatbotBubble from "../src/components/NewHome/ChatbotBubble";
import ScrollingLogos from "../src/components/NewHome/ScrollingLogos";
import Certifications from "../src/components/NewHome/Certifications";
import ProductsShowcase from "../src/components/NewHome/ProductsShowcase";
import ValuePropsSection from "../src/components/NewHome/ValuePropsSection";
import ThirtyDaysSection from "../src/components/NewHome/ThirtyDaysSection";
import ThreeWaysSection from "../src/components/NewHome/ThreeWaysSection";
import WhoIsItForSection from "../src/components/NewHome/WhoIsItForSection";
import RelificWaySection from "../src/components/NewHome/RelificWaySection";
import TrustedBySection from "../src/components/NewHome/TrustedBySection";

export const metadata: Metadata = {
  title: "Relific | AI for Impact Management",
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
        <HeroBanner />

        {/* Certifications */}
        <Certifications />

        {/* Products Showcase */}
        <ProductsShowcase />

        {/* Scrolling Logos */}
        <ScrollingLogos />

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
    </main>
  );
}
