import React from "react";
import type { Metadata } from "next";

// Import existing component
import ProGran from "../../src/components/Products/progran";

export const metadata: Metadata = {
  title: "ProGran: AI-Powered Programme Monitoring & Evaluation Platform",
  description:
    "Monitor programmes with precision. ProGran connects your Theory of Change to real-world data for KPI tracking, predictive insights, and reporting.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.relific.io/progran",
  },
  openGraph: {
    title: "ProGran: AI-Powered Programme Monitoring & Evaluation Platform",
    description:
      "Monitor programmes with precision. ProGran connects your Theory of Change to real-world data for KPI tracking, predictive insights, and reporting.",
    url: "https://www.relific.io/progran",
    type: "website",
    images: [
      {
        url: "https://relific.io/images/og-image.jpg",
        alt: "ProGran Programme Monitoring Platform",
      },
    ],
    siteName: "Relific",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProGran: AI-Powered Programme Monitoring & Evaluation Platform",
    description:
      "Monitor programmes with precision. ProGran connects your Theory of Change to real-world data for KPI tracking, predictive insights, and reporting.",
    images: ["https://relific.io/images/og-image.jpg"],
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ProGran: AI-Powered Programme Monitoring & Evaluation Platform",
  url: "https://www.relific.io/progran",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Monitor programmes with precision. ProGran connects your Theory of Change to real-world data for KPI tracking, predictive insights, and reporting.",
  creator: {
    "@type": "Organization",
    name: "Relific",
    url: "https://www.relific.io",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "ProGran: Programme Analytics Platform",
  description:
    "Monitor programmes with precision. ProGran connects your Theory of Change to real-world data for KPI tracking, predictive insights, and reporting.",
  brand: {
    "@type": "Brand",
    name: "Relific",
  },
  category: "Programme Analytics, SaaS Platform",
  image: "https://www.relific.io/logo.png",
  url: "https://www.relific.io/progran",
  offers: {
    "@type": "Offer",
    url: "https://www.relific.io/progran",
  },
};

const ProGranPage = () => {
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
      <ProGran />
    </>
  );
};

export default ProGranPage;