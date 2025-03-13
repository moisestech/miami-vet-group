"use client"

import { motion, type MotionValue, useScroll, useTransform } from "framer-motion"
import { type ComponentPropsWithoutRef, type FC, type ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
  containerClassName?: string
}

const Word: FC<{
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
  className?: string
}> = ({ children, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0, 1])
  const color = useTransform(
    progress,
    [range[0], range[1]],
    ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 1)"]
  )

  return (
    <span className="relative mx-1">
      <motion.span 
        style={{ 
          opacity,
          color
        }} 
        className={cn("", className)}
      >
        {children}
      </motion.span>
    </span>
  )
}

export const TextReveal: FC<TextRevealProps> = ({ 
  children, 
  className,
  containerClassName 
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div 
      ref={targetRef} 
      className={cn("relative min-h-[100px]", containerClassName)}
    >
      <span className={cn(
        "flex flex-wrap text-xl md:text-3xl lg:text-4xl",
        className
      )}>
        {words.map((word, i) => {
          const start = i / (words.length * 1.5)
          const end = start + (1 / words.length)
          return (
            <Word 
              key={i} 
              progress={scrollYProgress} 
              range={[start, end]}
              className="font-semibold"
            >
              {word}
            </Word>
          )
        })}
      </span>
    </div>
  )
} 