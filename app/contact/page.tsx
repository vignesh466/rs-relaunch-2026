import React from "react";
import type { Metadata } from "next";
import Contact from "../../src/components/Contact Form/contact";

export const metadata: Metadata = {
  title: "Contact Relific - Get in Touch for AI-Powered Impact Solutions",
  description:
    "Contact Relific for AI-powered solutions across agriculture, education, healthcare, and sustainability. Reach out to our impact experts and start your transformation journey.",
  alternates: {
    canonical: "https://www.relific.io/contact",
  },
  openGraph: {
    title: "Contact Relific - Get in Touch for AI-Powered Impact Solutions",
    description:
      "Contact Relific for AI-powered solutions across agriculture, education, healthcare, and sustainability. Reach out to our impact experts and start your transformation journey.",
    url: "https://www.relific.io/contact",
    type: "website",
    images: ["https://relific.io/images/og-image.jpg"],
    siteName: "Relific",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Relific - Get in Touch for AI-Powered Impact Solutions",
    description:
      "Contact Relific for AI-powered solutions across agriculture, education, healthcare, and sustainability. Reach out to our impact experts and start your transformation journey.",
    images: ["https://relific.io/images/og-image.jpg"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Contact Relific - Get in Touch for AI-Powered Impact Solutions",
  url: "https://www.relific.io/contact",
  description:
    "Contact Relific for AI-powered solutions across agriculture, education, healthcare, and sustainability. Reach out to our impact experts and start your transformation journey.",
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
        name: "Contact",
        item: "https://www.relific.io/contact",
      },
    ],
  },
  mainEntity: {
    "@type": "ContactPage",
    name: "Contact Form",
    description: "Contact form to get in touch with Relific's impact experts",
  },
};

const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  contactType: "customer service",
  email: "info@relific.io",
  url: "https://www.relific.io/contact",
  areaServed: "Global",
  availableLanguage: ["English"],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Relific",
  url: "https://www.relific.io",
  email: "info@relific.io",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@relific.io",
    url: "https://www.relific.io/contact",
    areaServed: "Global",
    availableLanguage: ["English"],
  },
};

export default function ContactPage() {
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
          __html: JSON.stringify(contactPointSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Contact />
    </>
  );
}
