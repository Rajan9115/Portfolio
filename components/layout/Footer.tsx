"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-card border-t border-border mt-auto transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-border">
          {/* Identity Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-accent text-white flex items-center justify-center font-mono font-bold text-xs tracking-tight shadow-xs">
                RJ
              </div>
              <span className="font-sans font-bold text-lg tracking-tight text-foreground">
                Rajan Jaiswal
              </span>
            </div>
            <p className="text-sm text-foreground-secondary leading-relaxed max-w-md">
              Full Stack Software Engineer specializing in resilient systems,
              Next.js, React, Node.js, and modern cloud architectures. Built with
              production rigor and light editorial craftsmanship.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-foreground-secondary">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span>Based in Gorakhpur, UP — Open to Remote & Worldwide Relocation</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 text-sm text-foreground-secondary">
              <a href="#about" className="hover:text-accent transition-colors">
                About & Background
              </a>
              <a href="#skills" className="hover:text-accent transition-colors">
                Technical Expertise
              </a>
              <a href="#projects" className="hover:text-accent transition-colors">
                Featured Projects
              </a>
              <a href="#experience" className="hover:text-accent transition-colors">
                Experience & Roles
              </a>
              <a href="#achievements" className="hover:text-accent transition-colors">
                Certifications & Awards
              </a>
              <a href="#contact" className="hover:text-accent transition-colors">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-foreground">
              Connect & Verify
            </h4>
            <div className="flex flex-col gap-2 text-sm text-foreground-secondary">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-accent" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-accent" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <LeetCodeIcon className="w-4 h-4 text-accent" />
                <span>LeetCode (250+ solved)</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-secondary">
          <p>© 2026 Rajan Jaiswal. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px]">
              Next.js 16 • Tailwind CSS 4 • Motion
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-accent transition-colors cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
