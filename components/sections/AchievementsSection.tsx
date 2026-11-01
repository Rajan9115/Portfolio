"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { achievementsData } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 sm:py-28 bg-card border-b border-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Recognition & Milestones"
          title="Verified certifications & academic milestones."
          description="Formal credentials and competitive problem-solving milestones demonstrating continuous technical dedication."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievementsData.map((item, index) => (
            <FadeIn key={item.id} direction="up" delay={index * 0.1}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-card border border-border shadow-xs hover:border-accent/40 transition-all">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="accent" fontMono>
                      {item.category}
                    </Badge>
                    <span className="font-mono text-xs text-foreground-secondary">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg sm:text-xl text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-accent">
                    {item.organization}
                  </p>

                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-success font-medium">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span className="truncate">{item.verificationNote}</span>
                  </div>

                  {item.credentialId && (
                    <span className="font-mono text-xs text-foreground-secondary bg-background px-2 py-0.5 rounded border border-border">
                      ID: {item.credentialId}
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
