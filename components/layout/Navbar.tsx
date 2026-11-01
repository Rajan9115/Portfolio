"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-background border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
          >
            <div className="h-9 w-9 rounded-lg bg-accent text-white flex items-center justify-center font-mono font-bold text-sm tracking-tight shadow-xs transition-transform group-hover:scale-105">
              RJ
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-foreground">
                Rajan Jaiswal
              </span>
              <span className="font-mono text-[11px] text-foreground-secondary leading-none">
                Full-Stack Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-foreground-secondary hover:text-foreground hover:bg-background-secondary rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Availability Pill */}
            <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-xs font-mono text-foreground shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span>Available for Hire</span>
            </div>

            {/* Dark Mode Switch Button */}
            <ThemeToggle />

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-foreground bg-card border border-border hover:bg-background-secondary rounded-lg transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>Resume</span>
            </a>

            <a href="#contact">
              <Button size="sm" variant="primary">
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-foreground hover:bg-background-secondary rounded-lg border border-border"
              aria-label="Download Resume"
            >
              <FileText className="w-4 h-4 text-accent" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:bg-background-secondary rounded-lg border border-border transition-colors cursor-pointer"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-card shadow-md px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-foreground hover:bg-background-secondary rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-border flex flex-col gap-2.5">
            <div className="flex items-center gap-2 px-3 py-1 text-xs font-mono text-foreground-secondary">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span>Available for high-impact roles</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2 text-xs font-medium bg-card border border-border text-foreground rounded-lg hover:bg-background-secondary"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                Resume PDF
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium bg-accent text-white rounded-lg hover:opacity-90"
              >
                Contact Me
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
