import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer skeuo-press focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-y-0 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground bg-[linear-gradient(180deg,color-mix(in_oklch,var(--color-primary)_100%,white_16%),var(--color-primary))] shadow-lift active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.35)]",
        destructive:
          "bg-destructive text-destructive-foreground bg-[linear-gradient(180deg,color-mix(in_oklch,var(--color-destructive)_100%,white_16%),var(--color-destructive))] shadow-lift active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.35)]",
        outline:
          "border border-input bg-background shadow-lift hover:bg-accent hover:text-accent-foreground active:shadow-[inset_0_2px_4px_var(--shadow-tint)]",
        secondary:
          "bg-secondary text-secondary-foreground bg-[linear-gradient(180deg,color-mix(in_oklch,var(--color-secondary)_100%,white_20%),var(--color-secondary))] shadow-lift active:shadow-[inset_0_2px_4px_var(--shadow-tint)]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
