const farmer = "/assets/OurProducts/farmer.png";
const Gdash = "/assets/OurProducts/grant_dash.svg";
const Edash = "/assets/OurProducts/edu_dash.svg";
const Leaf = "/assets/OurProducts/Leafledger.svg";
const Health_dash = "/assets/OurProducts/health_dash.svg";
const drive_r_image = "/assets/OurProducts/Drive_r.svg";
const surve_r_image = "/assets/OurProducts/Surve_r.svg";
const progran_image = "/assets/OurProducts/grant_dash.svg";
const tracseed_image = "/assets/OurProducts/Tracseed.svg";

const akshay_seed = "/assets/clients/Akshay-seed.jpg";
const akshaya = "/assets/clients/akshaya-seeds-logo.jpg";
const ecoagri = "/assets/clients/ECOAgri.jpg";
const idf = "/assets/clients/idf.jpg";
const Kalike = "/assets/clients/Kalike.jpg";
const sehgal = "/assets/clients/sehgal.png";
const SGIF = "/assets/clients/SGIF-Logo.jpg";
const tata = "/assets/clients/tata-trusts.jpg";
const rise = "/assets/clients/RAHINDIA-Logo.png";

const manjunatha = "/assets/team/Manjunatha.jpg";
const vinay = "/assets/team/Vinay.jpg";
const priyesh = "/assets/team/Priyesh.jpg";
const gaurav = "/assets/team/Gaurav.jpeg";
const sumedh = "/assets/team/Sumedh.jpeg";
const vignesh = "/assets/team/Vignesh.png";
const venkata = "/assets/team/raman.jpeg";
const spoorthy = "/assets/team/spoorthy.jpeg";
const blessy = "/assets/team/Blessy.jpeg";
const lutfor = "/assets/team/lutfor.png";
const rahul = "/assets/team/rahul.jpg";
const pritam = "/assets/team/pritam.jpeg";

const balance = "/assets/icons/balance1.svg";
const strategic = "/assets/icons/strategy-play.svg";
const friendly = "/assets/icons/userfriendly.svg";
const holistic = "/assets/icons/holistic.svg";

const row1a = "/assets/impact_images/row1_a.svg";
const row1b = "/assets/impact_images/row1_b.svg";
const row1c = "/assets/impact_images/row1_c.svg";
const row1d = "/assets/impact_images/row1_d.svg";
const row2a = "/assets/impact_images/row2_a.svg";
const row2b = "/assets/impact_images/row2_b.svg";
const row2c = "/assets/impact_images/row2_c.svg";
const row2d = "/assets/impact_images/row2_d.svg";
const row3a = "/assets/impact_images/row3_a.svg";
const row3b = "/assets/impact_images/row3_b.svg";
const row3c = "/assets/impact_images/row3_c.svg";
const row3d = "/assets/impact_images/row3_d.svg";

const l1a = "/assets/leafledger_images/row1a.svg";
const l1b = "/assets/leafledger_images/row1b.svg";
const l1c = "/assets/leafledger_images/group669.svg";

const f1a = "/assets/farmer_platform_images/row1a.svg";
const f1b = "/assets/farmer_platform_images/row1b.svg";
const f1c = "/assets/farmer_platform_images/row1c.svg";
const f2a = "/assets/farmer_platform_images/row2a.svg";
const f2b = "/assets/farmer_platform_images/row2b.svg";
const f2c = "/assets/farmer_platform_images/row2c.svg";

export const navLinks = [
  { name: "Solutions", path: "/solutions", hasDropdown: true },
  { name: "Products", path: "/products", hasDropdown: true },
  { name: "Who we serve", path: "/whoweserve", hasDropdown: false },
  { name: "About Us", path: "/aboutus", hasDropdown: false },
  { name: "Resources", path: "/resources", hasDropdown: true },
];

export const solutionsLinks = [
  { drop: "For CSRs", path: "/CSR" },
  { drop: "For NGOs", path: "/NGO_solutions" },
  { drop: "For Consultants", path: "/Consultants" },
];

export const resourcesLinks = [
  { drop: "Demo Videos", path: "/demo-videos" },
  { drop: "Other Solutions", path: "/other_solutions" },
  { drop: "Blogs", path: "/blogs" },
];

export const otherSolutionsLinks = [
  { drop: "Farmer Platform", path: "/farmer_platform" },
  { drop: "LeafLedger", path: "/leaf" },
];

export const otherSolutionsSegments = [
  {
    d_title: "Farmer Platform",
    description:
      "Enable social sector initiatives to create sustainable impact in rural communities through digital farmer engagement. Our platform facilitates grassroots program implementation, transparent monitoring of field interventions, and delivery of crucial agricultural advisories to smallholder farmers. Drive measurable improvements in food security, climate resilience, and farmer incomes through technology-enabled social impact.",
    image: farmer,
    path: "/farmer_platform",
  },

  {
    d_title: "LeafLedger",
    description:
      "Designed for seed companies, agri-organizations, and development agencies, TracSeed streamlines seed production, seed bank management, and contract farming workflows. The platform ensures full traceability from breeder seed to certified output, while capturing field-level data, farmer engagement, and quality control processes. TracSeed empowers partners to scale ethically, maintain genetic integrity, and build resilient agricultural value chains.",
    image: Leaf,
    path: "/leaf",
  },
];

export const productLinks = [
  { drop: "Drive-R", path: "/drive_r" },
  { drop: "Surve-R", path: "/surve_r" },
  { drop: "ProGran", path: "/progran" },
];

export const segments = [
  {
    d_title: "Surve-R",
    description: `
From Paper Forms to Enterprise Data Collection

Your field teams collect perfect data in minutes, not hours. No more duplicate entries, no more data cleaning nightmares. Enterprise-grade reliability that scales from village surveys to global programs.

• Mobile-first data collection  
• Offline sync capabilities  
• Enterprise-grade security  
• Automated workflows  

Your field teams collect 5x more data with zero errors—finally, data you can trust.`,
    image: surve_r_image,
    path: "/surve_r",
  },
  {
    d_title: "ProGran",
    description: `
Grant Management Without the Chaos

Your grant management runs itself. CSR teams get executive dashboards in real-time. Foundation boards see program performance instantly. Theory of Change or Logical Framework—ProGran speaks your language and automates your workflow.

• Flexible framework support  
• Automated KPI tracking  
• Real-time dashboards  
• Stakeholder reporting  

Board meetings become showcases, not data archaeology sessions.`,
    image: progran_image,
    path: "/progran",
  },
  {
    d_title: "Drive-R",
    description: `
Your Data Speaks, You Just Need to Listen

Your data team in your pocket. Ask 'Which programs create the most impact per dollar?' and get answers in seconds, not months. Brings all your data together, validates everything with AI, and turns anyone into a data analyst.

• AI-powered data transformations  
• Natural language queries  
• Automated model building  
• Real-time visualizations  

Data-driven decisions at the speed of thought.`,
    image: drive_r_image,
    path: "/drive_r",
  },
];

export const clients = [
  { id: 1, logo: akshay_seed, name: "Akshay Seedpreneurs" },
  { id: 2, logo: akshaya, name: "Akshaya Seeds" },
  { id: 3, logo: ecoagri, name: "ECO agripreneurs" },
  { id: 4, logo: idf, name: "IDF" },
  { id: 5, logo: Kalike, name: "Kalike" },
  { id: 6, logo: sehgal, name: "Sehgal Foundation" },
  { id: 7, logo: SGIF, name: "SGI Foundation" },
  { id: 8, logo: tata, name: "Tata Trusts" },
  { id: 9, logo: rise, name: "RAH-India" },

  // Add more clients as needed
];

export const teamMembers = [
  {
    name: "Manjunatha Thyagaraj",
    designation: "CEO & Founder",
    image: manjunatha,
    linkedin: "https://www.linkedin.com/in/manjunathathyagaraj/",
  },
  {
    name: "Vinay Hegde",
    designation: "Head of Design",
    image: vinay,
    linkedin: "https://www.linkedin.com/in/vinayhegde-designer/",
  },
  {
    name: "Priyesh Raghavan",
    designation: "Technology Lead",
    image: priyesh,
    linkedin: "https://www.linkedin.com/in/priyesh-raghavan-2528b9a/",
  },
  {
    name: "Gaurav Sharma",
    designation: "Lead Quality Analyst",
    image: gaurav,
    linkedin: "https://www.linkedin.com/in/gaurav-sharma-4183051bb/",
  },
  {
    name: "Sumedh Tare",
    designation: "Lead Developer",
    image: sumedh,
    linkedin: "https://www.linkedin.com/in/sumedh-tare-1841b7191/",
  },
  {
    name: "Venkata Raman",
    designation: "VP - Customer Success",
    image: venkata,
    linkedin: "https://www.linkedin.com/in/venkata-raman-b731b431b/",
  },
  {
    name: "Vignesh Seshadri",
    designation: "VP - Operations",
    image: vignesh,
    linkedin: "https://www.linkedin.com/in/vignesh-seshadri-661b5b3a/",
  },
  {
    name: "Melon Spoorthy",
    designation: "Product Marketing Manager",
    image: spoorthy,
    linkedin: "https://www.linkedin.com/in/melon-spoorthy-16a40914b/",
  },
  {
    name: "Blessy S",
    designation: "Junior Data Analyst",
    image: blessy,
    linkedin: "https://www.linkedin.com/in/blessy-s-437103257/",
  },
  {
    name: "Md Lutfor Rahman",
    designation: "Software Engineer",
    image: lutfor,
    linkedin: "https://www.linkedin.com/in/lutfor779/",
  },
  {
    name: "Rahul Choudhary",
    designation: "Software Engineer",
    image: rahul,
    linkedin: "https://www.linkedin.com/in/rahul-choudhary-0348b8296/",
  },
  {
    name: "Pritam Das",
    designation: "Software Engineer",
    image: pritam,
    linkedin: "https://www.linkedin.com/in/pritam-das-seeker/",
  },
];

export const coreValues = [
  {
    title: "Holistic Approach",
    image: holistic, // Replace with actual icon if needed
    description:
      "We integrate diverse technologies and data-driven insights to provide a complete solution for improving productivity and sustainability.",
  },
  {
    title: "Strategic Insight",
    image: strategic, // Replace with actual icon if needed
    description:
      "Empowering organizations with deep analytics and predictive intelligence to make informed decisions and maximize impact.",
  },
  {
    title: "Balance",
    image: balance, // Replace with actual icon if needed
    description:
      "We ensure equilibrium between technology, human expertise, and sustainability, creating solutions that are both innovative and practical.",
  },
  {
    title: "User-Friendly",
    image: friendly, // Replace with actual icon if needed
    description:
      "Designed with simplicity and efficiency in mind, our solutions are intuitive, accessible, and easy to implement for all stakeholders.",
  },
];

export const impactStories = [
  {
    id: "farmer-producer", // ✅ Unique ID for navigation
    title: "Farmer Producer",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row1a,
    designed: true, // This story has a designed detail page
  },
  {
    id: "input-providers",
    title: "Input Providers",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row1b,
    designed: false, // This story will redirect to comingsoon
  },
  {
    id: "ngos",
    title: "NGOs",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row1c,
    designed: false,
  },
  {
    id: "cooperatives",
    title: "Co-operatives",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row1d,
    designed: false,
  },
  {
    id: "agri-research",
    title: "Agri Research",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row2a,
    designed: false,
  },
  {
    id: "agri-consortia",
    title: "Agri Consortia",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row2b,
    designed: false,
  },
  {
    id: "government",
    title: "Government",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row2c,
    designed: false,
  },
  {
    id: "agri-innovations",
    title: "Agri Innovations",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row2d,
    designed: false,
  },
  {
    id: "farmer-cooperative",
    title: "Farmer Co-operative",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row3a,
    designed: false,
  },
  {
    id: "agri-coop",
    title: "Agri Co-op",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row3b,
    designed: false,
  },
  {
    id: "international-agri",
    title: "International Agri",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row3c,
    designed: false,
  },
  {
    id: "livelihood-mission",
    title: "Livelihood Mission",
    description:
      "Relific technology to offer useful information and tools to improve profitability and productivity.",
    image: row3d,
    designed: false,
  },
];

export const leafFeatures = [
  {
    title: "Track afforestation progress in real-time",
    image: l1c,
    imageClass: "w-full h-40 object-cover rounded-lg",
  },
  {
    title: "Seamless coordination with field teams",
    image: l1b,
    imageClass: "w-full h-40 object-cover rounded-lg",
  },
  {
    title: "Comprehensive reforestation project dashboard",
    image: l1a,
    imageClass: "w-full h-40 object-cover rounded-lg",
  },
];

export const farmerPlatformFeatures = [
  {
    title: "Register and manage farmer profiles with detailed records",
    image: f1c,
  },
  {
    title: "Monitor agri-extension activities and training programs",
    image: f1b,
  },
  {
    title: "Track real-time field data, crop progress, and advisory impact",
    image: f1a,
  },
  { title: "Access real-time weather and Market insights", image: f2a },
  {
    title: "Digitally document farm visits and extension officer reports",
    image: f2b,
  },
  {
    title: "One click knowledge-sharing & community engagement",
    image: f2c,
  },
];
