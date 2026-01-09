import React from "react";
import type { Metadata } from "next";
import WhoWeServeClient from "./WhoWeServeClient";

export const metadata: Metadata = {
  title: "Who We Serve | Organizations Using Relific's AI Impact Solutions",
  description:
    "Discover the diverse organizations using Relific's AI-powered impact solutions - NGOs, foundations, corporates, and social enterprises across agriculture, education, healthcare, and sustainability.",
  alternates: {
    canonical: "https://www.relific.io/whoweserve",
  },
  openGraph: {
    title: "Who We Serve | Organizations Using Relific's AI Impact Solutions",
    description:
      "Discover the diverse organizations using Relific's AI-powered impact solutions - NGOs, foundations, corporates, and social enterprises across agriculture, education, healthcare, and sustainability.",
    url: "https://www.relific.io/whoweserve",
    type: "website",
    images: ["https://relific.io/images/og-image.jpg"],
    siteName: "Relific",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who We Serve | Organizations Using Relific's AI Impact Solutions",
    description:
      "Discover the diverse organizations using Relific's AI-powered impact solutions - NGOs, foundations, corporates, and social enterprises across agriculture, education, healthcare, and sustainability.",
    images: ["https://relific.io/images/og-image.jpg"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Who We Serve | Organizations Using Relific's AI Impact Solutions",
  url: "https://www.relific.io/whoweserve",
  description:
    "Discover the diverse organizations using Relific's AI-powered impact solutions - NGOs, foundations, corporates, and social enterprises across agriculture, education, healthcare, and sustainability.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.relific.io",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Who We Serve",
        item: "https://www.relific.io/whoweserve",
      },
    ],
  },
  mainEntity: {
    "@type": "CollectionPage",
    name: "Organizations We Serve",
    description: "Overview of organizations using Relific's impact solutions",
    mainEntity: [
      {
        "@type": "Organization",
        name: "NGOs and Non-Profits",
        description:
          "Non-governmental organizations using AI for social impact",
      },
      {
        "@type": "Organization",
        name: "Foundations and Philanthropies",
        description:
          "Grant-making organizations leveraging impact intelligence",
      },
      {
        "@type": "Organization",
        name: "Corporate CSR Teams",
        description: "Companies implementing sustainable business practices",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Relific",
  url: "https://www.relific.io",
  description:
    "AI-powered impact intelligence platform serving NGOs, foundations, corporates, and social enterprises worldwide.",
  serviceArea: {
    "@type": "Place",
    name: "Global",
  },
  audience: [
    {
      "@type": "Audience",
      name: "NGOs and Non-Profits",
      description: "Organizations focused on social and environmental impact",
    },
    {
      "@type": "Audience",
      name: "Foundations",
      description: "Grant-making and philanthropic organizations",
    },
    {
      "@type": "Audience",
      name: "Corporate CSR",
      description: "Corporate social responsibility and sustainability teams",
    },
  ],
};

export default function WhoWeServePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <WhoWeServeClient />
    </>
  );
}
