"use client";

import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#17243A]/40 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#E4E8F0] shadow-2xl flex flex-col overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#E4E8F0] bg-[#F8F9FC] flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="accent" fontMono>
                {project.category}
              </Badge>
              <Badge variant="outline" fontMono>
                {project.timeline}
              </Badge>
              <Badge variant="success" fontMono>
                {project.status}
              </Badge>
            </div>
            <h2
              id="modal-title"
              className="font-sans font-extrabold text-2xl sm:text-3xl text-[#17243A]"
            >
              {project.title}
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#5577E8] font-medium">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#667085] hover:text-[#17243A] hover:bg-white rounded-xl border border-transparent hover:border-[#E4E8F0] transition-colors cursor-pointer"
            aria-label="Close modal dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-sm sm:text-base text-[#667085]">
          {/* Overview & Purpose */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#F8F9FC] border border-[#E4E8F0] flex flex-col gap-2">
              <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#17243A] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#5577E8]" />
                Project Purpose
              </h4>
              <p className="text-sm leading-relaxed">{project.purpose}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8F9FC] border border-[#E4E8F0] flex flex-col gap-2">
              <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#17243A] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#5577E8]" />
                The Problem Solved
              </h4>
              <p className="text-sm leading-relaxed">{project.problem}</p>
            </div>
          </div>

          {/* Rajan's Contribution */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans font-bold text-lg text-[#17243A] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#5577E8]" />
              <span>Rajan&apos;s Engineering Contribution</span>
            </h4>
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E4E8F0] shadow-xs text-sm sm:text-base leading-relaxed text-[#17243A]">
              {project.contribution}
            </div>
          </div>

          {/* Architecture Details */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans font-bold text-lg text-[#17243A] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#5577E8]" />
              <span>System Architecture</span>
            </h4>
            <div className="p-5 rounded-2xl bg-[#EEF2F8] border border-[#E4E8F0] text-sm leading-relaxed text-[#17243A]">
              {project.architecture}
            </div>
          </div>

          {/* Technical Challenges & Solutions */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans font-bold text-lg text-[#17243A]">
              Key Engineering Challenges & Overcomes
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#E4E8F0] flex items-start gap-3"
                >
                  <span className="font-mono text-xs font-bold text-[#5577E8] bg-[#E7EDFF] px-2 py-0.5 rounded-md mt-0.5">
                    0{idx + 1}
                  </span>
                  <p className="text-sm text-[#17243A] leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Verifiable Results */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans font-bold text-lg text-[#17243A]">
              Verifiable Outcomes & Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.results.map((result, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8F9FC] border border-[#E4E8F0] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#21865B] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#17243A] leading-snug">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack Matrix */}
          <div className="flex flex-col gap-3">
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-[#667085]">
              Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#F8F9FC] border border-[#E4E8F0] text-xs sm:text-sm font-mono text-[#17243A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-[#F8F9FC] border-t border-[#E4E8F0] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="secondary">
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </Button>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="primary">
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </Button>
              </a>
            )}
          </div>

          <Button size="sm" variant="outline" onClick={onClose}>
            Close Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}
