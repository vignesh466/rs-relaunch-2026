import { Metadata } from "next";

interface MetadataParams {
  title?: string;
  description?: string;
  url?: string;
  imageUrl?: string;
  schemaType?: string;
  additionalSchema?: any[];
}

export function generatePageMetadata({
  title,
  description,
  url,
  imageUrl = "https://www.relific.io/logo.png",
  schemaType = "WebPage",
  additionalSchema = [],
}: MetadataParams): Metadata {
  const fullTitle = title
    ? `${title} | Relific`
    : "Relific | AI-Driven Impact Intelligence Platform";

  const defaultDescription =
    description ||
    "Relific is an AI-powered Impact Intelligence platform focused on transforming the social and non-profit sectors with digital operations, grant management, sustainability tracking, and impact reporting.";

  // Base organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Relific",
    url: "https://www.relific.io",
    logo: "https://www.relific.io/logo.png",
    description:
      "Relific is an AI-powered Impact Intelligence platform focused on transforming the social and non-profit sectors with digital operations, grant management, sustainability tracking, and impact reporting.",
    sameAs: [
      "https://twitter.com/relific",
      "https://www.linkedin.com/company/relific",
      "https://www.facebook.com/relific",
      "https://www.crunchbase.com/organization/relific",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 63614 66735",
      contactType: "customer service",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.relific.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Base page schema
  const pageSchema: any = {
    "@context": "https://schema.org",
    "@type": schemaType,
    url: url,
    name: title,
    description: defaultDescription,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "Relific",
      url: "https://www.relific.io",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 600,
      height: 60,
    },
  };

  // Add mainEntity for specific page types
  if (schemaType === "AboutPage") {
    pageSchema.mainEntity = {
      "@type": "AboutPage",
      name: "About Relific",
      url: "https://www.relific.io/aboutus",
      description:
        "Get to know Relific: our team, philosophy, mission in leveraging AI for social impact and innovation.",
    };
  }

  // Combine all schemas
  const allSchemas = [organizationSchema, pageSchema, ...additionalSchema];

  return {
    title: fullTitle,
    description: defaultDescription,
    robots: "index, follow",
    authors: [{ name: "Relific" }],
    ...(url && { alternates: { canonical: url } }),
    openGraph: {
      title: fullTitle,
      description: defaultDescription,
      url: url,
      siteName: "Relific",
      images: [
        {
          url: imageUrl,
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
      title: fullTitle,
      description: defaultDescription,
      images: [imageUrl],
    },
    other: {
      "application-ld+json": JSON.stringify(allSchemas),
    },
  };
}

// Pre-defined metadata for common pages
export const homePageMetadata = generatePageMetadata({
  title: undefined, // Uses default
  description:
    "Transform your social impact with Relific's AI-powered platform. Streamline operations, manage grants, track sustainability, and measure impact with precision.",
  url: "https://www.relific.io",
  schemaType: "WebPage",
});

export const aboutPageMetadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about Relific's mission to revolutionize social impact through AI technology. Meet our team and discover our commitment to empowering organizations.",
  url: "https://www.relific.io/aboutus",
  schemaType: "AboutPage",
});

export const blogsPageMetadata = generatePageMetadata({
  title: "Blog",
  description:
    "Insights, best practices, and thought leadership in social impact, grant management, sustainability, and AI innovation from the Relific team.",
  url: "https://www.relific.io/blogs",
  schemaType: "Blog",
});

export const contactPageMetadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Relific. Start your digital transformation journey today. Contact our team for demos, partnerships, and support.",
  url: "https://www.relific.io/contact",
  schemaType: "ContactPage",
});
