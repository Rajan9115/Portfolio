import {
  SkillCategory,
  ExperienceItem,
  AchievementItem,
  ToolkitCategory,
} from "@/types";

export const personalInfo = {
  name: "Rajan Jaiswal",
  role: "Full Stack Software Engineer",
  tagline: "Building resilient web applications, modern APIs, and high-performance digital products.",
  headline: "Crafting resilient web architectures and modern SaaS applications with disciplined engineering.",
  bio: "Full Stack Engineer with strong foundations in computer science and production web development. Specialized in Next.js, React, Node.js, TypeScript, and database systems. Experienced in architecting complete web solutions—from robust REST APIs, payment integrations, and relational data modeling to polished, responsive, and accessible user interfaces.",
  location: "Gorakhpur, Uttar Pradesh, India",
  availability: "Available for Full-time Roles & High-Impact Projects",
  status: "Open to Remote & Global Relocation",
  email: "rajank5038383@gmail.com",
  phone: "+91 9115265953",
  github: "https://github.com/Rajan9115",
  linkedin: "https://www.linkedin.com/in/rajan-kumar-390772274/",
  leetcode: "https://leetcode.com/u/Rajan9115/",
  resumePath: "/resume/Rajan_Jaiswal_Resume.pdf",
  profileImage: "/images/profile/rajan-jaiswal.jpg",
  education: {
    institution: "Rajkiya Engineering College, Sonbhadra",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2022 – 2025",
    cgpa: "8.18 / 10.0",
    location: "Uttar Pradesh, India",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Object-Oriented Programming (OOP)",
    ],
  },
  stats: [
    { label: "B.Tech CGPA", value: "8.18", detail: "Computer Science & Eng." },
    { label: "DSA Problems Solved", value: "250+", detail: "LeetCode & GFG" },
    { label: "Full-Stack Projects", value: "6+", detail: "Production & Systems" },
    { label: "API Endpoints Built", value: "50+", detail: "REST & WebSockets" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and high-performance client interfaces.",
    iconName: "Layout",
    items: [
      { name: "Next.js (App Router)", highlight: true, notes: "Server Components & SSR" },
      { name: "React 19 & 18", highlight: true, notes: "Hooks, Context & Suspense" },
      { name: "TypeScript", highlight: true, notes: "Strict Typing & Interfaces" },
      { name: "Tailwind CSS", highlight: true, notes: "Utility-First Responsive UI" },
      { name: "Redux Toolkit", highlight: false, notes: "Predictable State Management" },
      { name: "HTML5 & Semantic Markup", highlight: false, notes: "WCAG Accessibility" },
      { name: "Motion for React", highlight: false, notes: "Subtle Micro-Interactions" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Designing secure, maintainable REST APIs and asynchronous server architectures.",
    iconName: "Server",
    items: [
      { name: "Node.js", highlight: true, notes: "Event Loop & Streams" },
      { name: "Express.js", highlight: true, notes: "Middleware & Routing" },
      { name: "RESTful API Design", highlight: true, notes: "Standardized Contracts" },
      { name: "Socket.io", highlight: false, notes: "Bi-directional WebSockets" },
      { name: "WebRTC", highlight: false, notes: "Peer-to-Peer Signaling" },
      { name: "JWT & Bcrypt", highlight: true, notes: "Stateless Auth & Password Hashing" },
      { name: "Helmet & CORS", highlight: false, notes: "HTTP Security Hardening" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Modeling relational and document-based data with transactional integrity.",
    iconName: "Database",
    items: [
      { name: "MongoDB & Mongoose", highlight: true, notes: "Document Schemas & Indexes" },
      { name: "PostgreSQL", highlight: true, notes: "Relational Queries & Constraints" },
      { name: "Prisma ORM", highlight: true, notes: "Type-Safe Migrations & Relations" },
      { name: "MySQL", highlight: false, notes: "Structured Relational Data" },
      { name: "Cloudinary CDN", highlight: false, notes: "Optimized Media Delivery" },
      { name: "Multer", highlight: false, notes: "Multipart Streaming" },
    ],
  },
  {
    title: "Payment Systems & Integrations",
    description: "Connecting secure checkout rails, billing lifecycles, and external APIs.",
    iconName: "CreditCard",
    items: [
      { name: "Razorpay Payment Gateway", highlight: true, notes: "Orders, UPI & Webhooks" },
      { name: "Stripe API", highlight: true, notes: "Global Card Processing" },
      { name: "OpenRouter & LLM APIs", highlight: false, notes: "AI Streaming Responses" },
      { name: "Nodemailer", highlight: false, notes: "Transactional Email Dispatch" },
      { name: "Axios Interceptors", highlight: false, notes: "Token Refresh & Error Handling" },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full-Stack Software Engineer (Independent & Contract)",
    organization: "Freelance & Product Engineering",
    location: "Remote / Hybrid",
    period: "2024 – Present",
    status: "Active",
    summary:
      "Designing and implementing production-grade full-stack systems, secure authentication pipelines, and transactional database architectures for real-world applications.",
    achievements: [
      "Engineered end-to-end multi-role web apps with role-based access control, secure cookie handling, and encrypted credentials.",
      "Integrated dual payment gateway infrastructures (Razorpay & Stripe) with cryptographic signature validation to ensure zero payment dropouts.",
      "Optimized client rendering and server endpoint response times through database indexing and efficient state slices.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
    ],
  },
  {
    id: "exp-2",
    role: "Full Stack Engineer & Academic Project Lead",
    organization: "Rajkiya Engineering College, Sonbhadra",
    location: "Uttar Pradesh, India",
    period: "2022 – 2025",
    status: "Completed",
    summary:
      "Led software engineering capstones and collaborative development teams building systems ranging from EdTech platforms to tuition management and real-time signaling.",
    achievements: [
      "Designed the relational schema and business logic for a multi-tenant tuition batch management system with 30+ validated API endpoints.",
      "Built StudyNotion, a full-stack learning platform handling course creation, video storage, and automated payment receipts.",
      "Maintained a 8.18 / 10.0 cumulative GPA throughout the B.Tech Computer Science and Engineering program while solving 250+ algorithmic problems.",
    ],
    technologies: [
      "C++",
      "JavaScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Git",
    ],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Google Cloud Study Jams 2023",
    organization: "Google Developer Student Clubs (GDSC) — REC Sonbhadra",
    date: "2023",
    summary:
      "Successfully completed the Google Cloud Study Jams curriculum covering cloud infrastructure, compute instances, cloud storage buckets, and IAM policy management.",
    verificationNote: "Verified certificate issued by GDSC Lead Adarsh Singh at Rajkiya Engineering College Sonbhadra.",
    category: "Certification",
  },
  {
    id: "ach-2",
    title: "Web Development Certification",
    organization: "Sololearn",
    date: "July 2024",
    credentialId: "CC-XNQPOVVQ",
    summary:
      "Awarded certificate of completion demonstrating comprehensive theoretical and practical understanding of modern web standards, semantic HTML, CSS architectures, and JavaScript.",
    verificationNote: "Official credential issued under Certificate ID CC-XNQPOVVQ.",
    category: "Certification",
  },
  {
    id: "ach-3",
    title: "B.Tech in Computer Science & Engineering (8.18 CGPA)",
    organization: "Rajkiya Engineering College, Sonbhadra",
    date: "2022 – 2025",
    summary:
      "Maintained high academic standing with an 8.18 CGPA over the complete curriculum, excelling in foundational disciplines including DBMS, Operating Systems, Computer Networks, and DSA.",
    verificationNote: "Verified institutional academic transcript.",
    category: "Academic",
  },
  {
    id: "ach-4",
    title: "250+ Algorithmic Problem Solving Milestones",
    organization: "LeetCode & GeeksforGeeks",
    date: "Continuous",
    summary:
      "Solved over 250 data structure and algorithm challenges covering Dynamic Programming, Graphs, Trees, Arrays, and String manipulation in C++ and JavaScript.",
    verificationNote: "Public profile verifiable on LeetCode (@rajank5038383).",
    category: "Problem Solving",
  },
];

export const toolkitData: ToolkitCategory[] = [
  {
    category: "Runtime & Frameworks",
    description: "Core platforms powering server execution and user interfaces.",
    tools: [
      { name: "Next.js (App Router)", description: "Full-stack React framework with Server Components & SSR", level: "Primary" },
      { name: "React 19 & 18", description: "Declarative UI component library", level: "Primary" },
      { name: "Node.js", description: "Asynchronous event-driven JavaScript runtime", level: "Primary" },
      { name: "Express.js", description: "Minimalist web framework for robust REST APIs", level: "Primary" },
    ],
  },
  {
    category: "Languages & Type Safety",
    description: "Core programming languages utilized in daily development.",
    tools: [
      { name: "TypeScript", description: "Strongly typed superset of JavaScript", level: "Primary" },
      { name: "JavaScript (ES6+)", description: "Modern dynamic language standards", level: "Primary" },
      { name: "C++", description: "Algorithmic problem solving and low-level understanding", level: "Fluent" },
      { name: "SQL", description: "Relational query language for complex joins & aggregations", level: "Fluent" },
    ],
  },
  {
    category: "Databases & ORMs",
    description: "Persistence layers ensuring data durability and high-performance querying.",
    tools: [
      { name: "MongoDB", description: "Document-oriented database with flexible schemas", level: "Primary" },
      { name: "PostgreSQL", description: "Robust open-source object-relational database system", level: "Primary" },
      { name: "Prisma ORM", description: "Next-generation type-safe Node.js & TypeScript ORM", level: "Primary" },
      { name: "Mongoose", description: "Elegant schema-based modeling for MongoDB", level: "Primary" },
    ],
  },
  {
    category: "Developer Tooling & Cloud",
    description: "Production deployment pipelines, testing utilities, and development workflow.",
    tools: [
      { name: "Git & GitHub", description: "Version control, branch protection, and collaborative workflow", level: "Primary" },
      { name: "Postman", description: "API design, environment variables, and automated integration tests", level: "Primary" },
      { name: "Vercel & Netlify", description: "Serverless cloud hosting and continuous deployment", level: "Primary" },
      { name: "Railway", description: "Production container and database hosting infrastructure", level: "Primary" },
    ],
  },
];

