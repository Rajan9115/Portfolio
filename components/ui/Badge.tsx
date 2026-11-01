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
    default: "bg-card text-foreground border-border shadow-xs",
    accent: "bg-accent-soft text-accent border-accent/20 font-medium",
    success: "bg-emerald-500/10 text-success border-success/20 font-medium",
    outline: "bg-transparent text-foreground-secondary border-border",
    subtle: "bg-background-secondary text-foreground border-transparent",
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
