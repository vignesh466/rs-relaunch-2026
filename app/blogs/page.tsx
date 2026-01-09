import { Metadata } from "next";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Relific Blogs | Insights on Social Impact, AI & Impact Intelligence",
  description:
    "Expert insights on AI-driven impact intelligence, sustainability, data analytics, and social innovation to help NGOs and enterprises measure what truly matters.",
  keywords: [
    "AI impact intelligence",
    "social innovation",
    "sustainability analytics",
    "NGO technology",
    "impact measurement",
    "data analytics",
    "social sector",
    "grant management",
    "sustainable development",
  ],
  openGraph: {
    title: "Relific Blog | AI, Impact Intelligence & Social Innovation",
    description:
      "Explore Relific's collection of blogs featuring insights on AI-powered impact intelligence, sustainability, social innovation, and data analytics for NGOs and enterprises.",
    url: "https://www.relific.io/blogs",
    siteName: "Relific",
    images: [
      {
        url: "https://www.relific.io/logo.png",
        width: 600,
        height: 60,
        alt: "Relific Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relific Blog | AI, Impact Intelligence & Social Innovation",
    description:
      "Expert insights on AI-driven impact intelligence, sustainability, data analytics, and social innovation to help NGOs and enterprises measure what truly matters.",
    images: ["https://www.relific.io/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.relific.io/blogs",
  },
};

export default function Blogs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: "https://www.relific.io/blogs",
            name: "Relific Blog | AI, Impact Intelligence & Social Innovation",
            description:
              "Explore Relific's collection of blogs featuring insights on AI-powered impact intelligence, sustainability, social innovation, and data analytics for NGOs and enterprises.",
            inLanguage: "en",
            isPartOf: {
              "@type": "WebSite",
              name: "Relific",
              url: "https://relific.io",
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://www.relific.io/logo.png",
              width: 600,
              height: 60,
            },
            mainEntity: {
              "@type": "Blog",
              name: "Relific Blog",
              url: "https://www.relific.io/blogs",
              description:
                "A collection of articles from Relific covering AI in the social sector, impact analytics, grant management, and sustainable innovation.",
              inLanguage: "en",
            },
          }),
        }}
      />
      <BlogsClient />
    </>
  );
}
