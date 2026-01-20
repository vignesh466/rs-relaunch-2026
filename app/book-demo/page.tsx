import React from "react";
import type { Metadata } from "next";
import StartTrial from "../../src/components/Contact Form/StartTrial";

export const metadata: Metadata = {
  title: "Book a Demo - See Relific's AI Impact Platform in Action",
  description:
    "Schedule a personalized demo of Relific's AI-powered platform. See how we help measure and amplify social impact across agriculture, education, healthcare, and sustainability.",
  alternates: {
    canonical: "https://www.relific.io/book-demo",
  },
  openGraph: {
    title: "Book a Demo - See Relific's AI Impact Platform in Action",
    description:
      "Schedule a personalized demo of Relific's AI-powered platform. See how we help measure and amplify social impact across agriculture, education, healthcare, and sustainability.",
    url: "https://www.relific.io/book-demo",
    type: "website",
    images: ["https://relific.io/images/og-image.jpg"],
    siteName: "Relific",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Demo - See Relific's AI Impact Platform in Action",
    description:
      "Schedule a personalized demo of Relific's AI-powered platform. See how we help measure and amplify social impact across agriculture, education, healthcare, and sustainability.",
    images: ["https://relific.io/images/og-image.jpg"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Book a Demo - See Relific's AI Impact Platform in Action",
  url: "https://www.relific.io/book-demo",
  description:
    "Schedule a personalized demo of Relific's AI-powered platform. See how we help measure and amplify social impact across agriculture, education, healthcare, and sustainability.",
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
        name: "Book Demo",
        item: "https://www.relific.io/book-demo",
      },
    ],
  },
  mainEntity: {
    "@type": "WebPageElement",
    name: "Demo Request Form",
    description:
      "Request form for scheduling a personalized demo of Relific's AI-powered impact platform",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Relific",
  url: "https://www.relific.io",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.relific.io/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function StartTrialPage() {
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
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <StartTrial />
    </>
  );
}
