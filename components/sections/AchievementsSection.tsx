"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { achievementsData } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E4E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Recognition & Milestones"
          title="Verified certifications & academic milestones."
          description="Formal credentials and competitive problem-solving milestones demonstrating continuous technical dedication."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {achievementsData.map((item, index) => (
            <FadeIn key={item.id} direction="up" delay={index * 0.1}>
              <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E4E8F0] shadow-xs hover:border-[#5577E8]/40 transition-all">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="accent" fontMono>
                      {item.category}
                    </Badge>
                    <span className="font-mono text-xs text-[#667085]">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg sm:text-xl text-[#17243A]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-[#5577E8]">
                    {item.organization}
                  </p>

                  <p className="text-sm text-[#667085] leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E4E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#21865B] font-medium">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span className="truncate">{item.verificationNote}</span>
                  </div>

                  {item.credentialId && (
                    <span className="font-mono text-xs text-[#667085] bg-[#F8F9FC] px-2 py-0.5 rounded border border-[#E4E8F0]">
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
