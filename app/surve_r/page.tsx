import React from "react";
import type { Metadata } from "next";

// Import new components
import Banner from "../../src/components/NewProducts/Banner";
import VerifyImpact from "../../src/components/NewProducts/VerifyImpact";
import Evidence from "../../src/components/NewProducts/Evidence";
import Visibility from "../../src/components/NewProducts/Visibility";
import CTA from "../../src/components/NewProducts/CTA";

export const metadata: Metadata = {
  title: "Surve-R: AI-Powered Mobile Data Collection & Impact Reporting",
  description:
    "Surve-R is a mobile-first, AI-powered data collection tool for fast, reliable field insights, offline forms, GPS, photos, e-signatures, and instant approvals.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.relific.io/surve_r",
  },
  openGraph: {
    title: "Surve-R: AI-Powered Mobile Data Collection & Impact Reporting",
    description:
      "Surve-R is a mobile-first, AI-powered data collection tool for fast, reliable field insights, offline forms, GPS, photos, e-signatures, and instant approvals.",
    url: "https://www.relific.io/surve_r",
    type: "website",
    images: [
      {
        url: "https://relific.io/images/og-image.jpg",
        alt: "Surve-R Mobile Data Collection Platform",
      },
    ],
    siteName: "Relific",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surve-R: AI-Powered Mobile Data Collection & Impact Reporting",
    description:
      "Surve-R is a mobile-first, AI-powered data collection tool for fast, reliable field insights, offline forms, GPS, photos, e-signatures, and instant approvals.",
    images: ["https://relific.io/images/og-image.jpg"],
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Surve-R: AI-Powered Mobile Data Collection & Impact Reporting",
  url: "https://www.relific.io/surve_r",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Surve-R is a mobile-first, AI-powered data collection tool for fast, reliable field insights, offline forms, GPS, photos, e-signatures, and instant approvals.",
  creator: {
    "@type": "Organization",
    name: "Relific",
    url: "https://www.relific.io",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Surve-R: AI-enabled Data Collection",
  description:
    "Surve-R is a mobile-first, AI-powered data collection tool for fast, reliable field insights, offline forms, GPS, photos, e-signatures, and instant approvals.",
  brand: {
    "@type": "Brand",
    name: "Relific",
  },
  category: "Data Collection, SaaS Platform",
  image: "https://www.relific.io/logo.png",
  url: "https://www.relific.io/surve_r",
  offers: {
    "@type": "Offer",
    url: "https://www.relific.io/surve_r",
  },
};

const SurveRPage = () => {
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
      <Banner />
      <VerifyImpact />
      <Evidence />
      <Visibility />
      <CTA />
    </>
  );
};

export default SurveRPage;
