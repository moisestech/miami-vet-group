"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
  fade?: boolean;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  fade = false,
  ...props
}: MarqueeProps) {
  const [contentWidth, setContentWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  console.log(contentWidth, scrollWidth, vertical, repeat);

  useEffect(() => {
    if (contentRef.current && scrollerRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
      setScrollWidth(scrollerRef.current.scrollWidth);
    }
  }, []);

  return (
    <div
      className={cn(
        "group relative overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-[var(--gap)] [--play-state:running] [animation:scroll_var(--duration)_linear_infinite]",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[--play-state:paused]"
        )}
        ref={scrollerRef}
        style={{
          animationPlayState: "var(--play-state)",
        }}
      >
        <div className="flex shrink-0 gap-[var(--gap)]" ref={contentRef}>
          {children}
        </div>
        <div
          className="flex shrink-0 gap-[var(--gap)]"
          aria-hidden
        >
          {children}
        </div>
      </div>

      {fade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background to-transparent"></div>
        </>
      )}
    </div>
  );
}
