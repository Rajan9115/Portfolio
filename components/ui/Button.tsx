import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "subtle";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        "bg-accent text-white hover:opacity-90 shadow-xs active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent/40 border border-transparent",
      secondary:
        "bg-card text-foreground hover:bg-background-secondary border border-border shadow-xs active:scale-[0.98]",
      outline:
        "bg-transparent text-foreground hover:bg-background-secondary border border-border active:scale-[0.98]",
      ghost:
        "bg-transparent text-foreground hover:bg-background-secondary border border-transparent",
      subtle:
        "bg-accent-soft text-accent hover:opacity-80 border border-transparent font-medium",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs font-medium rounded-lg gap-1.5",
      md: "h-10 px-4 text-sm font-medium rounded-lg gap-2",
      lg: "h-12 px-6 text-base font-medium rounded-xl gap-2.5",
      icon: "h-10 w-10 p-0 rounded-lg justify-center",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-sans transition-all duration-150 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Please wait...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
