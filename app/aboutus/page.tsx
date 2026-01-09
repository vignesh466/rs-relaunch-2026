import React from "react";
import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Relific | AI-Powered Social Impact Intelligence Platform",
  description:
    "Learn about Relific's mission to democratize impact intelligence through AI. Founded by experts in technology and social impact, we help organizations measure and amplify their social impact.",
  alternates: {
    canonical: "https://www.relific.io/aboutus",
  },
  openGraph: {
    title: "About Relific | AI-Powered Social Impact Intelligence Platform",
    description:
      "Learn about Relific's mission to democratize impact intelligence through AI. Founded by experts in technology and social impact, we help organizations measure and amplify their social impact.",
    url: "https://www.relific.io/aboutus",
    type: "website",
    images: ["https://relific.io/images/og-image.jpg"],
    siteName: "Relific",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Relific | AI-Powered Social Impact Intelligence Platform",
    description:
      "Learn about Relific's mission to democratize impact intelligence through AI. Founded by experts in technology and social impact, we help organizations measure and amplify their social impact.",
    images: ["https://relific.io/images/og-image.jpg"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Relific | AI-Powered Social Impact Intelligence Platform",
  url: "https://www.relific.io/aboutus",
  description:
    "Learn about Relific's mission to democratize impact intelligence through AI. Founded by experts in technology and social impact, we help organizations measure and amplify their social impact.",
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
        name: "About Us",
        item: "https://www.relific.io/aboutus",
      },
    ],
  },
  mainEntity: {
    "@type": "AboutPage",
    name: "About Relific",
    description: "Company information, mission, values, and team",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Relific",
  url: "https://www.relific.io",
  description:
    "AI-powered platform that democratizes impact intelligence, helping organizations measure, track, and amplify their social and environmental impact.",
  foundingDate: "2019",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "15-50",
  },
  industry: "Social Impact Technology",
  location: {
    "@type": "Place",
    name: "India",
  },
  mission:
    "To democratize impact intelligence through AI-powered solutions that help organizations measure and amplify their social impact.",
  values: [
    "Innovation in Social Impact",
    "Data-Driven Decision Making",
    "Accessibility and Inclusivity",
    "Transparency and Accountability",
  ],
  serviceArea: {
    "@type": "Place",
    name: "Global",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@relific.io",
    contactType: "customer service",
    areaServed: "Global",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Relific",
  url: "https://www.relific.io",
  description:
    "AI-powered social impact intelligence platform helping organizations measure and amplify their impact.",
  publisher: {
    "@type": "Organization",
    name: "Relific",
    url: "https://www.relific.io",
  },
};

export default function AboutUsPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <AboutUsClient />
    </>
  );
}
