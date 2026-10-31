import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function SectionHeader({
  kicker,
  title,
  description,
  centered = false,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-12 sm:mb-16",
        centered ? "items-center text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {kicker && (
        <div className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5577E8]" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#5577E8]">
            {kicker}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17243A]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
