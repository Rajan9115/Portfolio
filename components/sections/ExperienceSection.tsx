"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Track Record"
          title="Professional experience & engineering leadership."
          description="A track record of designing, shipping, and maintaining web systems with high dependability."
        />

        <div className="relative border-l-2 border-[#E4E8F0] ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {experienceData.map((item, index) => (
            <FadeIn key={item.id} direction="up" delay={index * 0.15}>
              <div className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 h-8 w-8 rounded-full bg-[#FFFFFF] border-2 border-[#5577E8] text-[#5577E8] flex items-center justify-center shadow-xs transition-transform group-hover:scale-110">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E4E8F0] shadow-xs hover:border-[#CBD5E1] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E4E8F0]">
                    <div>
                      <h3 className="font-sans font-bold text-lg sm:text-xl text-[#17243A]">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-[#5577E8]">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-[#667085] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#5577E8]" />
                        {item.period}
                      </span>
                      <span className="font-mono text-xs text-[#667085] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#667085]" />
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

                  <p className="mt-4 text-sm sm:text-base text-[#667085] leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="mt-5 space-y-2.5">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#21865B] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-[#17243A] leading-snug">
                          {ach}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Strip */}
                  <div className="mt-6 pt-4 border-t border-[#E4E8F0] flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono text-[#667085] mr-2">
                      Technologies:
                    </span>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#EEF2F8] text-[#17243A] text-xs font-mono"
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
