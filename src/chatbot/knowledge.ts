/**
 * ============================================================
 * RELIFIC CHATBOT KNOWLEDGE BASE
 * ============================================================
 *
 * This file contains ALL allowed knowledge for the Relific website chatbot.
 *
 * HARD RULES:
 * - The chatbot may ONLY respond using information defined here.
 * - No reasoning beyond recombining these strings.
 * - No hallucination, no external facts.
 * - If a query cannot be answered using this file → redirect to demo with apology.
 *
 * PRIMARY GOALS:
 * - Navigate users to the correct page
 * - Answer scoped questions about products and services
 * - Push users to Book a Demo for complex queries
 *
 * TARGET AUDIENCE:
 * - CSR (Corporate Social Responsibility) teams
 * - NGOs and Non-profits
 * - Programme managers, field coordinators, grant managers
 * - Impact officers and M&E specialists
 */

// ============================================================
// TYPES
// ============================================================

export interface ProductFeature {
  name: string;
  description: string;
  aiRIntegration?: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  targetUsers: string[];
  features: ProductFeature[];
  useCases: {
    persona: string;
    scenarios: string[];
  }[];
  aiRCapabilities: string[];
  link: string;
  keywords: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  relatedProducts?: string[];
  keywords: string[];
}

export interface UseCase {
  id: string;
  title: string;
  content: string;
  relatedProducts: string[];
  keywords: string[];
}

export interface KnowledgeBase {
  company: {
    name: string;
    tagline: string;
    mission: string;
    description: string;
    targetAudience: string[];
    sectors: string[];
  };
  products: Product[];
  aiR: {
    name: string;
    description: string;
    capabilities: string[];
    integration: Record<string, string[]>;
  };
  faqs: FAQ[];
  useCases: UseCase[];
  glossary: Record<string, string>;
}

// ============================================================
// MAIN KNOWLEDGE BASE
// ============================================================

export const relificKnowledge: KnowledgeBase = {
  company: {
    name: "Relific",
    tagline: "AI for Impact Ops",
    mission:
      "Empower NGOs and CSR teams to unify data, collect it on the ground, and report impact with confidence.",
    description:
      "Relific builds practical AI-powered SaaS tools for the social sector. Our integrated platform—Drive-R, Surve-R, and ProGran—forms one unified stack for real-world impact operations.",
    targetAudience: [
      "NGOs and Non-profits",
      "Corporate Social Responsibility (CSR) teams",
      "Social enterprises",
      "Development organizations",
      "Foundations and grantmakers",
      "Government social programmes",
    ],
    sectors: [
      "Agriculture",
      "Healthcare",
      "Education",
      "Climate Action",
      "Livelihoods",
      "Water & Sanitation",
      "Financial Inclusion",
      "Gender Equality",
      "Any social impact sector",
    ],
  },

  products: [
    {
      id: "progran",
      name: "ProGran",
      tagline: "Programme & Grants Operations",
      description:
        "End-to-end programme and grants lifecycle management. From grant applications to disbursements, milestones to compliance—ProGran keeps your operations on track.",
      targetUsers: [
        "Programme Managers",
        "Grant Officers",
        "Finance Teams",
        "Compliance Officers",
        "Executive Leadership",
      ],
      features: [
        {
          name: "Grant Lifecycle Management",
          description:
            "Track grants from application intake through approval, disbursement, monitoring, and closure.",
          aiRIntegration: "AI-powered proposal analysis and scoring assistance",
        },
        {
          name: "Programme Planning",
          description:
            "Create programme structures with activities, milestones, deliverables, and success indicators.",
          aiRIntegration: "Smart milestone suggestions based on programme type",
        },
        {
          name: "Budget Management",
          description:
            "Allocate budgets, track expenditures, and manage fund disbursements with full audit trails.",
          aiRIntegration:
            "Intelligent budget recommendations and variance alerts",
        },
        {
          name: "Compliance Tracking",
          description:
            "Maintain compliance with donor requirements, regulations, and internal policies.",
          aiRIntegration: "Automated compliance checking and risk flagging",
        },
        {
          name: "Workflow Automation",
          description:
            "Automate approvals, notifications, and routine tasks to reduce manual work.",
          aiRIntegration: "AI-driven workflow optimization suggestions",
        },
        {
          name: "Portfolio Dashboard",
          description:
            "Visualize all programmes and grants in one unified dashboard with key metrics.",
          aiRIntegration: "Natural language queries for instant insights",
        },
        {
          name: "Donor Reporting",
          description:
            "Generate donor-ready reports with programme progress, financials, and outcomes.",
          aiRIntegration: "AI-generated narrative summaries and report drafts",
        },
        {
          name: "Grantee Management",
          description:
            "Manage relationships with grantees, track their progress, and communicate efficiently.",
          aiRIntegration: "Smart alerts for grantee milestones and issues",
        },
      ],
      useCases: [
        {
          persona: "Programme Manager",
          scenarios: [
            "Track multiple projects across different geographies from a single dashboard",
            "Set and monitor milestones with automatic progress tracking",
            "Allocate team resources and manage workloads",
            "Generate progress reports for leadership meetings",
          ],
        },
        {
          persona: "Grant Officer",
          scenarios: [
            "Manage grant application intake and review workflows",
            "Track disbursement schedules and payment milestones",
            "Monitor grantee compliance and deliverables",
            "Prepare grant closure documentation",
          ],
        },
        {
          persona: "Finance Team",
          scenarios: [
            "Track budgets and expenditures in real-time",
            "Manage multi-currency grants and conversions",
            "Generate financial reports for audits",
            "Ensure donor fund utilization compliance",
          ],
        },
        {
          persona: "Executive Leadership",
          scenarios: [
            "View portfolio-level impact summaries",
            "Prepare board presentations with key metrics",
            "Make strategic decisions based on programme performance",
            "Identify programmes needing attention or resources",
          ],
        },
      ],
      aiRCapabilities: [
        "AI-powered grant proposal analysis and scoring",
        "Intelligent budget allocation recommendations",
        "Automated compliance and risk assessment",
        "Smart deadline and milestone predictions",
        "Natural language queries for programme insights",
        "AI-generated progress summaries and reports",
      ],
      link: "/progran",
      keywords: [
        "grant",
        "grants",
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
        "budget",
        "disbursement",
        "compliance",
        "milestone",
        "grantee",
        "donor",
        "portfolio",
      ],
    },
    {
      id: "driver",
      name: "Drive-R",
      tagline: "Data Integration & Reporting",
      description:
        "Unify your impact data from multiple sources. Drive-R brings together data from spreadsheets, databases, field collection tools, and more—giving you one source of truth for reporting and insights.",
      targetUsers: [
        "M&E Specialists",
        "Data Analysts",
        "Report Writers",
        "Programme Managers",
        "Impact Officers",
      ],
      features: [
        {
          name: "Multi-Source Data Integration",
          description:
            "Connect and unify data from spreadsheets, databases, APIs, and other tools in one place.",
          aiRIntegration: "Intelligent data mapping and schema suggestions",
        },
        {
          name: "Data Cleaning & Validation",
          description:
            "Automatically clean, deduplicate, and validate data to ensure quality.",
          aiRIntegration: "AI-driven data quality checks and anomaly detection",
        },
        {
          name: "Custom Dashboards",
          description:
            "Build interactive dashboards with drag-and-drop widgets to visualize your impact.",
          aiRIntegration:
            "Smart visualization recommendations based on data type",
        },
        {
          name: "Impact Metrics Tracking",
          description:
            "Define and track KPIs, indicators, and outcomes aligned with your theory of change.",
          aiRIntegration: "AI-suggested indicators based on programme goals",
        },
        {
          name: "Automated Report Generation",
          description:
            "Generate professional donor reports with charts, narratives, and data tables.",
          aiRIntegration:
            "AI-generated narrative summaries and insight highlights",
        },
        {
          name: "Historical Data Warehouse",
          description:
            "Store and query historical data for trend analysis and long-term impact assessment.",
          aiRIntegration: "Predictive analytics and trend forecasting",
        },
        {
          name: "Real-Time Sync",
          description:
            "Keep data synchronized across sources with real-time or scheduled updates.",
          aiRIntegration: "Smart sync conflict resolution",
        },
        {
          name: "Export & Sharing",
          description:
            "Export data and reports in multiple formats (PDF, Excel, CSV) and share with stakeholders.",
          aiRIntegration:
            "Intelligent format optimization for different audiences",
        },
      ],
      useCases: [
        {
          persona: "M&E Specialist",
          scenarios: [
            "Consolidate field data from multiple collection tools",
            "Track programme KPIs against targets",
            "Generate quarterly impact reports for donors",
            "Analyze trends across programmes and time periods",
          ],
        },
        {
          persona: "Data Analyst",
          scenarios: [
            "Clean and transform raw data from various sources",
            "Build analytical models for impact assessment",
            "Create visualizations for stakeholder presentations",
            "Identify data quality issues and resolve them",
          ],
        },
        {
          persona: "Report Writer",
          scenarios: [
            "Auto-generate donor report drafts with AI assistance",
            "Pull key metrics and visualizations into reports",
            "Create narrative summaries from quantitative data",
            "Customize reports for different donor requirements",
          ],
        },
        {
          persona: "Decision Maker",
          scenarios: [
            "Access real-time dashboards for strategic decisions",
            "Compare programme performance across portfolios",
            "Identify underperforming areas needing intervention",
            "Present impact data to boards and stakeholders",
          ],
        },
      ],
      aiRCapabilities: [
        "AI-driven data quality assessment and cleaning",
        "Natural language queries for instant insights",
        "Automated anomaly and outlier detection",
        "AI-generated narrative summaries for reports",
        "Predictive analytics for impact forecasting",
        "Smart data mapping and integration suggestions",
      ],
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
        "integration",
        "merge",
        "warehouse",
        "m&e",
        "monitoring",
        "evaluation",
        "impact",
      ],
    },
    {
      id: "surver",
      name: "Surve-R",
      tagline: "AI-Assisted Field Data Collection",
      description:
        "Collect ground-level data with intelligent, AI-assisted forms. Surve-R works offline, supports multiple languages, and uses AI to ensure data quality from the field.",
      targetUsers: [
        "Field Coordinators",
        "Enumerators",
        "Quality Assurance Teams",
        "Programme Designers",
        "Research Teams",
      ],
      features: [
        {
          name: "Dynamic Form Builder",
          description:
            "Create intelligent forms with conditional logic, validations, and skip patterns.",
          aiRIntegration: "AI-powered form suggestions based on programme type",
        },
        {
          name: "Offline-First Mobile App",
          description:
            "Collect data without internet connectivity. Data syncs automatically when connected.",
          aiRIntegration: "Smart sync prioritization and conflict resolution",
        },
        {
          name: "GPS & Timestamp Capture",
          description:
            "Automatically capture location and time data for verification and mapping.",
          aiRIntegration:
            "AI-powered location validation and anomaly detection",
        },
        {
          name: "Photo & Media Attachments",
          description:
            "Capture photos, audio, and video as supporting evidence for responses.",
          aiRIntegration:
            "Image recognition for asset verification and tagging",
        },
        {
          name: "Multi-Language Support",
          description:
            "Deploy surveys in multiple languages with easy translation management.",
          aiRIntegration: "AI-assisted translation and localization",
        },
        {
          name: "Real-Time Validation",
          description:
            "Validate responses in real-time with custom rules and constraints.",
          aiRIntegration: "AI-driven response quality checks and suggestions",
        },
        {
          name: "Beneficiary Tracking",
          description:
            "Register and track beneficiaries across surveys and time periods.",
          aiRIntegration: "Smart duplicate detection and matching",
        },
        {
          name: "Team Management",
          description:
            "Assign surveys to field teams, track progress, and manage submissions.",
          aiRIntegration: "AI-optimized assignment recommendations",
        },
        {
          name: "Voice-to-Text Input",
          description:
            "Allow enumerators to speak responses instead of typing.",
          aiRIntegration: "AI-powered speech recognition and transcription",
        },
      ],
      useCases: [
        {
          persona: "Field Coordinator",
          scenarios: [
            "Deploy surveys to field teams across multiple locations",
            "Monitor real-time collection progress on dashboards",
            "Identify and address data quality issues quickly",
            "Coordinate enumerator assignments and schedules",
          ],
        },
        {
          persona: "Enumerator",
          scenarios: [
            "Collect data using easy-to-use mobile forms",
            "Work offline in remote areas without connectivity",
            "Use voice input for faster data entry",
            "Capture photos and GPS for verification",
          ],
        },
        {
          persona: "Quality Assurance",
          scenarios: [
            "Review submissions in real-time as they come in",
            "Flag suspicious or low-quality responses",
            "Track enumerator performance and accuracy",
            "Ensure data meets quality standards before analysis",
          ],
        },
        {
          persona: "Programme Designer",
          scenarios: [
            "Design baseline, midline, and endline surveys",
            "Create adaptive surveys that respond to answers",
            "Build registration forms for beneficiary enrollment",
            "Test and iterate on survey instruments",
          ],
        },
      ],
      aiRCapabilities: [
        "AI-powered form design suggestions",
        "Intelligent skip logic recommendations",
        "Real-time AI data validation",
        "Voice-to-text transcription",
        "AI-assisted multi-language translation",
        "Smart duplicate and fraud detection",
        "Image recognition for verification",
      ],
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
        "beneficiary",
        "registration",
        "gps",
        "photo",
        "voice",
        "translation",
        "multi-language",
      ],
    },
  ],

  aiR: {
    name: "AI-R",
    description:
      "AI-R is Relific's proprietary AI engine that powers intelligent features across all products. It brings automation, insights, and smart assistance to every stage of impact operations—from data collection to reporting.",
    capabilities: [
      "Natural Language Processing - Query your data using plain English",
      "Intelligent Automation - Automate repetitive tasks like report generation",
      "Predictive Analytics - Forecast outcomes and identify trends",
      "Smart Recommendations - Suggest actions based on data patterns",
      "Anomaly Detection - Flag unusual data points for review",
      "Data Quality AI - Automatically clean and validate data",
      "Translation & Transcription - Multi-language support with AI",
      "Document Generation - Create reports and summaries automatically",
      "Contextual Assistance - AI copilot that understands your programmes",
    ],
    integration: {
      progran: [
        "Smart grant proposal analysis and scoring",
        "Intelligent budget recommendations",
        "Automated compliance checking",
        "Timeline and milestone predictions",
        "Natural language programme queries",
      ],
      driver: [
        "AI-driven data quality assessment",
        "Natural language data queries",
        "Automated anomaly detection",
        "AI-generated report narratives",
        "Predictive impact analytics",
      ],
      surver: [
        "Form design suggestions",
        "Voice-to-text input",
        "AI-powered translation",
        "Duplicate detection",
        "Image recognition",
      ],
    },
  },

  faqs: [
    {
      question: "What is Relific?",
      answer:
        "Relific is an AI-powered SaaS platform for the social sector. We provide three integrated products—ProGran (programme & grants management), Drive-R (data integration & reporting), and Surve-R (field data collection)—that work together to help NGOs and CSR teams manage their impact operations efficiently.",
      relatedProducts: ["progran", "driver", "surver"],
      keywords: ["relific", "what", "about", "company", "platform"],
    },
    {
      question: "Who is Relific for?",
      answer:
        "Relific is designed for NGOs, CSR teams, social enterprises, foundations, and development organizations across any sector—including agriculture, healthcare, education, climate action, livelihoods, and more. Our tools are sector-agnostic and adaptable to various impact programmes.",
      relatedProducts: [],
      keywords: ["who", "for", "audience", "users", "ngo", "csr", "foundation"],
    },
    {
      question: "What is AI-R?",
      answer:
        "AI-R is Relific's proprietary AI engine that powers intelligent features across all our products. It enables natural language queries, automated report generation, smart data validation, predictive analytics, and contextual assistance throughout your impact operations.",
      relatedProducts: ["progran", "driver", "surver"],
      keywords: ["ai-r", "ai", "artificial intelligence", "engine", "smart"],
    },
    {
      question: "Can I use the products separately or do I need all three?",
      answer:
        "You can use each product independently based on your needs. However, they are designed to work seamlessly together—Surve-R collects data in the field, Drive-R unifies and reports on it, and ProGran manages the programmes and grants. Using them together provides the most comprehensive solution.",
      relatedProducts: ["progran", "driver", "surver"],
      keywords: [
        "separate",
        "together",
        "integrate",
        "need",
        "all three",
        "individually",
      ],
    },
    {
      question: "Does Surve-R work offline?",
      answer:
        "Yes! Surve-R is built offline-first. Field teams can collect data without internet connectivity, and the data automatically syncs when they're back online. This is essential for data collection in remote areas.",
      relatedProducts: ["surver"],
      keywords: ["offline", "no internet", "remote", "connectivity", "sync"],
    },
    {
      question: "Can I upload Excel or CSV files?",
      answer:
        "Yes. Drive-R supports data ingestion from CSV, Excel files, Google Sheets, databases, APIs, and many more sources. It turns them into unified dashboards and analytics.",
      relatedProducts: ["driver"],
      keywords: [
        "excel",
        "csv",
        "upload",
        "import",
        "spreadsheet",
        "google sheets",
      ],
    },
    {
      question: "How does Drive-R integrate data from multiple sources?",
      answer:
        "Drive-R can connect to spreadsheets (Excel, Google Sheets), databases, APIs, and other data collection tools including Surve-R. It uses AI-powered data mapping to unify data from different sources into a single, clean dataset for analysis and reporting.",
      relatedProducts: ["driver"],
      keywords: [
        "integrate",
        "multiple sources",
        "connect",
        "unify",
        "data mapping",
      ],
    },
    {
      question: "Can ProGran handle multi-donor grants?",
      answer:
        "Yes, ProGran is designed to manage complex grant portfolios including multi-donor funding, co-financing arrangements, and restricted/unrestricted funds. It maintains separate tracking and reporting for each donor's requirements.",
      relatedProducts: ["progran"],
      keywords: [
        "multi-donor",
        "grants",
        "funding",
        "co-financing",
        "portfolio",
      ],
    },
    {
      question: "Is my data secure with Relific?",
      answer:
        "Absolutely. Relific follows industry-standard security practices including data encryption, secure access controls, regular backups, and compliance with data protection regulations. Your beneficiary and programme data is protected.",
      relatedProducts: [],
      keywords: [
        "secure",
        "security",
        "data protection",
        "encryption",
        "safe",
        "privacy",
      ],
    },
    {
      question: "Can I generate donor reports automatically?",
      answer:
        "Yes! Drive-R's AI-powered reporting can auto-generate donor reports with charts, metrics, and even narrative summaries. You can customize templates for different donors and export in PDF, Excel, or other formats.",
      relatedProducts: ["driver"],
      keywords: ["report", "donor", "automatic", "generate", "export", "pdf"],
    },
    {
      question: "How does AI-R help with data quality?",
      answer:
        "AI-R performs real-time validation during data collection in Surve-R, flags anomalies and duplicates, suggests corrections, and helps clean data in Drive-R. This ensures high-quality data for reliable impact measurement.",
      relatedProducts: ["driver", "surver"],
      keywords: ["data quality", "validation", "clean", "anomaly", "duplicate"],
    },
    {
      question: "Can I create dashboards?",
      answer:
        "Yes! Drive-R allows users to build interactive dashboards with drag-and-drop widgets without needing technical expertise. You can visualize KPIs, track metrics, and share dashboards with stakeholders.",
      relatedProducts: ["driver"],
      keywords: ["dashboard", "charts", "visualization", "widgets", "kpi"],
    },
    {
      question: "Is this suitable for CSR teams?",
      answer:
        "Yes. ProGran and Drive-R are built specifically to support CSR program management, Schedule VII compliance, spend tracking, and impact reporting. Many CSR teams use our platform for their social responsibility initiatives.",
      relatedProducts: ["progran", "driver"],
      keywords: [
        "csr",
        "compliance",
        "corporate",
        "schedule vii",
        "social responsibility",
      ],
    },
    {
      question: "What sectors does Relific support?",
      answer:
        "Relific is sector-agnostic and works across agriculture, healthcare, education, climate action, livelihoods, water & sanitation, financial inclusion, gender equality, and any other social impact sector. Our tools adapt to your programme's needs.",
      relatedProducts: [],
      keywords: [
        "sector",
        "agriculture",
        "healthcare",
        "education",
        "climate",
        "livelihoods",
      ],
    },
    {
      question: "How do I get started?",
      answer:
        "The best way to get started is to book a demo with our team. We'll understand your needs and show you how Relific can help streamline your impact operations.",
      relatedProducts: [],
      keywords: [
        "start",
        "begin",
        "demo",
        "trial",
        "get started",
        "onboarding",
      ],
    },
  ],

  useCases: [
    {
      id: "csr-compliance",
      title: "CSR Reporting & Compliance",
      content:
        "CSR teams use **ProGran** to manage programmes and partners, while **Drive-R** generates automated dashboards for spend tracking, Schedule VII compliance reporting, and board-level insights.",
      relatedProducts: ["progran", "driver"],
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
        "NGOs use **Surve-R** to collect data from the field and **Drive-R** to analyze programme performance, beneficiary reach, and outcomes in real time.",
      relatedProducts: ["surver", "driver"],
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
        "**Drive-R** consolidates data from multiple CSVs, Google Sheets, databases, and MIS systems into a single analytics layer, eliminating manual reporting and spreadsheet chaos.",
      relatedProducts: ["driver"],
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
        "**Surve-R** enables large field teams to collect high-quality data offline, enforce validations, and sync securely, ensuring consistent data across regions and enumerators.",
      relatedProducts: ["surver"],
      keywords: [
        "field work",
        "offline",
        "enumerators",
        "surveyors",
        "data quality",
      ],
    },
    {
      id: "grant-management",
      title: "Grant Portfolio Management",
      content:
        "**ProGran** helps foundations and grantmakers manage the entire grant lifecycle—from application intake and review to disbursement tracking, compliance monitoring, and impact reporting.",
      relatedProducts: ["progran"],
      keywords: [
        "grant",
        "foundation",
        "grantmaker",
        "disbursement",
        "lifecycle",
      ],
    },
    {
      id: "impact-reporting",
      title: "Donor Impact Reporting",
      content:
        "Combine **Surve-R** for field data collection and **Drive-R** for AI-powered report generation to create compelling donor reports with narratives, visualizations, and outcome metrics.",
      relatedProducts: ["surver", "driver"],
      keywords: ["donor", "report", "impact", "narrative", "outcome"],
    },
  ],

  glossary: {
    "Impact Operations":
      "The activities involved in planning, implementing, monitoring, and reporting on social impact programmes.",
    "M&E":
      "Monitoring and Evaluation - systematic processes to track and assess programme performance and outcomes.",
    KPI: "Key Performance Indicator - measurable values that demonstrate programme effectiveness.",
    "Theory of Change":
      "A methodology that maps how programme activities lead to desired outcomes and impact.",
    Baseline:
      "Initial data collected before a programme starts, used as a reference point for measuring change.",
    Endline:
      "Data collected at the end of a programme to measure changes against the baseline.",
    Enumerator:
      "A field data collector who administers surveys and collects responses from beneficiaries.",
    Beneficiary:
      "An individual or community that receives services or benefits from a programme.",
    Grantee:
      "An organization that receives grant funding to implement programmes.",
    Disbursement:
      "The release of grant funds to grantees according to agreed schedules.",
    Compliance:
      "Adherence to donor requirements, regulations, and organizational policies.",
    "Skip Logic":
      "Survey logic that shows or hides questions based on previous responses.",
    CSR: "Corporate Social Responsibility - a company's initiatives to assess and take responsibility for social and environmental impacts.",
    "Schedule VII":
      "A section of the Indian Companies Act specifying eligible CSR activities for corporate compliance.",
  },
};

// ============================================================
// SECTOR-SPECIFIC GUIDANCE
// ============================================================

export const SECTOR_PROMPTS: Record<
  string,
  { response: string; products: string[] }
> = {
  agriculture: {
    response:
      "For agriculture programmes, **Surve-R** supports farmer-level field data collection (crop surveys, yield tracking, input distribution), while **Drive-R** helps analyze crop performance, programme reach, and impact data. **ProGran** can manage agricultural grants and partner relationships.",
    products: ["surver", "driver", "progran"],
  },
  education: {
    response:
      "Education programmes use **Surve-R** for student assessments, school monitoring, and attendance tracking. **Drive-R** consolidates education data for learning outcome analysis, and **ProGran** manages education-focused grants and scholarship programmes.",
    products: ["surver", "driver", "progran"],
  },
  healthcare: {
    response:
      "Healthcare initiatives rely on **Surve-R** for patient surveys, health camp data, and community health worker tracking. **Drive-R** provides analytics for health outcomes and programme performance, while **ProGran** manages health grants and clinic partnerships.",
    products: ["surver", "driver", "progran"],
  },
  environment: {
    response:
      "Environmental and climate programmes use **Surve-R** for field monitoring (tree plantation verification, water quality surveys). **Drive-R** tracks environmental indicators and impact metrics, and **ProGran** manages climate action grants and partner organizations.",
    products: ["surver", "driver", "progran"],
  },
  livelihoods: {
    response:
      "Livelihoods programmes use **Surve-R** for beneficiary registration, skill assessment, and job placement tracking. **Drive-R** analyzes income changes and programme outcomes, while **ProGran** manages vocational training grants and SHG partnerships.",
    products: ["surver", "driver", "progran"],
  },
  nutrition: {
    response:
      "Nutrition programmes use **Surve-R** for anthropometric data collection, meal distribution tracking, and household surveys. **Drive-R** monitors nutrition indicators and generates outcome reports, while **ProGran** manages nutrition grants and NGO partnerships.",
    products: ["surver", "driver", "progran"],
  },
};

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
  contact: "/contact",
  about: "/about",
};

// ============================================================
// GREETING & FALLBACK MESSAGES
// ============================================================

export const INITIAL_GREETING =
  "Hi! 👋 I'm here to help you explore Relific's platform. You can ask me about **Drive-R** (data integration & reporting), **Surve-R** (field data collection), or **ProGran** (programme & grants management). How can I help you today?";

export const OUT_OF_SCOPE_MESSAGE =
  "I'd love to help you with that! For detailed discussions, our team can provide personalized guidance.\n\n👉 [Book a Demo](/book-demo)";

export const LIMIT_REACHED_MESSAGE =
  "You've reached the question limit for this session. 🎯\n\nExplore our products or book a demo for personalized guidance:\n\n[ProGran](/progran) - Programme & Grants Operations\n[Drive-R](/drive_r) - Data Integration & Reporting\n[Surve-R](/surve_r) - AI-Assisted Field Data Collection\n\n👉 [Book a Demo](/book-demo)";

export const LIMIT_GREETING =
  "Thanks for your interest! 🙏 You've used your question limit, but you can explore our products or book a demo for more details.\n\n[ProGran](/progran) - Programme & Grants Operations\n[Drive-R](/drive_r) - Data Integration & Reporting\n[Surve-R](/surve_r) - AI-Assisted Field Data Collection";

// ============================================================
// CHATBOT CONFIGURATION
// ============================================================

export const CHATBOT_CONFIG = {
  maxQueriesPerSession: 5,
  sessionDurationMs: 3 * 24 * 60 * 60 * 1000, // 3 days
  storageKeys: {
    queryCount: "chatbot_query_count",
    sessionStart: "chatbot_session_start",
  },
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Get product by ID
 */
export const getProduct = (productId: string): Product | undefined => {
  return relificKnowledge.products.find((p) => p.id === productId);
};

/**
 * Find a relevant product based on query keywords
 */
export function findRelevantProduct(query: string): Product | null {
  const lowerQuery = query.toLowerCase();

  for (const product of relificKnowledge.products) {
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

  for (const useCase of relificKnowledge.useCases) {
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

  for (const faq of relificKnowledge.faqs) {
    if (
      faq.keywords.some((keyword) => lowerQuery.includes(keyword.toLowerCase()))
    ) {
      return faq;
    }
  }

  return null;
}

/**
 * Search FAQs by query
 */
export const searchFAQs = (query: string): FAQ[] => {
  const lowerQuery = query.toLowerCase();
  return relificKnowledge.faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(lowerQuery) ||
      faq.answer.toLowerCase().includes(lowerQuery) ||
      faq.keywords.some((k) => lowerQuery.includes(k.toLowerCase())),
  );
};

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
 * Get AI-R capabilities for a product
 */
export const getAIRCapabilities = (productId: string): string[] => {
  return relificKnowledge.aiR.integration[productId] || [];
};

/**
 * Generate chatbot response based on user query
 */
export function generateResponse(userQuery: string): string {
  // Check for AI-R specific questions
  if (
    userQuery.toLowerCase().includes("ai-r") ||
    userQuery.toLowerCase().includes("ai engine")
  ) {
    return `${relificKnowledge.aiR.description}\n\nKey capabilities include: ${relificKnowledge.aiR.capabilities.slice(0, 4).join(", ")}, and more.`;
  }

  // Try FAQ match first
  const faq = findRelevantFAQ(userQuery);
  if (faq) {
    return faq.answer;
  }

  // Try product match
  const product = findRelevantProduct(userQuery);
  if (product) {
    return `**${product.name}**: ${product.description}\n\n[Learn more about ${product.name}](${product.link})`;
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

// Export default for easy import
export default relificKnowledge;

// Concise knowledge summary optimized for AI consumption
export const KNOWLEDGE_CONTENT = `
RELIFIC COMPANY OVERVIEW:
- AI-powered SaaS platform for social sector (NGOs, CSR teams, foundations, development organizations)
- Mission: Empower organizations to unify data, collect it on the ground, and report impact with confidence
- Tagline: "AI for Impact Ops"
- Works across ALL sectors: agriculture, healthcare, education, climate action, livelihoods, water & sanitation, financial inclusion, gender equality, and any social impact sector

THREE INTEGRATED PRODUCTS:

1. PROGRAN - Programme & Grants Management
   - For: Programme Managers, Grant Officers, Finance Teams, CSR Teams, Executive Leadership
   - Features: Grant lifecycle management, programme planning, budget tracking, compliance, workflow automation, portfolio dashboards, donor reporting
   - Benefits: End-to-end programme and grants operations from applications to disbursements and compliance
   - AI Capabilities: Grant proposal analysis, intelligent budget recommendations, automated compliance checking, natural language queries

2. DRIVE-R - Data Integration & Reporting  
   - For: M&E Specialists, Data Analysts, Report Writers, Impact Officers, CSR Teams
   - Features: Multi-source data integration, data cleaning & validation, custom dashboards, impact metrics tracking, automated report generation, real-time sync
   - Benefits: Unify data from multiple sources (spreadsheets, databases, field tools) into one source of truth for comprehensive impact reporting
   - AI Capabilities: Data quality assessment, natural language queries, anomaly detection, AI-generated report narratives, predictive analytics

3. SURVE-R - AI-Assisted Field Data Collection
   - For: Field Coordinators, Enumerators, Programme Teams, NGO Staff
   - Features: Offline-first mobile forms, multi-language support, AI-powered validation, GPS & photo capture, voice-to-text, smart skip logic
   - Benefits: Collect high-quality ground-level data with AI assistance, works offline in remote areas
   - AI Capabilities: Form design suggestions, voice-to-text transcription, multi-language translation, duplicate detection, image recognition

KEY BENEFITS FOR NGOs:
- Unified platform for complete programme lifecycle (field data → reporting → grants management)
- Sector-agnostic: works for ANY social impact programme including healthcare, education, agriculture, climate, etc.
- AI-powered automation reduces manual work
- Better data quality and compliance
- Faster donor reporting with AI-generated narratives
- Offline capability for remote field work

KEY BENEFITS FOR CSR TEAMS:
- Centralized CSR programme portfolio management
- Track impact across all initiatives in one platform
- Automated compliance and audit trails
- Professional donor/stakeholder reporting
- Data-driven decision making with real-time dashboards
- Budget tracking and ROI measurement
- Manage grantees and track disbursements

AI-R ENGINE:
Relific's proprietary AI powers: natural language queries, automated report generation, data quality checks, predictive analytics, smart recommendations, translation, document generation, and contextual assistance across all products.

SECTORS SUPPORTED:
Agriculture, Healthcare, Education, Climate Action, Livelihoods, Water & Sanitation, Financial Inclusion, Gender Equality, and ANY other social impact sector - the platform is completely sector-agnostic and adaptable to any programme type.

IMPORTANT: All products work independently OR together as an integrated stack. Surve-R collects field data → Drive-R unifies and reports → ProGran manages programmes and grants.

NAVIGATION & KEY PAGES:
- Contact Us: /contact - Get in touch with our team
- Book a Demo: /book-demo - Schedule a personalized demo
- About Us: /aboutus - Learn about Relific's mission and team
- Who We Serve: /whoweserve - See our target audiences (NGOs, CSR teams, etc.)
- Resources: /resources - Access guides, case studies, and documentation
- Demo Videos: /demo-videos - Watch product demonstrations
- All Products: /allproducts - Overview of all Relific products
- Privacy Policy: /privacy - Our privacy policy and data handling
`;
