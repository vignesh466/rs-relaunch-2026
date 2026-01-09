import React from "react";
import type { Metadata } from "next";

// Import existing component
import DriveR from "../../src/components/Products/drive-r";

export const metadata: Metadata = {
  title: "Drive-R: AI-Powered Impact Intelligence & Analytics Platform",
  description:
    "Drive-R helps you manage and activate impact data—from grassroots collection to SDG-aligned reports, across health, education, climate, and CSR programmes.",
  alternates: {
    canonical: "https://www.relific.io/drive_r",
  },
  openGraph: {
    title: "Drive-R: AI-Powered Impact Intelligence & Analytics Platform",
    description:
      "Drive-R helps you manage and activate impact data—from grassroots collection to SDG-aligned reports, across health, education, climate, and CSR programmes.",
    url: "https://www.relific.io/drive_r",
    type: "website",
    images: ["https://relific.io/images/og-image.jpg"],
    siteName: "Relific",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive-R: AI-Powered Impact Intelligence & Analytics Platform",
    description:
      "Drive-R helps you manage and activate impact data—from grassroots collection to SDG-aligned reports, across health, education, climate, and CSR programmes.",
    images: ["https://relific.io/images/og-image.jpg"],
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Drive-R: The Impact Intelligence Engine",
  url: "https://www.relific.io/drive_r",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Drive-R helps you manage and activate impact data—from grassroots collection to SDG-aligned reports, across health, education, climate, and CSR programmes.",
  creator: {
    "@type": "Organization",
    name: "Relific",
    url: "https://relific.io",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Drive-R: The Impact Intelligence Engine",
  description:
    "Drive-R is an AI-powered SaaS platform designed to enable social impact organizations to collect, analyze, and report data seamlessly.",
  brand: {
    "@type": "Brand",
    name: "Relific",
  },
  category: "Social Impact Software",
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
      <DriveR />
    </>
  );
}
