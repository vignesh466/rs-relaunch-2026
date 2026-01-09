"use client";

import { motion } from "framer-motion";
import Colors from "../../src/constants/Color";

interface LoadingProps {
  message?: string;
  variant?: "initial" | "route";
}

export default function LoadingComponent({
  message = "Loading...",
  variant = "initial",
}: LoadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      {/* Spinner */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-12 h-12 rounded-full"
        style={{
          border: `4px solid ${Colors.Primary_font}`,
          borderTop: "4px solid transparent",
        }}
      />
    </motion.div>
  );
}
