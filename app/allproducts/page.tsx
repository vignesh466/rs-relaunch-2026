import React from "react";
import type { Metadata } from "next";

// Import existing component
import OurProducts from "../../src/components/Home/OurProducts";

export const metadata: Metadata = {
  title: "Relific AI Solutions | Transforming Social Impact Across Sectors",
  description:
    "Relific AI platforms for social impact: agriculture, education, healthcare, grants, sustainability & livelihoods. Measure, track & maximize impact efficiently.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.relific.io/allproducts",
  },
  openGraph: {
    title: "Relific AI Solutions | Transforming Social Impact Across Sectors",
    description:
      "Relific AI platforms for social impact: agriculture, education, healthcare, grants, sustainability & livelihoods. Measure, track & maximize impact efficiently.",
    url: "https://www.relific.io/allproducts",
    type: "website",
    images: [
      {
        url: "https://relific.io/images/og-image.jpg",
        alt: "Relific AI Solutions for Social Impact",
      },
    ],
    siteName: "Relific",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relific AI Solutions | Transforming Social Impact Across Sectors",
    description:
      "Relific AI platforms for social impact: agriculture, education, healthcare, grants, sustainability & livelihoods. Measure, track & maximize impact efficiently.",
    images: ["https://relific.io/images/og-image.jpg"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Relific AI Solutions | Social Impact Platforms",
  url: "https://www.relific.io/allproducts",
  description:
    "Relific AI platforms for social impact: surve_r, progran, and drive_r. Measure, track & maximize outcomes efficiently across social initiatives.",
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
        name: "All Products",
        item: "https://www.relific.io/allproducts",
      },
    ],
  },
  mainEntity: [
    {
      "@type": "SoftwareApplication",
      name: "Drive-R",
      applicationCategory: "BusinessApplication",
      url: "https://www.relific.io/drive_r",
    },
    {
      "@type": "SoftwareApplication",
      name: "Surve-R",
      applicationCategory: "BusinessApplication",
      url: "https://www.relific.io/surve_r",
    },
    {
      "@type": "SoftwareApplication",
      name: "ProGran",
      applicationCategory: "BusinessApplication",
      url: "https://www.relific.io/progran",
    },
  ],
};

const AllProductsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <OurProducts />
    </>
  );
};

export default AllProductsPage;