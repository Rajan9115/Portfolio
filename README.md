# Rajan Jaiswal — Developer Portfolio

A modern, responsive, and performance-focused personal portfolio built with **Next.js, TypeScript, and Tailwind CSS**. Designed to showcase my technical expertise, engineering projects, professional experience, and software development journey through a clean, premium user experience.

## 🌐 Overview

This portfolio serves as my professional digital presence, highlighting my work in software engineering, mobile application development, backend systems, and full-stack product development.

The website focuses on clean visual design, thoughtful interactions, responsive layouts, and well-structured project case studies.

## ✨ Features

- **Modern UI/UX:** Clean, premium light-theme design with a consistent blue accent palette.
- **Fully Responsive:** Optimized for mobile, tablet, laptop, and desktop screens.
- **Project Showcase:** Detailed project cards with descriptions, technology stacks, and engineering case studies.
- **Professional Experience:** Dedicated section highlighting work experience and contributions.
- **Technical Skills:** Organized presentation of programming languages, frameworks, databases, and development tools.
- **Smooth Animations:** Subtle transitions and scroll-based interactions.
- **SEO Optimized:** Metadata, semantic HTML, sitemap, and Open Graph support.
- **Resume Download:** Direct access to my professional resume.
- **Contact Section:** Easy access to professional contact and social profiles.
- **Reusable Architecture:** Modular components and maintainable TypeScript code.

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### UI & Animations
- Motion for React
- Lucide React
- shadcn/ui

### Forms & Validation
- React Hook Form
- Zod
- Resend (if configured for contact delivery)

### Development Tools
- Git
- GitHub
- ESLint
- VS Code

## 🎨 Design System

The portfolio follows a **Light Editorial + Modern SaaS** design direction.

| Design Element | Value |
|---|---|
| Primary Background | `#F8F9FC` |
| Secondary Background | `#EEF2F8` |
| Card Background | `#FFFFFF` |
| Primary Text | `#17243A` |
| Secondary Text | `#667085` |
| Accent Blue | `#5577E8` |
| Soft Blue | `#E7EDFF` |
| Border | `#E4E8F0` |
| Primary Font | Geist Sans |
| Monospace Font | JetBrains Mono |

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── achievements/
│   ├── icons/
│   └── resume/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── projects/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── projects/
│   │   ├── ui/
│   │   └── animations/
│   │
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   └── types/
│
├── AGENTS.md
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (LTS recommended)
- npm, pnpm, or yarn
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Rajan9115/portfolio.git
```

### 2. Navigate to the project

```bash
cd portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root if the application requires environment variables.

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

Only configure variables required by the actual application. Never commit real credentials.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

Run lint checks:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npx tsc --noEmit
```

## 📌 Featured Projects

The portfolio showcases selected engineering projects, including:

- **Chat bot:** AI chatbot webapp.
- **Studynotion:** Education-focused software platform.
- **Screen sharing app:** Screen sharing webapp using chrome.
- **Real-Time Tracker:** Live multi-user location tracking application using Socket.IO and Leaflet.js.
- **UP Police Election Logistics App:** Application associated with election logistics.

Each project highlights its purpose, technical architecture, implementation challenges, and my contributions.

## 📱 Responsive Design

The interface is designed to provide a consistent experience across:

- Mobile devices
- Tablets
- Laptops
- Desktop displays
- Wide-screen monitors

## 🔒 Code Quality & Engineering Standards

This project follows maintainable software engineering practices:

- Strict TypeScript typing.
- Reusable and modular components.
- Separation of content and presentation.
- Server Components by default.
- Accessible UI patterns.
- Optimized images and fonts.
- Consistent design tokens.
- Responsive-first implementation.
- SEO and performance best practices.

Refer to [AGENTS.md](./AGENTS.md) for detailed AI development and engineering guidelines.

## 📬 Connect With Me

**Rajan Jaiswal — Software Developer**

- GitHub: [@Rajan9115](https://github.com/Rajan9115)
- Portfolio: [https://rajanportfolio-omega.vercel.app/](#)
- Email: [rajank5038383@gmail.com].

## 📄 License

This project is intended to showcase my personal work and professional portfolio. All rights to original project content, branding, and personal assets remain with their respective owners.

---

**Designed and developed with passion by Rajan Jaiswal.**