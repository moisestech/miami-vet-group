import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sectionClass = "snap-start min-h-screen w-full flex items-center relative overflow-hidden px-4 md:px-6 py-16 md:py-24"
