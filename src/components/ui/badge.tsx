import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground bg-[linear-gradient(180deg,color-mix(in_oklch,var(--color-primary)_100%,white_16%),var(--color-primary))] shadow-lift",
        secondary: "inset-well border-transparent text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground bg-[linear-gradient(180deg,color-mix(in_oklch,var(--color-destructive)_100%,white_16%),var(--color-destructive))] shadow-lift",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
