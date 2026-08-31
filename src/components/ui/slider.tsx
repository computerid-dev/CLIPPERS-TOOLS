import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="inset-well relative h-1.5 w-full grow overflow-hidden rounded-full">
      <SliderPrimitive.Range className="absolute h-full bg-[linear-gradient(180deg,color-mix(in_oklch,var(--color-primary)_85%,black_8%),var(--color-primary))]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="knob-gloss block h-4 w-4 rounded-full border border-primary/40 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
