import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const baseMetadata: Metadata = {
  title: "Relific | Drive-R · Surve-R · ProGran — AI for Impact Ops",
  description:
    "Relific builds practical AI tools for the social sector: Drive-R for data integration & reporting, Surve-R for AI-assisted form collection, and ProGran for programme & grants operations. Unify data, collect in the field, and report impact with confidence.",
  keywords:
    "csr examples, explain corporate social responsibility, csr program, csr reporting, sustainability reporting software, healthcare technology solutions, csr management, grant tracking software, CSRD compliance, csr activities of indian companies, AI for nonprofits, ESG data analytics, social impact reporting, fund management software solutions, social performance management, social impact monitoring, AI reporting tool, grant tracking software for nonprofits, social impact solutions, csr management software, impact investing platform, csr program meaning, csr impact assessment, csr monitoring",
  robots: "index, follow",
  // Do not hardcode canonical here — generate per-page canonical dynamically
  openGraph: {
    type: "website",
    url: "https://relific.io",
    title: "Relific | Drive-R · Surve-R · ProGran — AI for Impact Ops",
    description:
      "Drive-R unifies your impact data, Surve-R collects it on the ground, and ProGran runs your programmes & grants. One stack for real-world outcomes.",
    images: [
      {
        url: "https://relific.io/images/og-image.jpg",
        alt: "Relific AI for Impact Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@relific",
    title: "Relific | Drive-R · Surve-R · ProGran — AI for Impact Ops",
    description:
      "AI tools for the social sector: Drive-R (data integration), Surve-R (forms & field data), ProGran (programme & grants).",
    images: ["https://relific.io/images/og-image.jpg"],
  },
  icons: {
    icon: "/logo_small_new.png",
  },
  other: {
    // Organization Schema
    "script:organization": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Relific",
      url: "https://relific.io",
      logo: "https://relific.io/logo_small_new.svg",
      description:
        "Relific builds AI-powered software for the social sector: Drive-R for data integration, Surve-R for AI-assisted form collection, and ProGran for programme & grants operations.",
      sameAs: [
        "https://twitter.com/relific",
        "https://www.linkedin.com/company/relific",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "contact@relific.io",
        contactType: "customer service",
        areaServed: "IN",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://relific.io/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: baseMetadata.other?.["script:organization"] || "",
          }}
        />
        {/* Additional product schemas can be added here */}
      </head>
      <body className={poppins.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

// Generate per-request metadata so canonical reflects the current page URL
// This serves as fallback metadata that individual pages can override
export async function generateMetadata({
  params,
  searchParams,
}: {
  params?: any;
  searchParams?: any;
}): Promise<Metadata> {
  // Build the canonical URL from the current request
  const baseUrl = "https://relific.io";

  // Default fallback metadata (pages can override specific properties)
  return {
    ...baseMetadata,
    alternates: {
      canonical: baseUrl, // Default to homepage, pages should override this
    },
    // Pages can extend this by exporting their own generateMetadata
    // that calls this function and merges additional metadata
  };
}
