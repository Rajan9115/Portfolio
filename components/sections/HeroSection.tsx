"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowDown,
  Download,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32 bg-[#F8F9FC]">
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#E4E8F0 1px, transparent 1px), radial-gradient(#E4E8F0 1px, #F8F9FC 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7">
            {/* Status Pill */}
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E4E8F0] shadow-xs text-xs font-mono text-[#17243A] w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#21865B] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#21865B]" />
                </span>
                <span className="font-medium text-[#17243A]">
                  Full Stack Software Engineer
                </span>
                <span className="text-[#CBD5E1]">•</span>
                <span className="text-[#667085] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#5577E8]" />
                  Gorakhpur, UP
                </span>
              </div>
            </FadeIn>

            {/* Name & Headline */}
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#17243A] leading-[1.1]">
                  Rajan Jaiswal
                </h1>
                <p className="text-xl sm:text-2xl font-semibold text-[#5577E8] tracking-tight">
                  Crafting resilient web architectures & modern full-stack systems.
                </p>
              </div>
            </FadeIn>

            {/* Introduction Copy */}
            <FadeIn direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
                Computer Science graduate (REC Sonbhadra, CGPA 8.18) specializing in{" "}
                <span className="text-[#17243A] font-semibold">
                  Next.js, React, Node.js, TypeScript, and relational/document databases
                </span>
                . Dedicated to building production-grade web platforms with clean
                boundaries, scalable payment flows, and thoughtful user experiences.
              </p>
            </FadeIn>

            {/* CTA Group */}
            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href="#projects">
                  <Button size="lg" variant="primary">
                    <span>Explore Featured Projects</span>
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                </a>

                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="secondary">
                    <Download className="w-4 h-4 text-[#5577E8]" />
                    <span>Download Resume</span>
                  </Button>
                </a>

                {/* Social Icon Links */}
                <div className="flex items-center gap-2 pl-1 sm:pl-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-[#667085] hover:text-[#17243A] bg-white border border-[#E4E8F0] hover:border-[#CBD5E1] rounded-xl transition-all shadow-xs"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-[#667085] hover:text-[#5577E8] bg-white border border-[#E4E8F0] hover:border-[#CBD5E1] rounded-xl transition-all shadow-xs"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-[#667085] hover:text-[#17243A] bg-white border border-[#E4E8F0] hover:border-[#CBD5E1] rounded-xl transition-all shadow-xs"
                    aria-label="LeetCode Profile"
                  >
                    <LeetCodeIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Quick Proof Metrics Strip */}
            <FadeIn direction="up" delay={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E4E8F0] mt-2">
                {personalInfo.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col bg-white p-3 rounded-xl border border-[#E4E8F0] shadow-2xs"
                  >
                    <span className="font-mono text-xl sm:text-2xl font-bold text-[#17243A]">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-[#17243A]">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-[#667085] truncate">
                      {stat.detail}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Editorial Visual & Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeIn direction="left" delay={0.3} className="w-full max-w-md">
              <div className="relative">
                {/* Background decorative card frame */}
                <div className="absolute -inset-3 bg-[#EEF2F8] rounded-3xl -rotate-1 border border-[#E4E8F0]" />

                {/* Main Card */}
                <div className="relative bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border border-[#E4E8F0] shadow-sm">
                  {/* Portrait Container */}
                  <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#EEF2F8] border border-[#E4E8F0]">
                    <Image
                      src={personalInfo.profileImage}
                      alt="Rajan Jaiswal — Full Stack Software Engineer"
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />

                    {/* Gradient Overlay for subtle text contrast */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17243A]/80 via-transparent to-transparent p-4 flex flex-col justify-end text-white">
                      <span className="font-mono text-xs text-[#E7EDFF] tracking-wider uppercase">
                        Computer Science Graduate
                      </span>
                      <span className="font-sans font-bold text-lg text-white">
                        Rajkiya Engineering College
                      </span>
                    </div>
                  </div>

                  {/* Editorial Card Footer */}
                  <div className="mt-4 pt-3 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-xs text-[#667085]">
                      <span className="font-mono font-medium text-[#17243A]">
                        Current Focus
                      </span>
                      <span className="text-[#21865B] font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Production Systems
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="subtle" fontMono>Next.js 16</Badge>
                      <Badge variant="subtle" fontMono>TypeScript</Badge>
                      <Badge variant="subtle" fontMono>Node.js</Badge>
                      <Badge variant="subtle" fontMono>PostgreSQL</Badge>
                      <Badge variant="subtle" fontMono>Prisma</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
