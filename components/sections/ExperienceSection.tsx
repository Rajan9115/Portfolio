"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-background transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Track Record"
          title="Professional experience & engineering leadership."
          description="A track record of designing, shipping, and maintaining web systems with high dependability."
        />

        <div className="relative border-l-2 border-border ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {experienceData.map((item, index) => (
            <FadeIn key={item.id} direction="up" delay={index * 0.15}>
              <div className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 h-8 w-8 rounded-full bg-card border-2 border-accent text-accent flex items-center justify-center shadow-xs transition-transform group-hover:scale-110">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xs hover:border-foreground-secondary/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border">
                    <div>
                      <h3 className="font-sans font-bold text-lg sm:text-xl text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-accent">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-foreground-secondary flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {item.period}
                      </span>
                      <span className="font-mono text-xs text-foreground-secondary flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-foreground-secondary" />
                        {item.location}
                      </span>
                      <Badge
                        variant={item.status === "Active" ? "accent" : "subtle"}
                        fontMono
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-foreground-secondary leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-foreground leading-snug">
                          {ach}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Strip */}
                  <div className="mt-6 pt-4 border-t border-border flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono text-foreground-secondary mr-2">
                      Technologies:
                    </span>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-background-secondary text-foreground text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
