/**
 * ============================================================
 * CHATBOT KNOWLEDGE BASE
 * ============================================================
 *
 * This file contains ALL allowed knowledge for the website chatbot.
 *
 * HARD RULES:
 * - The chatbot may ONLY respond using information defined here.
 * - No reasoning beyond recombining these strings.
 * - No hallucination, no external facts.
 * - If a query cannot be answered using this file → redirect to demo.
 *
 * PRIMARY GOALS:
 * - Navigate users to the correct page
 * - Answer up to 2 scoped questions per session
 * - Push users to Book a Demo after limit or ambiguity
 */

// ============================================================
// TYPES
// ============================================================

export interface Product {
  name: string;
  tagline: string;
  description: string;
  primaryUse: string;
  link: string;
  keywords: string[];
}

export interface UseCase {
  id: string;
  title: string;
  content: string;
  relatedProducts: string[];
  keywords: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  relatedProducts: string[];
  keywords: string[];
}

// ============================================================
// PRODUCT INFORMATION (CANONICAL)
// ============================================================

export const PRODUCTS: Record<string, Product> = {
  "drive-r": {
    name: "Drive-R",
    tagline: "AI-powered analytics for messy, multi-source data",
    description:
      "Drive-R is an analytics and intelligence layer that connects data from CSV files, Google Sheets, MIS systems, and databases into a single analytical view. It uses AI to validate data, transform datasets, and let users ask questions in natural language without writing SQL.",
    primaryUse:
      "Dashboards, analytics, reporting, and decision-making from fragmented data sources.",
    link: "/drive_r",
    keywords: [
      "analytics",
      "dashboard",
      "data",
      "csv",
      "excel",
      "google sheets",
      "reporting",
      "visualization",
      "ai",
      "query",
      "insights",
      "metrics",
      "kpi",
      "consolidation",
    ],
  },

  "surve-r": {
    name: "Surve-R",
    tagline: "Mobile-first data collection for field teams",
    description:
      "Surve-R is a data collection platform designed for field operations. It enables teams to create structured forms, collect data on mobile devices, work offline, and sync data securely once connectivity is available.",
    primaryUse:
      "Collecting accurate, structured field data at scale with offline support.",
    link: "/surve_r",
    keywords: [
      "survey",
      "data collection",
      "forms",
      "offline",
      "field",
      "mobile",
      "questionnaire",
      "enumerator",
      "survey tool",
      "field data",
    ],
  },

  progran: {
    name: "ProGran",
    tagline: "Program and grant management without complexity",
    description:
      "ProGran is a program and grant management platform for CSR teams, foundations, and NGOs. It helps manage programs, track KPIs, monitor progress, and generate stakeholder-ready reports.",
    primaryUse:
      "Managing CSR programs, grants, partners, budgets, and outcomes.",
    link: "/progran",
    keywords: [
      "grant",
      "program",
      "programme",
      "csr",
      "ngo",
      "foundation",
      "management",
      "tracking",
      "monitoring",
      "kpi",
      "reporting",
    ],
  },
};

// ============================================================
// CORE USE CASES
// ============================================================

export const USE_CASES: UseCase[] = [
  {
    id: "csr-compliance",
    title: "CSR Reporting & Compliance",
    content:
      "CSR teams use **ProGran** to manage programs and partners, while **Drive-R** generates automated dashboards for spend tracking, compliance reporting, and board-level insights.",
    relatedProducts: ["progran", "drive-r"],
    keywords: [
      "csr",
      "compliance",
      "schedule vii",
      "reporting",
      "board",
      "utilization",
    ],
  },

  {
    id: "ngo-monitoring",
    title: "NGO Program Monitoring",
    content:
      "NGOs use **Surve-R** to collect data from the field and **Drive-R** to analyze program performance, beneficiary reach, and outcomes in real time.",
    relatedProducts: ["surve-r", "drive-r"],
    keywords: [
      "ngo",
      "nonprofit",
      "monitoring",
      "evaluation",
      "impact",
      "beneficiaries",
    ],
  },

  {
    id: "data-consolidation",
    title: "Multi-Source Data Consolidation",
    content:
      "**Drive-R** consolidates data from multiple CSVs, Google Sheets, and MIS systems into a single analytics layer, eliminating manual reporting and spreadsheet chaos.",
    relatedProducts: ["drive-r"],
    keywords: [
      "consolidation",
      "merge",
      "multiple sources",
      "integration",
      "csv",
      "sheets",
    ],
  },

  {
    id: "field-operations",
    title: "Large-Scale Field Operations",
    content:
      "**Surve-R** enables large field teams to collect high-quality data offline, enforce validations, and sync securely, ensuring consistent data across regions.",
    relatedProducts: ["surve-r"],
    keywords: [
      "field work",
      "offline",
      "enumerators",
      "surveyors",
      "data quality",
    ],
  },
];

// ============================================================
// SECTOR-SPECIFIC GUIDANCE
// ============================================================

export const SECTOR_PROMPTS = {
  agriculture: {
    response:
      "For agriculture programs, **Surve-R** supports farmer-level field data collection, while **Drive-R** helps analyze crop, yield, and program performance data.",
    products: ["surve-r", "drive-r"],
  },

  education: {
    response:
      "Education programs use **Surve-R** for student and school-level data collection, and **ProGran** to manage education-focused grants and initiatives.",
    products: ["surve-r", "progran"],
  },

  healthcare: {
    response:
      "Healthcare initiatives rely on **Surve-R** for patient and survey data, combined with **Drive-R** for analytics and outcome tracking.",
    products: ["surve-r", "drive-r"],
  },

  environment: {
    response:
      "Environmental programs use **Surve-R** for field monitoring and **Drive-R** for impact analysis, trend tracking, and reporting.",
    products: ["surve-r", "drive-r"],
  },
};

// ============================================================
// FAQ BANK (INTENT MATCHING)
// ============================================================

export const FAQS: FAQ[] = [
  {
    question: "Can I upload Excel or CSV files?",
    answer:
      "Yes. **Drive-R** supports data ingestion from CSV and Excel files and turns them into dashboards and analytics.",
    relatedProducts: ["drive-r"],
    keywords: ["excel", "csv", "upload", "import"],
  },

  {
    question: "Does this work offline?",
    answer:
      "Yes. **Surve-R** is designed for offline data collection and syncs automatically once connectivity is available.",
    relatedProducts: ["surve-r"],
    keywords: ["offline", "no internet", "remote"],
  },

  {
    question: "Is this suitable for CSR teams?",
    answer:
      "Yes. **ProGran** and **Drive-R** are built specifically to support CSR program management, compliance, and reporting.",
    relatedProducts: ["progran", "drive-r"],
    keywords: ["csr", "compliance", "corporate"],
  },

  {
    question: "Can I create dashboards?",
    answer:
      "**Drive-R** allows users to build dashboards and explore data without needing technical expertise.",
    relatedProducts: ["drive-r"],
    keywords: ["dashboard", "charts", "visualization"],
  },
];

// ============================================================
// NAVIGATION MAP (STRICT ALLOWLIST)
// ============================================================

export const NAVIGATION_LINKS = {
  home: "/",
  driveR: "/drive_r",
  surveR: "/surve_r",
  progran: "/progran",
  pricing: "/pricing",
  demo: "/book-demo",
};

// ============================================================
// GREETING & FALLBACK MESSAGES
// ============================================================

export const INITIAL_GREETING =
  "Hi! 👋 I can help you explore our products and guide you to the right page. You can ask about **Drive-R**, **Surve-R**, or **ProGran**.";

export const OUT_OF_SCOPE_MESSAGE =
  "I can help you better through a quick demo with our team.\n\n👉 [Book a Demo](/book-demo)";

export const LIMIT_REACHED_MESSAGE =
  "You've reached the question limit for this session. 🎯\n\nContinue the conversation with our team for personalised guidance.\n\n👉 [Book a Demo](/book-demo)";

// ============================================================
// CHATBOT CONFIGURATION
// ============================================================

export const CHATBOT_CONFIG = {
  maxQueriesPerSession: 5,
  sessionDurationMs: 24 * 60 * 60 * 1000, // 24 hours
  storageKeys: {
    queryCount: "chatbot_query_count",
    sessionStart: "chatbot_session_start",
  },
};

// ============================================================
// CHATBOT LOGIC (MATCHING & RESPONSE GENERATION)
// ============================================================

/**
 * Find a relevant product based on query keywords
 */
export function findRelevantProduct(query: string): Product | null {
  const lowerQuery = query.toLowerCase();

  for (const [key, product] of Object.entries(PRODUCTS)) {
    if (
      product.keywords.some((keyword) =>
        lowerQuery.includes(keyword.toLowerCase()),
      )
    ) {
      return product;
    }
  }

  return null;
}

/**
 * Find a relevant use case based on query keywords
 */
export function findRelevantUseCase(query: string): UseCase | null {
  const lowerQuery = query.toLowerCase();

  for (const useCase of USE_CASES) {
    if (
      useCase.keywords.some((keyword) =>
        lowerQuery.includes(keyword.toLowerCase()),
      )
    ) {
      return useCase;
    }
  }

  return null;
}

/**
 * Find a relevant FAQ based on query keywords
 */
export function findRelevantFAQ(query: string): FAQ | null {
  const lowerQuery = query.toLowerCase();

  for (const faq of FAQS) {
    if (
      faq.keywords.some((keyword) => lowerQuery.includes(keyword.toLowerCase()))
    ) {
      return faq;
    }
  }

  return null;
}

/**
 * Find sector-specific guidance
 */
export function findSectorGuidance(
  query: string,
): { response: string; products: string[] } | null {
  const lowerQuery = query.toLowerCase();

  for (const [sector, guidance] of Object.entries(SECTOR_PROMPTS)) {
    if (lowerQuery.includes(sector)) {
      return guidance;
    }
  }

  return null;
}

/**
 * Generate chatbot response based on user query
 */
export function generateResponse(userQuery: string): string {
  // Try product match first
  const product = findRelevantProduct(userQuery);
  if (product) {
    return `${product.description}\n\n[Learn more about ${product.name}](${product.link})`;
  }

  // Try FAQ match
  const faq = findRelevantFAQ(userQuery);
  if (faq) {
    return faq.answer;
  }

  // Try use case match
  const useCase = findRelevantUseCase(userQuery);
  if (useCase) {
    return useCase.content;
  }

  // Try sector guidance
  const sector = findSectorGuidance(userQuery);
  if (sector) {
    return sector.response;
  }

  // Out of scope - redirect to demo
  return OUT_OF_SCOPE_MESSAGE;
}

/**
 * Parse markdown-style content (links and bold text) into React elements
 */
export function parseMarkdownContent(
  content: string,
): (
  | string
  | { type: "link" | "bold"; key: string; text: string; url?: string }
)[] {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const boldRegex = /\*\*([^*]+)\*\*/g;

  const elements: (
    | string
    | { type: "link" | "bold"; key: string; text: string; url?: string }
  )[] = [];
  let lastIndex = 0;
  let keyCounter = 0;

  // First, handle links
  let match;
  const links: { index: number; length: number; text: string; url: string }[] =
    [];

  while ((match = linkRegex.exec(content)) !== null) {
    links.push({
      index: match.index,
      length: match[0].length,
      text: match[1],
      url: match[2],
    });
  }

  for (const link of links) {
    if (link.index > lastIndex) {
      // Process text before link for bold formatting
      const textBefore = content.substring(lastIndex, link.index);
      let boldLastIndex = 0;
      let boldMatch;
      boldRegex.lastIndex = 0;

      while ((boldMatch = boldRegex.exec(textBefore)) !== null) {
        if (boldMatch.index > boldLastIndex) {
          elements.push(textBefore.substring(boldLastIndex, boldMatch.index));
        }
        elements.push({
          type: "bold",
          key: `bold-${keyCounter++}`,
          text: boldMatch[1],
        });
        boldLastIndex = boldMatch.index + boldMatch[0].length;
      }

      if (boldLastIndex < textBefore.length) {
        elements.push(textBefore.substring(boldLastIndex));
      }
    }

    // Add link
    elements.push({
      type: "link",
      key: `link-${keyCounter++}`,
      text: link.text,
      url: link.url,
    });

    lastIndex = link.index + link.length;
  }

  // Process remaining text after all links
  if (lastIndex < content.length) {
    const remainingText = content.substring(lastIndex);
    let boldLastIndex = 0;
    let boldMatch;
    boldRegex.lastIndex = 0;

    while ((boldMatch = boldRegex.exec(remainingText)) !== null) {
      if (boldMatch.index > boldLastIndex) {
        elements.push(remainingText.substring(boldLastIndex, boldMatch.index));
      }
      elements.push({
        type: "bold",
        key: `bold-${keyCounter++}`,
        text: boldMatch[1],
      });
      boldLastIndex = boldMatch.index + boldMatch[0].length;
    }

    if (boldLastIndex < remainingText.length) {
      elements.push(remainingText.substring(boldLastIndex));
    }
  }

  return elements.length > 0 ? elements : [content];
}
