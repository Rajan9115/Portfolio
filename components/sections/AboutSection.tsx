"use client";

import React from "react";
import {
  GraduationCap,
  Layers,
  ShieldCheck,
  Zap,
  Cpu,
  Target,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Type Safety & Resilient Contracts",
    description:
      "Embracing strict TypeScript and runtime validation to eliminate entire classes of bugs before they reach production.",
  },
  {
    icon: Layers,
    title: "Relational & Document Modeling",
    description:
      "Architecting normalized schemas in PostgreSQL via Prisma, and high-throughput document structures in MongoDB with transactional safety.",
  },
  {
    icon: Zap,
    title: "Payment & Webhook Reliability",
    description:
      "Integrating production payment gateways (Razorpay, Stripe) with cryptographically validated webhooks and idempotent event handling.",
  },
  {
    icon: Target,
    title: "Performance & Accessibility",
    description:
      "Delivering high Core Web Vitals, semantic landmarks, zero layout shifts, and accessible keyboard navigation by design.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-card border-y border-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Background & Philosophy"
          title="Engineering resilient software with deliberate craftsmanship."
          description="A full-stack software engineer blending formal computer science fundamentals with hands-on production application development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-foreground-secondary leading-relaxed text-base sm:text-lg">
            <FadeIn direction="up">
              <p>
                Hello! I am{" "}
                <strong className="text-foreground font-semibold">
                  Rajan Jaiswal
                </strong>
                , a Full Stack Software Engineer based in Gorakhpur, Uttar Pradesh. I
                graduated with a Bachelor of Technology in Computer Science and
                Engineering from{" "}
                <strong className="text-foreground font-semibold">
                  Rajkiya Engineering College, Sonbhadra
                </strong>{" "}
                with a cumulative grade point average of{" "}
                <span className="text-accent font-bold font-mono">8.18 / 10.0</span>.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <p>
                My journey into software engineering started with low-level
                fundamentals and algorithmic rigor in C++, where I solved over{" "}
                <strong className="text-foreground font-semibold">
                  250+ data structure and algorithm problems
                </strong>{" "}
                across LeetCode and GeeksforGeeks. This strong grounding in time
                complexity, memory management, and data structures informs how I
                design modern web applications today.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p>
                In production, I specialize in the modern JavaScript and TypeScript
                ecosystems. I architect full-stack applications with{" "}
                <span className="text-foreground font-semibold">Next.js and React</span>{" "}
                on the frontend and{" "}
                <span className="text-foreground font-semibold">Node.js, Express, and PostgreSQL/MongoDB</span>{" "}
                on the backend. Whether building complex multi-role platforms like
                StudyNotion, commercial e-commerce engines like Spicemitra, or
                dynamic tuition management systems, I focus on clean code boundaries,
                reliable payment processing, and resilient data models.
              </p>
            </FadeIn>

            {/* Education Spotlight Card */}
            <FadeIn direction="up" delay={0.3}>
              <div className="mt-4 p-6 rounded-2xl bg-background border border-border shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-card border border-border text-accent">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-sans font-bold text-base sm:text-lg text-foreground">
                        {personalInfo.education.institution}
                      </h4>
                      <Badge variant="accent" fontMono>
                        CGPA: {personalInfo.education.cgpa}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground font-medium">
                      {personalInfo.education.degree}
                    </p>
                    <p className="text-xs text-foreground-secondary font-mono">
                      {personalInfo.education.period} • {personalInfo.education.location}
                    </p>
                    <div className="pt-3 flex flex-wrap gap-1.5">
                      {personalInfo.education.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 text-xs rounded-md bg-card border border-border text-foreground-secondary"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Engineering Principles */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="font-sans font-bold text-xl text-foreground mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-accent" />
              <span>Core Engineering Principles</span>
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {PRINCIPLES.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <FadeIn key={principle.title} direction="left" delay={0.1 * index}>
                    <div className="p-5 rounded-2xl bg-card border border-border hover:border-accent/40 transition-all shadow-xs group">
                      <div className="flex items-start gap-3.5">
                        <div className="p-2.5 rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h4 className="font-sans font-bold text-base text-foreground">
                            {principle.title}
                          </h4>
                          <p className="text-sm text-foreground-secondary leading-relaxed">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
