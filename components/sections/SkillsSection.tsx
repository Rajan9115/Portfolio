"use client";

import React from "react";
import { Layout, Server, Database, CreditCard, Sparkles } from "lucide-react";
import { skillCategories } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  Server,
  Database,
  CreditCard,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Technical Capabilities"
          title="Battle-tested skills across the entire web stack."
          description="A balanced foundation in frontend interfaces, scalable backend systems, database modeling, and third-party payment rails."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = ICON_MAP[category.iconName] || Server;
            return (
              <FadeIn key={category.title} direction="up" delay={index * 0.1}>
                <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E4E8F0] shadow-xs hover:border-[#CBD5E1] transition-all">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="p-3 rounded-xl bg-[#E7EDFF] text-[#5577E8]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-sans font-bold text-lg sm:text-xl text-[#17243A]">
                          {category.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#667085]">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Items Grid */}
                    <div className="mt-6 flex flex-col gap-2.5">
                      {category.items.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FC] border border-[#E4E8F0] hover:bg-[#EEF2F8] transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-2 w-2 rounded-full ${
                                skill.highlight ? "bg-[#5577E8]" : "bg-[#CBD5E1]"
                              }`}
                            />
                            <span className="font-sans font-medium text-sm text-[#17243A]">
                              {skill.name}
                            </span>
                          </div>

                          {skill.notes && (
                            <span className="font-mono text-xs text-[#667085]">
                              {skill.notes}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E4E8F0] flex items-center justify-between text-xs text-[#667085]">
                    <span className="font-mono">
                      {category.items.length} Core Competencies
                    </span>
                    <span className="text-[#5577E8] font-medium">
                      Production Ready
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
