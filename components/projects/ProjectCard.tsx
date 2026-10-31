"use client";

import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  return (
    <div className="group h-full flex flex-col justify-between bg-[#FFFFFF] rounded-2xl border border-[#E4E8F0] hover:border-[#5577E8]/40 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-6 sm:p-7 flex flex-col gap-4">
        {/* Top Badges & Category */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant="accent" fontMono>
            {project.category}
          </Badge>
          <span className="font-mono text-xs text-[#667085]">
            {project.timeline}
          </span>
        </div>

        {/* Title and Subtitle */}
        <div>
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#17243A] group-hover:text-[#5577E8] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-[#5577E8] mt-1 font-mono">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-sm text-[#667085] leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Key Metrics / Highlights if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#F8F9FC] border border-[#E4E8F0]">
            {project.metrics.slice(0, 2).map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="text-[11px] font-mono text-[#667085]">
                  {m.label}
                </span>
                <span className="text-xs font-semibold text-[#17243A] truncate">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-[#EEF2F8] text-[#17243A] text-xs font-mono"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 rounded-md bg-[#EEF2F8] text-[#667085] text-xs font-mono">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-6 py-4 bg-[#F8F9FC] border-t border-[#E4E8F0] flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#5577E8] hover:text-[#4364D5] cursor-pointer group-hover:translate-x-0.5 transition-transform"
        >
          <span>Deep-Dive Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#667085] hover:text-[#17243A] hover:bg-white rounded-lg border border-transparent hover:border-[#E4E8F0] transition-colors"
              aria-label={`GitHub source code for ${project.title}`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#667085] hover:text-[#5577E8] hover:bg-white rounded-lg border border-transparent hover:border-[#E4E8F0] transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
