import React from "react";
import type { Metadata } from "next";
import StartTrial from "../../src/components/Contact Form/StartTrial";

export const metadata: Metadata = {
  title: "Start Your Free Trial with Relific's AI Impact Platform",
  description:
    "Experience Relific's AI-powered platform. Start a free trial to measure and amplify social impact across agriculture, education, healthcare, and sustainability.",
  alternates: {
    canonical: "https://www.relific.io/start-trial",
  },
  openGraph: {
    title: "Start Your Free Trial with Relific's AI Impact Platform",
    description:
      "Experience Relific's AI-powered platform. Start a free trial to measure and amplify social impact across agriculture, education, healthcare, and sustainability.",
    url: "https://www.relific.io/start-trial",
    type: "website",
    images: ["https://relific.io/images/og-image.jpg"],
    siteName: "Relific",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Free Trial with Relific's AI Impact Platform",
    description:
      "Experience Relific's AI-powered platform. Start a free trial to measure and amplify social impact across agriculture, education, healthcare, and sustainability.",
    images: ["https://relific.io/images/og-image.jpg"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Start Your Free Trial with Relific's AI Impact Platform",
  url: "https://www.relific.io/start-trial",
  description:
    "Experience Relific's AI-powered platform. Start a free trial to measure and amplify social impact across agriculture, education, healthcare, and sustainability.",
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
        name: "Start Trial",
        item: "https://www.relific.io/start-trial",
      },
    ],
  },
  mainEntity: {
    "@type": "WebPageElement",
    name: "Free Trial Registration",
    description:
      "Sign up form for Relific's AI-powered impact platform free trial",
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
