"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck } from 'react-icons/fa6';

interface CopyTextProps {
  text: string;
  className?: string;
}

export function CopyText({ text, className = "" }: CopyTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      className={`group relative inline-flex items-center gap-2 cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{text}</span>
      <motion.div
        className="flex items-center gap-1 text-[#5e208e]/60 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      >
        {copied ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-green-500"
          >
            <FaCheck className="w-4 h-4" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <FaCopy className="w-4 h-4" />
          </motion.div>
        )}
        <span className="text-sm">
          {copied ? 'Copied!' : 'Copy'}
        </span>
      </motion.div>
    </motion.button>
  );
} 