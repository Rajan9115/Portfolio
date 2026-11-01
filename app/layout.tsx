import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajanjaiswal.dev"),
  title: {
    default: "Rajan Jaiswal — Full Stack Software Engineer",
    template: "%s | Rajan Jaiswal",
  },
  description:
    "Personal developer portfolio of Rajan Jaiswal. Full Stack Software Engineer specializing in Next.js, React, Node.js, TypeScript, and resilient systems.",
  keywords: [
    "Rajan Jaiswal",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Engineer",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Rajan Jaiswal", url: "https://github.com/Princeofnorth06" }],
  creator: "Rajan Jaiswal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajanjaiswal.dev",
    title: "Rajan Jaiswal — Full Stack Software Engineer",
    description:
      "Crafting resilient web architectures, modern APIs, and high-performance digital products.",
    siteName: "Rajan Jaiswal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Jaiswal — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in Next.js, React, Node.js, TypeScript, and resilient cloud architectures.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rajan Jaiswal",
    url: "https://rajanjaiswal.dev",
    jobTitle: "Full Stack Software Engineer",
    alumnusOf: {
      "@type": "CollegeOrUniversity",
      name: "Rajkiya Engineering College, Sonbhadra",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Web Development",
    ],
    sameAs: [
      "https://github.com/Princeofnorth06",
      "https://www.linkedin.com/in/rajan-kumar-390772274/",
      "https://leetcode.com/u/rajank5038383/",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground selection:bg-accent-soft selection:text-foreground flex flex-col font-sans transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
