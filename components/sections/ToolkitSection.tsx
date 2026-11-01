"use client";

import React from "react";
import { Check } from "lucide-react";
import { toolkitData } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";

export function ToolkitSection() {
  return (
    <section className="py-20 sm:py-28 bg-background transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Production Toolkit"
          title="Tools and environments driving daily engineering."
          description="Curated systems, runtimes, and developer tooling utilized to construct, test, and ship modern software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolkitData.map((category, index) => (
            <FadeIn key={category.category} direction="up" delay={index * 0.1}>
              <div className="h-full flex flex-col justify-between p-6 rounded-2xl bg-card border border-border shadow-xs hover:border-foreground-secondary/40 transition-all">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <h3 className="font-sans font-bold text-base sm:text-lg text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  <p className="text-xs text-foreground-secondary mb-5">
                    {category.description}
                  </p>

                  <div className="flex flex-col gap-3">
                    {category.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="p-3 rounded-xl bg-background border border-border flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sans font-semibold text-xs sm:text-sm text-foreground">
                            {tool.name}
                          </span>
                          <span className="font-mono text-[10px] uppercase font-bold text-accent bg-accent-soft px-2 py-0.5 rounded">
                            {tool.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-foreground-secondary leading-normal">
                          {tool.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-foreground-secondary">
                  <span>{category.tools.length} Technologies</span>
                  <span className="text-success font-medium flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
