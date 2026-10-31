import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "studynotion",
    slug: "studynotion-edtech",
    title: "StudyNotion — EdTech Platform",
    subtitle: "Scalable Full-Stack Learning & Course Commerce Engine",
    category: "Full Stack",
    shortDescription:
      "A comprehensive educational technology ecosystem featuring role-based workflows, course publishing, secure payments, and media delivery.",
    purpose:
      "To provide educators and students with an end-to-end learning environment that streamlines course authoring, catalog browsing, video lessons, and automated certification upon completion.",
    problem:
      "Many educational platforms struggle with disjointed video streaming, payment reconciliation delays, and insecure access control where student accounts can access unpurchased course assets.",
    contribution:
      "Engineered the full-stack architecture utilizing React 19 and Redux Toolkit on the client, backed by an Express and MongoDB REST API. Developed JWT-based role authentication (Student, Instructor, Admin), integrated Razorpay checkout with webhook verification, and built media pipelines using Cloudinary.",
    challenges: [
      "Securing course video assets and documents against unauthorized direct URL scraping.",
      "Synchronizing payment gateway webhooks with MongoDB transaction records to prevent double-charging or missed enrollments during network drops.",
      "Building a complex Redux Toolkit state structure for nested course sections, sub-sections, and user progression states.",
    ],
    architecture:
      "Client-server decoupled architecture. React 19 SPA communicates via Axios interceptors with an Express.js API gateway. Media assets are streamed directly from Cloudinary CDN while MongoDB stores normalized user, course, and payment models with Mongoose indexes.",
    results: [
      "Achieved sub-200ms API response times across core course catalog endpoints.",
      "100% verified payment settlement via cryptographically validated Razorpay webhook signatures.",
      "Role-isolated workflows allowing instructors to create, update, and publish multi-module courses with live analytics.",
    ],
    technologies: [
      "React 19",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Cloudinary",
      "JWT",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Architecture", value: "RESTful Decoupled" },
      { label: "Roles", value: "Student, Instructor, Admin" },
      { label: "Payment Gateway", value: "Razorpay Live Webhooks" },
      { label: "Media Engine", value: "Cloudinary CDN" },
    ],
    githubUrl: "https://github.com/Rajan9115/StudyNotion_EdTechApp",
    featured: true,
    status: "Completed",
    timeline: "Feb 2026",
    liveUrl: "https://study-notion-ed-tech-app-frontend.vercel.app/",
  },
  {
    id: "ai-chatbot",
    slug: "ai-contextual-assistant",
    title: "AI-Powered Contextual Assistant",
    subtitle: "Multi-Model Conversational Interface with Streaming Delivery",
    category: "Real-Time & AI",
    shortDescription:
      "A conversational AI application integrating the OpenRouter API for real-time model orchestration, markdown rendering, and persistent conversations.",
    purpose:
      "To provide an ergonomic interface for interacting with state-of-the-art LLMs with real-time response streaming and conversation history.",
    problem:
      "Standard LLM integrations often suffer from high initial latency when waiting for full response payloads rather than streaming tokens incrementally.",
    contribution:
      "Developed a responsive React chat UI with code highlighting and message state management. Integrated OpenRouter API on an Express backend to stream responses incrementally to the client.",
    challenges: [
      "Managing Server-Sent Events (SSE) streaming connections across network interruptions.",
      "Maintaining chat conversation token windows within acceptable payload limits.",
    ],
    architecture:
      "React client receives token chunks via stream reader. Express backend handles OpenRouter authentication, API key rotation safeguards, and prompt formatting.",
    results: [
      "Immediate token streaming under 400ms time-to-first-token.",
      "Multi-model flexibility without changing client code.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "OpenRouter API",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Streaming", value: "Server-Sent Events" },
      { label: "TTFT", value: "<400ms First Token" },
    ],
    githubUrl: "https://github.com/Rajan9115/Chat_bot",
    featured: false,
    status: "Completed",
    timeline: "Apr 2025",
    liveUrl: "https://chat-bot-rho-pied.vercel.app",
  },
  {
    id: "spicemitra",
    slug: "spicemitra-ecommerce",
    title: "Spicemitra — Commercial Merchant Platform",
    subtitle: "Enterprise E-Commerce Engine with Dual Payment Gateways",
    category: "Full Stack",
    shortDescription:
      "A high-reliability commercial e-commerce solution with TypeScript-driven backend services, inventory control, and dual-rail payment processing.",
    purpose:
      "Built to empower direct-to-consumer and B2B commerce with structured product catalogs, secure multi-provider checkout, and real-time inventory tracking.",
    problem:
      "Cross-border and domestic payments often require disparate gateway handling, while inventory inconsistencies during high-concurrency cart checkouts lead to stock discrepancies.",
    contribution:
      "Architected the backend in strict TypeScript with Express 5, implementing dual gateway integration (Razorpay for domestic UPI/NetBanking and Stripe for card payments). Designed MongoDB schemas with transactional safeguards, Helmet security headers, cookie-parser authentication, and Multer multipart file processing.",
    challenges: [
      "Harmonizing two distinct payment lifecycle flows (Stripe payment intents vs. Razorpay order-id generation and signature hashing).",
      "Implementing atomic stock decrement operations during checkout to prevent overselling.",
      "Securing administrative routes and customer profiles with HTTP-only signed cookies and CORS policies.",
    ],
    architecture:
      "Layered architecture with TypeScript route controllers, domain service layers, and Mongoose data access objects. Integrated Nodemailer for transactional email triggers and Cloudinary for multi-resolution product photography.",
    results: [
      "Zero stock concurrency anomalies through atomic MongoDB update operators.",
      "Unified checkout abstraction supporting both domestic (INR) and global payment methods.",
      "Hardened backend with automated audit logging, rate limiting, and HTTP security headers.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Stripe",
      "Cloudinary",
      "Multer",
      "Nodemailer",
    ],
    metrics: [
      { label: "Type Safety", value: "100% Strict TypeScript" },
      { label: "Gateways", value: "Razorpay & Stripe" },
      { label: "Security", value: "Helmet + HTTP-Only Cookies" },
    ],
    githubUrl: "https://github.com/Rajan9115",
    featured: true,
    status: "Production Ready",
    timeline: "Jul 2026",
  },
  {
    id: "tuition-teacher",
    slug: "tuition-batch-management",
    title: "Tuition Management & Batch Ledger",
    subtitle: "Relational Batch Management & Multi-Tenant Billing System",
    category: "Cloud & Systems",
    shortDescription:
      "A PostgreSQL and Prisma-powered academic management platform featuring dynamic per-student tuition fee agreements and material distribution.",
    purpose:
      "To eliminate administrative overhead for coaching institutes and independent tutors by automating batch enrollments, personalized fee tracking, and study material delivery.",
    problem:
      "Tutors frequently negotiate individual discount rates per student that diverge from the standard batch base fee. Tracking these agreements and monthly payment statuses in spreadsheets leads to missed revenue and friction.",
    contribution:
      "Designed and implemented the PostgreSQL relational database schema using Prisma ORM with `@prisma/adapter-pg`. Engineered phone + bcrypt authentication, unique batch code invite generators, per-student agreed-fee calculation logic, and batch material attachments.",
    challenges: [
      "Devising a clean schema constraint preventing duplicate student enrollments in the same batch while allowing dynamic per-enrollment price overrides.",
      "Transitioning legacy document prototypes to a strongly typed Prisma relational schema with zero schema drift.",
      "Developing a comprehensive 30+ endpoint Postman test collection with automated assertion scripts.",
    ],
    architecture:
      "Relational backend utilizing PostgreSQL and Prisma ORM. Mobile client written in Flutter connects via standard REST endpoints with Bearer JWT tokens. Endpoints support role-guarded access for Teachers and Students.",
    results: [
      "Eliminated manual fee reconciliation through automated monthly fee status ledgers.",
      "Atomic composite constraints (`studentId_batchId`) guaranteeing database-level enrollment integrity.",
      "Fully documented API surface verified with Postman test suites and environment variables.",
    ],
    technologies: [
      "PostgreSQL",
      "Prisma ORM",
      "Node.js",
      "Express.js",
      "JWT",
      "Bcrypt",
      "Flutter",
    ],
    metrics: [
      { label: "Database", value: "PostgreSQL + Prisma" },
      { label: "API Surface", value: "30+ REST Endpoints" },
      { label: "Integrity", value: "Unique Composite Keys" },
    ],
    githubUrl: "https://github.com/Rajan9115/",
    featured: true,
    status: "Completed",
    timeline: "Jun 2026",
  },
  {
    id: "real-time-tracker",
    slug: "real-time-tracker",
    title: "Real-Time Tracker — Live Location Tracking",
    subtitle: "Real-Time Location Sharing & Multi-User Map Tracking",
    category: "Real-Time & AI",
    shortDescription:
      "A real-time location tracking web application that allows multiple users to share and view each other's live locations on an interactive map using Socket.IO and Leaflet.js.",
    purpose:
      "To provide a simple, real-time location-sharing platform where multiple users can instantly share their geographic location and monitor other connected users on a live interactive map.",
    problem:
      "Traditional location-sharing solutions often introduce unnecessary complexity and delays. Managing multiple connected users, synchronizing location updates, and keeping map markers accurate when users join or disconnect requires reliable real-time communication.",
    contribution:
      "Developed a real-time location tracking application using Node.js, Express.js, Socket.IO, EJS, and Leaflet.js. Implemented browser-based geolocation tracking, real-time location broadcasting, dynamic map markers, multi-user synchronization, and automatic marker removal when users disconnect.",
    challenges: [
      "Synchronizing live location updates across multiple connected users through Socket.IO.",
      "Handling user connections and disconnections while keeping map markers synchronized.",
      "Ensuring newly connected users immediately receive the locations of users who are already online.",
      "Managing browser Geolocation API permissions and location updates efficiently.",
    ],
    architecture:
      "The application uses Node.js and Express.js as the backend server, with Socket.IO managing bidirectional real-time communication. The browser Geolocation API captures user coordinates and sends location updates through Socket.IO. The server broadcasts updated locations to connected clients, while EJS renders the interface and Leaflet.js displays users as interactive markers on the map. When a user disconnects, their marker is automatically removed from the connected clients' maps.",
    results: [
      "Enabled real-time location sharing between multiple connected users.",
      "Implemented live map updates using Socket.IO and Leaflet.js.",
      "Newly connected users can instantly see the locations of already connected users.",
      "Automatically removes map markers when users disconnect.",
      "Created an interactive multi-user location tracking experience without requiring account registration.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Socket.IO",
      "EJS",
      "Leaflet.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Geolocation API",
    ],
    metrics: [
      { label: "Communication", value: "Real-Time Socket.IO" },
      { label: "Mapping", value: "Leaflet.js" },
      { label: "Location Source", value: "Browser Geolocation API" },
    ],
    githubUrl: "https://github.com/Rajan9115",
    featured: true,
    status: "Active Project",
    timeline: "2026",
    liveUrl: "https://realtime-tracker-sjqa.onrender.com/",
  },
  {
    id: "mini-drive",
    slug: "mini-drive-cloud-storage",
    title: "Mini Drive — Cloud Storage Vault",
    subtitle: "Secure File Upload, Storage & Granular Access System",
    category: "Cloud & Systems",
    shortDescription:
      "A cloud file storage application with JWT authentication, chunked file handling, and user-isolated file hierarchy.",
    purpose:
      "To provide individuals with a lightweight, secure personal cloud storage vault with file preview, folder organization, and direct downloads.",
    problem:
      "Traditional cloud file apps expose storage buckets directly or lack strict ownership validation at the server boundary.",
    contribution:
      "Engineered secure RESTful APIs with Express and MongoDB for managing file metadata, MIME types, and file size quotas. Implemented JWT middleware protecting every file retrieval endpoint.",
    challenges: [
      "Validating MIME types server-side to prevent malicious file uploads.",
      "Designing an efficient MongoDB schema for folder hierarchy and parent-child file relationships.",
    ],
    architecture:
      "Express.js API with Multer multipart streaming. File metadata indexed in MongoDB; files stored in secure storage partitions accessible only via signed tokens.",
    results: [
      "100% authenticated file isolation with zero cross-tenant data leaks.",
      "Seamless upload and retrieval of documents, images, and archives.",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
    metrics: [
      { label: "Auth", value: "JWT Middleware" },
      { label: "Security", value: "MIME Whitelist" },
    ],
    githubUrl: "https://github.com/Rajan9115/",
    featured: false,
    status: "Completed",
    timeline: "Sep 2025",
  },

];

