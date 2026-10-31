import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success" | "outline" | "subtle";
  size?: "sm" | "md";
  fontMono?: boolean;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  fontMono = false,
  className,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#FFFFFF] text-[#17243A] border-[#E4E8F0] shadow-xs",
    accent: "bg-[#E7EDFF] text-[#5577E8] border-[#5577E8]/20 font-medium",
    success: "bg-[#EBF7F0] text-[#21865B] border-[#21865B]/20 font-medium",
    outline: "bg-transparent text-[#667085] border-[#E4E8F0]",
    subtle: "bg-[#EEF2F8] text-[#17243A] border-transparent",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors",
        fontMono && "font-mono tracking-tight",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
