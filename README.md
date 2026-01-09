## Relific

Relific is an integrated data and analytics platform built for organisations operating in the social-impact and CSR ecosystem. It enables NGOs, CSR teams, foundations, and implementation partners to collect, unify, analyse, and report programme data at scale—without fragmented tools, spreadsheets, or manual reconciliation.

Relific is designed for real-world programme execution, where data is collected in the field, processed across multiple sectors, and reported against statutory, donor, and impact frameworks such as MCA CSR-2, SDGs, and IRIS+.

At its core, Relific helps organisations move from data collection → insight → compliance → decision-making in a single, connected system.

What Relific Solves
-------------------

Social and CSR programmes often struggle with:

- Fragmented data across teams, partners, and geographies
- Inconsistent formats from field collection tools
- Manual MIS and compliance reporting
- Limited visibility into outcomes, utilisation, and performance
- High dependency on spreadsheets and external consultants

Relific addresses these challenges by providing purpose-built tools that work together as one platform.

Relific Product Suite
---------------------

Relific is composed of three tightly integrated products:

1. Surve-R — Field Data Collection

   Surve-R is a configurable, sector-aware data collection tool used for baseline studies, monitoring, evaluations, and audits.

   Key capabilities:
   - Custom form creation for agriculture, education, health, livelihoods, climate, and CSR programmes
   - Mobile-first data capture (online and offline)
   - Geo-tagging, media uploads, and structured validations
   - Project-linked forms to ensure data continuity across programme phases

2. Drive-R — Data Integration & Analytics

   Drive-R is Relific’s data unification and analytics layer. It brings together data from Surve-R, external databases, spreadsheets, and partner systems into a single analytical environment.

   Key capabilities:
   - Automated data ingestion and transformation (ETL)
   - Clean, denormalised datasets for analysis
   - SQL-based querying with AI-assisted workflows
   - Interactive dashboards for MIS, programme performance, and management reporting

3. ProGran — Programme & Grant Management

   ProGran is the operational backbone for managing projects, grants, and financial tracking.

   Key capabilities:
   - Project and partner master data
   - Budget allocation and utilisation tracking
   - Fund disbursement records
   - Outcome, output, and impact mapping
   - Role-based dashboards for programme, finance, and leadership teams

Getting started
---------------

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

The app runs at http://localhost:3000 by default.

Scripts
-------

- `npm run dev` — start Next.js dev server
- `npm run build` — build production bundle
- `npm run start` — run production server
- `npm run lint` — run linter

Environment
-----------

This project expects standard Next.js environment variables when integrating external services (for example, Strapi). See `.env.example` for starting hints.

Deployment
----------

This project is configured for Vercel/Next.js deployments. Build with `npm run build` and deploy using your preferred provider (Vercel recommended for Next.js apps).

Contributing
------------

Please open issues or pull requests for bugs and improvements. Follow feature-branch workflow and include meaningful commit messages.

License
-------

This repository includes a `LICENSE` file. Check it for licensing details.

Contact
-------

For questions, reach out to the project owner.
