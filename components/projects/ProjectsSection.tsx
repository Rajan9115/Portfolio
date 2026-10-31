"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projectsData";
import { Project, ProjectCategory } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { FadeIn } from "@/components/animations/FadeIn";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Full Stack",
  "Cloud & Systems",
  "Real-Time & AI",
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E4E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeader
            kicker="Featured Engineering"
            title="Production systems & architectural case studies."
            description="Explore real-world platforms built with strict type safety, relational integrity, dual-rail payments, and real-time sockets."
            className="mb-0"
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#F8F9FC] border border-[#E4E8F0] w-fit">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#FFFFFF] text-[#5577E8] shadow-xs font-semibold border border-[#E4E8F0]"
                    : "text-[#667085] hover:text-[#17243A] hover:bg-[#EEF2F8]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={index * 0.1}>
              <ProjectCard
                project={project}
                onOpenCaseStudy={(proj) => setSelectedProject(proj)}
              />
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
