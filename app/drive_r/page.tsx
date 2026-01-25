import React from "react";
import type { Metadata } from "next";

// Import new components
import DriveRBanner from "../../src/components/NewProducts/Drive-R/DriveRBanner";
import DriveRVerifyImpact from "../../src/components/NewProducts/Drive-R/DriveRVerifyImpact";
import DriveREvidence from "../../src/components/NewProducts/Drive-R/DriveREvidence";
import DriveRVisibility from "../../src/components/NewProducts/Drive-R/DriveRVisibility";
import DriveRCTA from "../../src/components/NewProducts/Drive-R/DriveRCTA";

export const metadata: Metadata = {
  title: "Drive-R: AI-Powered Data Intelligence & Analytics Platform",
  description:
    "Turn fragmented data into decision-ready insights. Drive-R helps you cleanse, unify, and analyze impact data with AI-powered tools for every stakeholder.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.relific.io/drive_r",
  },
  openGraph: {
    title: "Drive-R: AI-Powered Data Intelligence & Analytics Platform",
    description:
      "Turn fragmented data into decision-ready insights. Drive-R helps you cleanse, unify, and analyze impact data with AI-powered tools for every stakeholder.",
    url: "https://www.relific.io/drive_r",
    type: "website",
    images: [
      {
        url: "https://relific.io/images/og-image.jpg",
        alt: "Drive-R Data Intelligence Platform",
      },
    ],
    siteName: "Relific",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive-R: AI-Powered Data Intelligence & Analytics Platform",
    description:
      "Turn fragmented data into decision-ready insights. Drive-R helps you cleanse, unify, and analyze impact data with AI-powered tools for every stakeholder.",
    images: ["https://relific.io/images/og-image.jpg"],
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Drive-R: AI-Powered Data Intelligence & Analytics Platform",
  url: "https://www.relific.io/drive_r",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Turn fragmented data into decision-ready insights. Drive-R helps you cleanse, unify, and analyze impact data with AI-powered tools for every stakeholder.",
  creator: {
    "@type": "Organization",
    name: "Relific",
    url: "https://www.relific.io",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Drive-R: Data Intelligence Platform",
  description:
    "Turn fragmented data into decision-ready insights. Drive-R helps you cleanse, unify, and analyze impact data with AI-powered tools for every stakeholder.",
  brand: {
    "@type": "Brand",
    name: "Relific",
  },
  category: "Data Analytics, SaaS Platform",
  image: "https://www.relific.io/logo.png",
  url: "https://www.relific.io/drive_r",
  offers: {
    "@type": "Offer",
    url: "https://www.relific.io/drive_r",
  },
};

export default function DriveRPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <div className="pt-10">
        <DriveRBanner />
      </div>
      <DriveRVerifyImpact />
      <DriveREvidence />
      <DriveRVisibility />
      <DriveRCTA />
    </>
  );
}
