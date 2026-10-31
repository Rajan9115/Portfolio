export type ProjectCategory =
  | "All"
  | "Full Stack"
  | "Cloud & Systems"
  | "Real-Time & AI";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Full Stack" | "Cloud & Systems" | "Real-Time & AI";
  shortDescription: string;
  purpose: string;
  problem: string;
  contribution: string;
  challenges: string[];
  architecture: string;
  results: string[];
  technologies: string[];
  metrics?: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: "Production Ready" | "Active Project" | "Completed";
  timeline: string;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
  notes?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  status: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  credentialId?: string;
  summary: string;
  verificationNote: string;
  category: "Certification" | "Academic" | "Problem Solving";
}

export interface ToolkitCategory {
  category: string;
  description: string;
  tools: {
    name: string;
    description: string;
    level: "Primary" | "Production" | "Fluent";
  }[];
}
